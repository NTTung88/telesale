//Style
import styles from "./Table.module.css";
//icon
import { TiDelete } from "react-icons/ti";
import { FaPen } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
function TableCustomer() {
  return (
    <>
      {/* Render title the table of Manage Campaign */}
      <div className={styles.head_new}>
        <span style={{ textAlign: "center" }}>STT</span>
        <span style={{ textAlign: "center" }}>HỌ</span>
        <span style={{ textAlign: "center" }}>TÊN</span>
        <span style={{ textAlign: "center" }}>ĐIỆN THOẠI</span>
        <span style={{ textAlign: "center" }}>KHÁCH HÀNG CẤP</span>
        <span style={{ textAlign: "center" }}>NHẬP KHẨU</span>
        <span style={{ textAlign: "center" }}>NHÂN VIÊN</span>
        <span style={{ textAlign: "center" }}>GỌI</span>
        <span style={{ textAlign: "center" }}>BIÊN TẬP</span>
        <span style={{ textAlign: "center" }}>XÓA BỎ</span>
      </div>
      {/* Render data of Manage Campaign  */}
      <div className={styles.content__xx}>
        <div className={styles.content_new}>
          <span style={({ color: "grey" }, { textAlign: "center" })}>1</span>
          <span style={{ textAlign: "center" }}>Lê</span>
          <span style={{ textAlign: "center" }}>Lợi</span>
          <span style={{ textAlign: "center" }}>0918171223</span>
          <span style={{ textAlign: "center" }}>
            {" "}
            Khách thanh toán tiền và nhận sản phẩm{" "}
          </span>
          <span style={{ textAlign: "center" }}>22/2/2023 </span>
          <span style={{ textAlign: "center" }}>kienstaff</span>
          <span style={{ textAlign: "center" }}>
            <IoMdCall className={styles.btn__c} />
          </span>
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

export default TableCustomer;
