//Style
import styles from "./ManageSource.module.css";
// Icons
import { AiFillFileExcel } from "react-icons/ai";
//Component
import TableSource from "../../../../components/TableManage/TableSource";

function SpAdminSource() {
  return (
    <div className={styles.box__content}>
      <div className={styles.head__box}>
        <h3>Nguồn</h3>
        <div className={styles.buttons}>
          <button className={`${styles.btn__black} ${styles.btn}`}>
            <AiFillFileExcel style={{ marginRight: "5px" }} />
            Thêm nguồn
          </button>
        </div>
      </div>

      <div className={styles.content}>
        {/* Data user */}
        <div className={styles.table}>
          <TableSource />
        </div>
      </div>
    </div>
  );
}

export default SpAdminSource;
