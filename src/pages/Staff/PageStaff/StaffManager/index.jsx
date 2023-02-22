// Styles
import styles from "./StaffManager.module.css";
// Icons
import { AiOutlinePlus, AiFillFileExcel } from "react-icons/ai";
// Context
import { useAuth } from "../../../../context/AuthContext";
import { useAxios } from "../../../../context/AxiosContex";
// Modules
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
// Functions
import { userNamegroup } from "../../../../utils/functions";
// Components
import { UserData } from "../../../../components/UserData";


export function StaffManager({
  setUserID,
  deviceclv,
  setOpenModal,
  setOpenFormCall,
}) {
  // navigate
  const navigate = useNavigate();
  // sort data name
  const groupName = [];
  const groupNamed = [];
  // Apis link
  const {
    getSource,
    getChannels,
    getLevelUser,
    getCustomers,
    getcampaigns,
  } = useAxios();
  // data from authcontext
  const { user, brand } = useAuth();
  // get levels users
  const { data: levels } = useQuery(["levels", brand], () =>
    getLevelUser(brand)
  );
 
  // get customers
  const { data: customers, isLoading } = useQuery(["customers"], getCustomers);
  // get capaigns
  const { data: campaigns } = useQuery(["campaigns"], getcampaigns);
  // get source
  const { data: source } = useQuery(["source", brand], () => getSource(brand));
  // get channels
  const { data: channels } = useQuery(["channels", brand], () =>
    getChannels(brand)
  );

  // Call to users
  function handleCallToUser({ number, id }) {
    setUserID(id)
    deviceclv?.current.initiateCall(number);
    setOpenFormCall(true);
  }
  // ******* //
  // sort group name data
  customers?.forEach((elm) => {
    if (elm.userId == user.Id) {
      groupName.push(elm);
    }
  });

  userNamegroup(groupName)?.forEach((value, index) => {
    groupNamed.push({ key: index, value });
  });
  // ******* //
  function filterCapaign(e) {
     
  }
  return (
    <>
      <div className={styles.campaign}>
        <span>Chiến dịch: </span>
        <select onChange={filterCapaign}>
        <option value="">Chọn chiến dịch</option>
          {campaigns &&
            campaigns.map((elm, index) => (           
              <option key={index} value={elm.id}>
                {elm.name}
              </option>
            ))}
        </select>
      </div>

      <div className={styles.box__content}>
        <div className={styles.head__box}>
          <h3>Khách hàng</h3>
          <div className={styles.buttons}>
            <button
              onClick={() => setOpenModal(true)}
              className={`${styles.btn__green} ${styles.btn}`}
            >
              <AiOutlinePlus style={{ marginRight: "5px" }} />
              Thêm khách hàng
            </button>
            <button className={`${styles.btn__black} ${styles.btn}`}>
              <AiFillFileExcel style={{ marginRight: "5px" }} />
              Thêm excel
            </button>
          </div>
        </div>

        <div className={styles.content}>
          {/* Level khách hàng */}
          <div className={styles.selects}>
            <div>
              <h5>Level khách hàng:</h5>
              <select>
                {levels &&
                  levels.map((elm, index) => (
                    <option key={index} value={elm.brandID}>
                      {elm.name}
                    </option>
                  ))}
              </select>
            </div>
            {/* Kênh khách hàng */}
            <div>
              <h5>Kênh khách hàng:</h5>
              <select>
                {channels &&
                  channels.map((cn, index) => (
                    <option key={index} value={cn.id}>
                      {cn.name}
                    </option>
                  ))}
              </select>
            </div>

            <div>
              <h5>Nguồn khách hàng:</h5>
              <select>
                {source &&
                  source.map((sr, index) => (
                    <option key={index} value={sr.id}>
                      {sr.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className={styles.select__btn}>
            <button className={`${styles.btn} ${styles.btn__filter}`}>
              Lọc
            </button>
          </div>
          {/* Data user */}
          <div className={styles.table}>
            <UserData
              handleCallToUser={handleCallToUser}
              isLoading={isLoading}
              groupNamed={groupNamed}
            />
          </div>
        </div>
      </div>
    </>
  );
}
