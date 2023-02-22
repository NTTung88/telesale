// Components
import { LeftStaff } from "../Staff/LeffStaff";
import { RightStaff } from "./RightStaff";
import { FormModal } from "../../components/FormModal";
import { CallToUser } from "../../components/CallToUser";
// Styles
import styles from "./Home.module.css";
// Hooks
import { useLocalStorage } from "../../hooks/useStorage";
import { useClv } from "../../hooks/useClv";
// Context APi
import { useAuth } from "../../context/AuthContext";
import { useAxios } from "../../context/AxiosContex";
// Modules
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

function Home() {
  // active page staff
  const [active, setActive] = useLocalStorage("staffmanager");
  const navigate = useNavigate();
  //open Modal
  const [openModal, setOpenModal] = useState(false);
  const [openFormCall, setOpenFormCall] = useState(false);
  const [userID, setUserID] = useState(null);
  const [phoneUserCall, setPhoneUserCall] = useState(null);

  // brand
  const { brand, dataCalled, dataAfterParse } = useAuth();
  useEffect(() => {
    if (dataAfterParse?.Status === "Ringing") {
      setPhoneUserCall(dataAfterParse?.CallNumber);
    }
  }, [dataAfterParse]);
  // clv
  const [deviceclv, rejectStt] = useClv();
  const { getCustomerByPhone } = useAxios();
  if (brand == null) {
    return <Navigate to="/brand" />;
  }

  //get customer
  const { data: userCall } = useQuery(
    ["userCall", userID],
    () => getCustomer(userID),
    { enabled: !!userID }
  );
  //get customers

  const { data: customer } = useQuery(
    ["ctmbyphone", phoneUserCall],
    () => getCustomerByPhone(phoneUserCall),
    { enabled: !!phoneUserCall }
  );

  useEffect(() => {
    if (customer) {
      navigate(`/khach-hang/${customer[0]?.id}`, {
        state: { data: dataAfterParse }
      });
    }
  }, [customer]);

  return (
    <>
      <div className={styles.wrapper}>
        <LeftStaff active={active} setActive={setActive} />
        <RightStaff
          setUserID={setUserID}
          deviceclv={deviceclv}
          setOpenFormCall={setOpenFormCall}
          setOpenModal={setOpenModal}
          active={active}
        />
      </div>
      <FormModal setOpenModal={setOpenModal} openModal={openModal} />
      <CallToUser
        user={userCall}
        deviceclv={deviceclv}
        rejectStt={rejectStt}
        openFormCall={openFormCall}
        setOpenFormCall={setOpenFormCall}
      />
    </>
  );
}

export default Home;
