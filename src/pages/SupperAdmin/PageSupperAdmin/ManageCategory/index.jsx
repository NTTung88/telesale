//Style
import styles from "./ManageCategory.module.css";
// Icons
import { AiFillFileExcel } from "react-icons/ai";
//Component
import TableCategory from "../../../../components/TableManage/TableCategory";
function SpAdminCategory() {
  return (
    <div className={styles.box__content}>
      <div className={styles.head__box}>
        <h3>Loại</h3>
        <div className={styles.buttons}>
          <button className={`${styles.btn__black} ${styles.btn}`}>
            <AiFillFileExcel style={{ marginRight: "5px" }} />
            Thêm thể loại
          </button>
        </div>
      </div>

      <div className={styles.content}>
        {/* Data user */}
        <div className={styles.table}>
          <TableCategory />
        </div>
      </div>
    </div>
  );
}

export default SpAdminCategory;
