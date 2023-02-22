//Style
import styles from "./Table.module.css";

function TableCampaign() {
  return (
    <>
      {/* Render title the table of Manage Campaign */}
      <div className={styles.head_new}>
        <span style={{ textAlign: "center" }}>STT</span>
        <span>CHIẾN DỊCH</span>
        <span>NGÀY BẮT ĐẦU</span>
        <span>NGÀY CUỐI</span>
        <span>DOANH THU DỰ KIẾN</span>
        <span style={{ textAlign: "center" }}>BIÊN TẬP</span>
        <span style={{ textAlign: "center" }}>XÓA BỎ</span>
      </div>
      {/* Render data of Manage Campaign  */}
    </>
  );
}

export default TableCampaign;
