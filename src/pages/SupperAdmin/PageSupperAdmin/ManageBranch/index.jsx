//Style
import styles from "./ManageBranch.module.css";
// Icons
import { AiFillFileExcel } from "react-icons/ai";
//Component

import TableBranch from "../../../../components/TableManage/TableBranch";

function SpAdminBranch() {
  return (
    <div className={styles.box__content}>
      <div className={styles.head__box}>
        <h3>Chi nhánh</h3>
        <div className={styles.buttons}>
          <button className={`${styles.btn__black} ${styles.btn}`}>
            <AiFillFileExcel style={{ marginRight: "5px" }} />
            Thêm chi nhánh
          </button>
        </div>
      </div>

      <div className={styles.content}>
        {/* Data user */}
        <div className={styles.table}>
          <TableBranch />
        </div>
      </div>
    </div>
  );
}

export default SpAdminBranch;
