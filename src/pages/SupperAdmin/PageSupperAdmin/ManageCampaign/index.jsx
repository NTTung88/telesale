//Style
import TableCampaign from "../../../../components/TableManage/TableCampaign";
import styles from "./ManageCampaign.module.css";
// Icons
import { AiFillFileExcel } from "react-icons/ai";

function SpAdminCampaign() {
  return (
    <div className={styles.box__content}>
      <div className={styles.head__box}>
        <h3>Chiến dịch</h3>
        <div className={styles.buttons}>
          <button className={`${styles.btn__black} ${styles.btn}`}>
            <AiFillFileExcel style={{ marginRight: "5px" }} />
            Thêm chiến dịch
          </button>
        </div>
      </div>

      <div className={styles.content}>
        {/* Data user */}
        <div className={styles.table}>
          <TableCampaign />
        </div>
      </div>
    </div>
  );
}

export default SpAdminCampaign;
