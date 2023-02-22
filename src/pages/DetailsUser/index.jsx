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
      toast.error("Không được bỏ trống");
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
    toast.success('Update thành công')
    navigate("/staff");
  };
  //Cầm máy
  const acceptCall = () => {
    deviceclv?.current.accept()
    };
  // Tắt máy, hủy cuộc gọi
  const rejectCall = () => {
    deviceclv?.current.reject()
  };
  return (
    <div className={styles.wrapper}>
     <div className={`${styles.left}`}>
        <h4>Vai trò: Nhân viên</h4>
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
            <span>Quản lý khách hàng</span>
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
            <span>Lịch</span>
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
            <span>Chiến dịch</span>
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
            <span>Bảng thông tin</span>
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
            <span> Báo cáo cuộc gọi</span>
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
            <span> Báo cáo đơn hàng</span>
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
            <span>Báo cáo Chiến dịch</span>
          </div>
        </div>
      </div>

      <div className={styles.details}>
        <Header />
        <div className={styles.forms}>
          <div className={styles.form1}>
            <h6 style={{paddingBottom: '5px'}}>Khách hàng: {firstName + " " + lastName}</h6>
            <h4
              style={{
                marginTop: "20px",
                fontSize: "14px",
                color: "rgb(73, 163, 241)",
              }}
            >
              Máy nhánh: {user.CFDisplay}
            </h4>
            {location.state?.data ? (
              <div className={styles.btn__usercall}>
                <span style={{ display: "block", color: "grey" }}>
                  {location.state?.data.CallNumber}
                </span>
                <Button onClick={acceptCall}>Nghe máy</Button>
                <Button onClick={rejectCall} className={styles.btn_green}>
                  Tắt máy
                </Button>
              </div>
            ) : null}
            <form>
              <div className={styles.field}>
                <label>Người Phụ Trách</label>
                <Input disabled type="text" value={userName} />
              </div>
              <div className={styles.field}>
                <label>Họ</label>
                <Input
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
              </div>
              <div className={styles.field}>
                <label>Tên</label>
                <Input
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
              </div>
              <div className={styles.field}>
                <label>Số điện thoại</label>
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
                <label>Địa chỉ</label>
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
                <label>Kênh KH</label>
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
                <label>Nguồn KH</label>
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
                <label>Giới tính</label>
                <select ref={genderRef}>
                  <option value="1">Nam</option>
                  <option value="0">Nu</option>
                </select>
              </div>
              <div className={styles.field}>
                <label>Ngày sinh</label>
                <Input ref={dateRef} type="date" />
              </div>
              <div className={styles.buttons}>
                <Button onClick={() => navigate("/staff")}>Quay về</Button>
                <Button onClick={handleUpdate} className={styles.btn_green}>
                  Cập nhật
                </Button>
              </div>
            </form>
          </div>

          {/* form2 */}
          <div className={styles.form2}>
            <h6>Thông tin cuộc gọi</h6>
            <div className={styles.buttons}>
              <Button>Lịch hẹn</Button>
              <Button className={styles.btn_black}>Đặt hàng</Button>
              <Button>Gọi</Button>
            </div>
            <form>
              <div className={styles.field}>
                <label>Thời gian gọi</label>
                <Input disabled type="text" />
              </div>
              <div className={styles.field}>
                <label>Trạng thái</label>
                <Input disabled type="text" />
              </div>
              <div className={styles.field}>
                <label>Thực gọi</label>
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
                <label>Thông tin cuộc gọi</label>
                <Input type="text" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
