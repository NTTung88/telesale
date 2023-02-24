//Style
import styles from "./Table.module.css";
//icon
import { TiDelete } from "react-icons/ti";
import { FaPen } from "react-icons/fa";
function TableDetailCall() {
  return (
    <>
      {/* Render title the table of Manage Channel */}
      <div className={styles.head_new}>
        <span style={{ textAlign: "center" }}>STT</span>
        <span style={{ textAlign: "center" }}>NGÀY</span>
        <span style={{ textAlign: "center" }}>ĐÃ TRẢ LỜI</span>
        <span style={{ textAlign: "center" }}>TREO LÊN</span>
        <span style={{ textAlign: "center" }}>BẬN</span>
        <span style={{ textAlign: "center" }}>KHÔNG CÓ SẴN</span>
        <span style={{ textAlign: "center" }}>TỔNG CỘNG</span>
      </div>
      {/* Render data of Manage Channel  */}
      <div className={styles.content__xx}>
        <div className={styles.content_new}>
          <span style={({ color: "grey" }, { textAlign: "center" })}>1</span>
          <span style={{ textAlign: "center" }}>2023-02-24</span>
          <span style={{ textAlign: "center" }}>0 ( 0 % )</span>
          <span style={{ textAlign: "center" }}>0 ( 0 % )</span>
          <span style={{ textAlign: "center" }}>0 ( 0 % )</span>
          <span style={{ textAlign: "center" }}>0 ( 0 % )</span>
          <span style={{ textAlign: "center" }}>0</span>
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

export default TableDetailCall;
