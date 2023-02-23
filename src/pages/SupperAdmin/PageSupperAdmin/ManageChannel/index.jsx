//Style
import styles from "./ManageChannel.module.css";
// Icons
import { AiFillFileExcel } from "react-icons/ai";
//Component
import TableChannel from "../../../../components/TableManage/TableChannel";

function SpAdminChannel() {
  return (
    <div className={styles.box__content}>
      <div className={styles.head__box}>
        <h3>Kênh</h3>
        <div className={styles.buttons}>
          <button className={`${styles.btn__black} ${styles.btn}`}>
            <AiFillFileExcel style={{ marginRight: "5px" }} />
            Thêm kênh
          </button>
        </div>
      </div>

      <div className={styles.content}>
        {/* Data user */}
        <div className={styles.table}>
          <TableChannel />
        </div>
      </div>
    </div>
  );
}

export default SpAdminChannel;
