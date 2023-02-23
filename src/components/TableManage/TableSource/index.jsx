//Style
import styles from "./Table.module.css";
//icon
import { TiDelete } from "react-icons/ti";
import { FaPen } from "react-icons/fa";
function TableSource() {
  return (
    <>
      {/* Render title the table of Manage Channel */}
      <div className={styles.head_new}>
        <span style={{ textAlign: "center" }}>STT</span>
        <span style={{ textAlign: "center" }}>MÃ NGUỒN</span>
        <span style={{ textAlign: "center" }}>NGUỒN</span>
        <span style={{ textAlign: "center" }}>SỬA ĐỔI LẦN CUỐI</span>
        <span style={{ textAlign: "center" }}>SỬA</span>
        <span style={{ textAlign: "center" }}>XÓA BỎ</span>
      </div>
      {/* Render data of Manage Channel  */}
      <div className={styles.content__xx}>
        <div className={styles.content_new}>
          <span style={({ color: "grey" }, { textAlign: "center" })}>1</span>
          <span style={{ textAlign: "center" }}>ZL</span>
          <span style={{ textAlign: "center" }}>Zalo</span>
          <span style={{ textAlign: "center" }}>22/2/2023</span>
          <span style={{ textAlign: "center" }}>
            <FaPen className={styles.btn__e} />
          </span>
          <span style={{ textAlign: "center" }}>
            <TiDelete className={styles.btn__d} />
          </span>
        </div>
      </div>
      {/* Choose element show on table */}
      <div className={styles.show_element}>
        <select>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <span>các mục trên mỗi trang</span>
      </div>
    </>
  );
}

export default TableSource;
