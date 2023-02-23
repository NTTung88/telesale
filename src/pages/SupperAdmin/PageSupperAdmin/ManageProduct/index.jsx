//Style
import TableProduct from "../../../../components/TableManage/TableProduct";
import styles from "./ManageProduct.module.css";
// Icons
import { AiFillFileExcel } from "react-icons/ai";

function SpAdminProduct() {
  return (
    <div className={styles.box__content}>
      <div className={styles.head__box}>
        <h3>Sản phẩm</h3>
        <div className={styles.buttons}>
          <button className={`${styles.btn__black} ${styles.btn}`}>
            <AiFillFileExcel style={{ marginRight: "5px" }} />
            Thêm sản phẩm
          </button>
        </div>
      </div>

      <div className={styles.content}>
        {/* Data user */}
        <div className={styles.table}>
          <TableProduct />
        </div>
      </div>
    </div>
  );
}

export default SpAdminProduct;
