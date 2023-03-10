// styles
import styles from "./DetailsUser.module.css";
// components
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Header } from "../../layouts/Header";
// contexts
import { useAxios } from "../../context/AxiosContex";
import { useAuth } from "../../context/AuthContext";
// Modules
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  useParams,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useCallback, useState, useRef, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useClv } from "../../hooks/useClv";
//Functions
import { formatNumber } from "../../utils/functions";
import {AiFillAppstore} from 'react-icons/ai'

export default function DetailsUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const location = useLocation();
  const { brand, user } = useAuth();
  const [deviceclv] = useClv();

  if (!id) {
    return <Navigate to="/staff" />;
  }

  // get customer
  const { data: customer, isFetching, isError } = useQuery(["customer", id], () => getCustomer(id), {
    enabled: !!id,
  });
console.log(customer)
  const { data: channels } = useQuery(["channels", brand], () =>
    getChannels(brand)
  );
  const { data: source } = useQuery(["source", brand], () => getSource(brand));
  
  if(customer?.status == 400) {
    return navigate('/staff')
  }
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [userName, setUsername] = useState();

  useEffect(() => {
    setFirstName(customer?.customer?.dataUsers?.firstName);
    setLastName(customer?.customer?.dataUsers?.lastName);
    setPhoneNumber(customer?.customer?.dataUsers?.phoneNumber);
    setEmail(customer?.customer?.dataUsers?.email);
    setAddress(customer?.customer?.dataUsers.address);
    setUsername(customer?.customer?.dataUsers.userName);
  }, [customer]);

  const cnIdRef = useRef();
  const lvIdRef = useRef();
  const scref = useRef();
  const genderRef = useRef();
  const dateRef = useRef();

  const { updateCustomer, getCustomer, getChannels, getSource } = useAxios();

  const updateCustomerMutation = useMutation(updateCustomer, {
    onSuccess: () => {
      queryClient.invalidateQueries("customers");
    },
  });

  //Update
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !email ||
      !address ||
      !dateRef?.current.value ||
      !genderRef.current?.value ||
      !lvIdRef.current?.value ||
      !scref.current?.value
    ) {
      toast.error("Kh??ng ???????c b??? tr???ng");
      return;
    }
    const data = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      address: address,
      dayOfBith: dateRef?.current.value,
      gender: +genderRef.current?.value,
      status: 0,
      channelId: +cnIdRef.current?.value,
      levelId: +lvIdRef.current?.value,
      userId: +user.Id,
      sourceDataId: +scref.current?.value,
    };
    await updateCustomerMutation.mutateAsync({ id, data });
    toast.success('Update th??nh c??ng')
    navigate("/staff");
  };
  //C???m m??y
  const acceptCall = () => {
    deviceclv?.current.accept()
    };
  // T???t m??y, h???y cu???c g???i
  const rejectCall = () => {
    deviceclv?.current.reject()
  };
  return (
    <div className={styles.wrapper}>
     <div className={`${styles.left}`}>
        <h4>Vai tr??: Nh??n vi??n</h4>
        <div className={styles.border}></div>
        <div className={styles.links}>
          <div style={{cursor: 'pointer'}}
           onClick={() => navigate('/staff')}
            className={`${styles.link}`}>
            <AiFillAppstore
              style={{
                color: 'white',
                fontSize: '18px',
                marginRight: '10px'
              }} />
            <span>Qu???n l?? kh??ch h??ng</span>
          </div>

          <div style={{cursor: 'pointer'}}
           onClick={() => navigate('/staff')}
           className={`${styles.link}`}>
            <AiFillAppstore
              style={{
                color: 'white',
                fontSize: '18px',
                marginRight: '10px'
              }} />
            <span>L???ch</span>
          </div>

          <div style={{cursor: 'pointer'}}
           onClick={() => navigate('/staff')}
           className={`${styles.link}`}>
            <AiFillAppstore
              style={{
                color: 'white',
                fontSize: '18px',
                marginRight: '10px'
              }} />
            <span>Chi???n d???ch</span>
          </div>
        </div>

        <div className={styles.border}></div>
        <div className={styles.links}>

          <div style={{cursor: 'pointer'}}
           onClick={() => navigate('/staff')}
           className={`${styles.link}`}>
            <AiFillAppstore
              style={{
                color: 'white',
                fontSize: '18px',
                marginRight: '10px'
              }} />
            <span>B???ng th??ng tin</span>
          </div>

          <div style={{cursor: 'pointer'}}
           onClick={() => navigate('/staff')}
           className={`${styles.link}`}>
            <AiFillAppstore
              style={{
                color: 'white',
                fontSize: '18px',
                marginRight: '10px'
              }} />
            <span> B??o c??o cu???c g???i</span>
          </div>

          <div style={{cursor: 'pointer'}} 
          onClick={() => navigate('/staff')}
          className={`${styles.link}`}>
            <AiFillAppstore
              style={{
                color: 'white',
                fontSize: '18px',
                marginRight: '10px'
              }} />
            <span> B??o c??o ????n h??ng</span>
          </div>

          <div style={{cursor: 'pointer'}}
           onClick={() => navigate('/staff')}
           className={`${styles.link}`}>
            <AiFillAppstore
              style={{
                color: 'white',
                fontSize: '18px',
                marginRight: '10px'
              }} />
            <span>B??o c??o Chi???n d???ch</span>
          </div>
        </div>
      </div>

      <div className={styles.details}>
        <Header />
        <div className={styles.forms}>
          <div className={styles.form1}>
            <h6 style={{paddingBottom: '5px'}}>Kh??ch h??ng: {firstName + " " + lastName}</h6>
            <h4
              style={{
                marginTop: "20px",
                fontSize: "14px",
                color: "rgb(73, 163, 241)",
              }}
            >
              M??y nh??nh: {user.CFDisplay}
            </h4>
            {location.state?.data ? (
              <div className={styles.btn__usercall}>
                <span style={{ display: "block", color: "grey" }}>
                  {location.state?.data.CallNumber}
                </span>
                <Button onClick={acceptCall}>Nghe m??y</Button>
                <Button onClick={rejectCall} className={styles.btn_green}>
                  T???t m??y
                </Button>
              </div>
            ) : null}
            <form>
              <div className={styles.field}>
                <label>Ng?????i Ph??? Tr??ch</label>
                <Input disabled type="text" value={userName} />
              </div>
              <div className={styles.field}>
                <label>H???</label>
                <Input
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
              </div>
              <div className={styles.field}>
                <label>T??n</label>
                <Input
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
              </div>
              <div className={styles.field}>
                <label>S??? ??i???n tho???i</label>
                <Input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  type="number"
                  value={phoneNumber}
                />
              </div>
              <div className={styles.field}>
                <label>Email</label>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  value={email}
                />
              </div>
              <div className={styles.field}>
                <label>?????a ch???</label>
                <Input
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  value={address}
                />
              </div>
              <div className={styles.field}>
                <label>Level KH</label>
                <select ref={lvIdRef}>
                  {customer?.customer?.levels &&
                    customer?.customer?.levels.map((lv, index) => (
                      <option key={index} value={lv.id}>
                        {lv.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className={styles.field}>
                <label>K??nh KH</label>
                <select ref={cnIdRef}>
                  {channels &&
                    channels.map((cn, index) => (
                      <option key={index} value={cn.id}>
                        {cn.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className={styles.field}>
                <label>Ngu???n KH</label>
                <select ref={scref}>
                  {source &&
                    source.map((sc, index) => (
                      <option value={sc.id} key={index}>
                        {sc.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className={styles.field}>
                <label>Gi???i t??nh</label>
                <select ref={genderRef}>
                  <option value="1">Nam</option>
                  <option value="0">Nu</option>
                </select>
              </div>
              <div className={styles.field}>
                <label>Ng??y sinh</label>
                <Input ref={dateRef} type="date" />
              </div>
              <div className={styles.buttons}>
                <Button onClick={() => navigate("/staff")}>Quay v???</Button>
                <Button onClick={handleUpdate} className={styles.btn_green}>
                  C???p nh???t
                </Button>
              </div>
            </form>
          </div>

          {/* form2 */}
          <div className={styles.form2}>
            <h6>Th??ng tin cu???c g???i</h6>
            <div className={styles.buttons}>
              <Button>L???ch h???n</Button>
              <Button className={styles.btn_black}>?????t h??ng</Button>
              <Button>G???i</Button>
            </div>
            <form>
              <div className={styles.field}>
                <label>Th???i gian g???i</label>
                <Input disabled type="text" />
              </div>
              <div className={styles.field}>
                <label>Tr???ng th??i</label>
                <Input disabled type="text" />
              </div>
              <div className={styles.field}>
                <label>Th???c g???i</label>
                <Input disabled type="text" />
              </div>
              <div className={styles.field}>
                <label>LinkFile</label>
                <Input disabled type="text" />
              </div>
              <div className={styles.field}>
                <label>Code</label>
                <Input disabled type="text" />
              </div>
              <div className={styles.field}>
                <label>Th??ng tin cu???c g???i</label>
                <Input type="text" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
