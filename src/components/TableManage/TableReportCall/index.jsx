//Style
import styles from "./Table.module.css";
//icon

function TableReportCall() {
  return (
    <>
      {/* Render title the table of Manage Campaign */}
      <div className={styles.head_new}>
        <span style={{ textAlign: "center" }}>STT</span>
        <span style={{ textAlign: "center" }}>NHÂN VIÊN</span>
        <span style={{ textAlign: "center" }}>TÊN TÀI KHOẢN</span>
        <span style={{ textAlign: "center" }}>MỞ RỘNG</span>
        <span style={{ textAlign: "center" }}>TỔNG CUỘC GỌI</span>
      </div>
      {/* Render data of Manage Campaign  */}
      <div className={styles.content__xx}>
        <div className={styles.content_new}>
          <span style={({ color: "grey" }, { textAlign: "center" })}>1</span>
          <span style={{ textAlign: "center" }}>Tuấn Anh</span>
          <span style={{ textAlign: "center" }}>Tuấn Anh</span>
          <span style={{ textAlign: "center" }}>103</span>
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

export default TableReportCall;
