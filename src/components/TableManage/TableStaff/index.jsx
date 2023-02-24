//Style
import styles from "./Table.module.css";
//icon
import { HiEye } from "react-icons/hi";
import { FaPen } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
function TableStaff() {
  return (
    <>
      {/* Render title the table of Manage Channel */}
      <div className={styles.head_new}>
        <span style={{ textAlign: "center" }}>STT</span>
        <span style={{ textAlign: "center" }}>NHÂN VIÊN</span>
        <span style={{ textAlign: "center" }}>MỞ RỘNG</span>
        <span style={{ textAlign: "center" }}>TRẠNG THÁI</span>
        <span style={{ textAlign: "center" }}>ĐIỆN THOẠI</span>
        <span style={{ textAlign: "center" }}>ĐỊA CHỈ</span>
        <span style={{ textAlign: "center" }}>SỬA</span>
        <span style={{ textAlign: "center" }}>XEM</span>
        <span style={{ textAlign: "center" }}>GỌI QUA MÁY NHANH</span>
      </div>
      {/* Render data of Manage Channel  */}
      <div className={styles.content__xx}>
        <div className={styles.content_new}>
          <span style={({ color: "grey" }, { textAlign: "center" })}>1</span>
          <span style={{ textAlign: "center" }}>tuấn anh</span>
          <span style={{ textAlign: "center" }}>103</span>
          <span style={{ textAlign: "center" }}>NGOẠI TUYẾN</span>
          <span style={{ textAlign: "center" }}>0923123123</span>
          <span style={{ textAlign: "center" }}>1223</span>
          <span style={{ textAlign: "center" }}>
            <FaPen className={styles.btn__e} />
          </span>
          <span style={{ textAlign: "center" }}>
            <HiEye className={styles.btn__s} />
          </span>
          <span style={{ textAlign: "center" }}>
            <IoMdCall className={styles.btn__c} />
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

export default TableStaff;
