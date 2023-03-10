// Styles
import styles from "./FormModal.module.css";
// Icons
import { AiOutlineClose } from "react-icons/ai";
// Components
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
// Context
import { useAuth } from "../../context/AuthContext";
import { useAxios } from "../../context/AxiosContex";
// Modules
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useRef, useState } from "react";

export function FormModal({ openModal, setOpenModal }) {
  const queryClient = useQueryClient();
  const queryCache = queryClient.getQueryCache();

  const [check, setCheck] = useState(false);
  //Apis link

  const { getSource, getChannels, getLevelUser, getcampaigns, postCustomer } =
    useAxios();
  // Data from context
  const { user, brand } = useAuth();

  // get levels
  const { data: levels } = useQuery(["levels", brand], () =>
    getLevelUser(brand)
  );
  // get campaigns
  const { data: campaigns } = useQuery(["campaigns"], getcampaigns);
  // get source
  const { data: source } = useQuery(["source", brand], () => getSource(brand));
  // get channels
  const { data: channels } = useQuery(["channels", brand], () =>
    getChannels(brand)
  );

  // Ref data
  const fnRef = useRef();
  const lnRef = useRef();
  const pnRef = useRef();
  const emRef = useRef();
  const arRef = useRef();
  const bdRef = useRef();
  const genderRef = useRef();
  const levelRef = useRef();
  const channelRef = useRef();
  const sourceRef = useRef();
  const capaignRef = useRef();

  // Post mutation
  const postCustomerMutation = useMutation(postCustomer, {
    onSuccess: () => {
      queryClient.invalidateQueries("customers");
    },
  });
  // Post user function
  const handleAddUser = async (e) => {
    e.preventDefault();
    if (
      !fnRef.current.value ||
      !lnRef.current.value ||
      !pnRef.current.value ||
      !emRef.current.value ||
      !arRef.current.value ||
      !bdRef.current.value ||
      !genderRef.current.value ||
      !levelRef.current.value ||
      !channelRef.current.value ||
      !sourceRef.current.value ||
      !capaignRef.current.value
    ) {
      toast.error("Kh??ng ???????c b??? tr???ng m???c n??o");
      return;
    }
    const data = {
      firstName: fnRef.current?.value,
      lastName: lnRef.current?.value,
      phoneNumber: pnRef.current?.value,
      email: emRef.current?.value,
      address: arRef.current?.value,
      dayOfBith: bdRef.current?.value,
      gender: +genderRef.current?.value,
      status: 0,
      channelId: +channelRef.current?.value,
      levelId: +levelRef.current?.value,
      userId: +user.Id,
      sourceDataId: +sourceRef.current?.value,
    };

    await postCustomerMutation.mutateAsync({
      data,
      CampaignId: capaignRef.current.value,
    });
    toast.success("Th??m kh??ch h??ng th??nh c??ng");
    setOpenModal(false);
  };

  return (
    <div
      className={`${
        !openModal ? styles.formmoal : `${styles.formmoal} ${styles.at}`
      }`}
    >
      <form>
        <div className={styles.head}>
          <h6>Th??m kh??ch h??ng</h6>
          <AiOutlineClose
            onClick={() => setOpenModal(false)}
            style={{ color: "grey", fontSize: "20px", cursor: "pointer" }}
          />
        </div>
        <div className={styles.fields}>
          <div className={styles.field}>
            <label>T??n</label>
            <Input ref={lnRef} type="text" />
          </div>
          <div className={styles.field}>
            <label>H???</label>
            <Input ref={fnRef} type="text" />
          </div>
          <div className={styles.field}>
            <label>S??? ??i???n tho???i</label>
            <Input ref={pnRef} type="text" />
          </div>
          <div className={styles.field}>
            <label>?????a ch???</label>
            <Input ref={arRef} type="text" />
          </div>
          <div className={styles.field}>
            <label>Email</label>
            <Input ref={emRef} type="text" />
          </div>
          <div className={styles.flex}>
            <div className={styles.field}>
              <label>Sex</label>
              <select ref={genderRef}>
                <option value="1">Nam</option>
                <option value="0">N???</option>
              </select>
            </div>
            <div className={styles.field}>
              <label>Birthday</label>
              <Input ref={bdRef} type="date" />
            </div>
          </div>
          <div className={styles.field}>
            <label>Level</label>
            <select ref={levelRef}>
              {levels &&
                levels.map((lv, index) => (
                  <option key={index} value={lv.id}>
                    {lv.name}
                  </option>
                ))}
            </select>
          </div>
          <div className={styles.field}>
            <label>K??nh KH</label>
            <select ref={channelRef}>
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
            <select ref={sourceRef}>
              {source &&
                source.map((sor, index) => (
                  <option key={index} value={sor.id}>
                    {sor.name}
                  </option>
                ))}
            </select>
          </div>
          <div className={styles.field}>
            <label>Chi???n d???ch</label>
            <select ref={capaignRef}>
              {campaigns &&
                campaigns.map((cp, index) => (
                  <option key={index} value={cp.id}>
                    {cp.name}
                  </option>
                ))}
            </select>
          </div>

          <div className={styles.buttons}>
            <Button
              onClick={(e) => {
                e.preventDefault();
                setOpenModal(false);
              }}
            >
              H???y
            </Button>
            <Button onClick={handleAddUser}>Th??m kh??ch h??ng</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
