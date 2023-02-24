//Style
import styles from "./Table.module.css";
//icon

function TableReportCallInMonth() {
  return (
    <>
      {/* Render title the table of Manage Campaign */}
      <div className={styles.head_new}>
        <span style={{ textAlign: "center" }}>STT</span>
        <span style={{ textAlign: "center" }}>NHÂN VIÊN</span>
        <span style={{ textAlign: "center" }}>{"<"} 1 PHÚT</span>
        <span style={{ textAlign: "center" }}>{"<"} 2 PHÚT</span>
        <span style={{ textAlign: "center" }}>{"<"} 3 PHÚT</span>
        <span style={{ textAlign: "center" }}>{">"} 3 PHÚT</span>
        <span style={{ textAlign: "center" }}>KHÔNG CÓ CÂU TRẢ LỜI</span>
        <span style={{ textAlign: "center" }}>TỔNG SỐ CUỘC GỌI</span>

        <span style={{ textAlign: "center" }}>HÓA ĐƠN/CUỘC GỌI</span>
      </div>
      {/* Render data of Manage Campaign  */}
      <div className={styles.content__xx}>
        <div className={styles.content_new}>
          <span style={({ color: "grey" }, { textAlign: "center" })}>1</span>
          <span style={{ textAlign: "center" }}> Tuấn</span>
          <span style={{ textAlign: "center" }}>0 ( 0 % ) </span>
          <span style={{ textAlign: "center" }}>0 ( 0 % )</span>
          <span style={{ textAlign: "center" }}>0 ( 0 % )</span>
          <span style={{ textAlign: "center" }}>0 ( 0 % )</span>
          <span style={{ textAlign: "center" }}>0 ( 0 % )</span>
          <span style={{ textAlign: "center" }}>0 ( 0 % )</span>

          <span style={{ textAlign: "center" }}>0 ( 0 % )</span>
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

export default TableReportCallInMonth;
