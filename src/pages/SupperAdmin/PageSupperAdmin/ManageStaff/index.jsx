//Style
import styles from "./ManageStaff.module.css";

//Component
import TableStaff from "../../../../components/TableManage/TableStaff";
import TableReportCall from "../../../../components/TableManage/TableReportCall";
import TableReportCallOverall from "../../../../components/TableManage/TableReportCallOverall";
import TableReportCallInMonth from "../../../../components/TableManage/TableReportCallInMonth";
import LineChartTotalCall from "../../../../components/TableManage/LineChartTotalCall";
//Chart

function SpAdminStaff() {
  return (
    <>
      <div className={styles.box__content}>
        <div className={styles.head__box}>
          <h3>Quản lý nhân viên</h3>
        </div>

        <div className={styles.content}>
          {/* Data user */}
          <div className={styles.table}>
            <TableStaff />
          </div>
        </div>
      </div>
      <div className={styles.title}>
        <h3>Ngày báo cáo</h3>
      </div>
      <div>
        <input type="date" className={styles.start_time} />
        <span className={styles.to_ft}>Đến</span>
        <input type="date" className={styles.end_time} />
      </div>
      <div className={styles.box__content}>
        <div className={styles.head__box}>
          <h3>
            Báo cáo cuộc gọi Từ 2023-02-24 - 2023-02-24 Tổng : ( 0 cuộc gọi )
          </h3>
        </div>

        <div className={styles.content}>
          {/* Data user */}
          <div className={styles.table}>
            <TableReportCall />
          </div>
        </div>
      </div>

      <div className={styles.box__content}>
        <div className={styles.head__box}>
          <h3>Báo cáo cuộc gọi</h3>
        </div>

        <div className={styles.content}>
          {/* Data user */}
          <div className={styles.table}>
            <TableReportCallOverall />
          </div>
        </div>
      </div>
      <div className={styles.title}>
        <h3>Báo cáo tháng</h3>
      </div>
      <div>
        <input type="date" className={styles.start_time} />
      </div>
      <div className={styles.box__content}>
        <div className={styles.head__box}>
          <h3>Báo cáo cuộc gọi trong tháng 1</h3>
        </div>

        <div className={styles.content}>
          {/* Data user */}
          <div className={styles.table}>
            <TableReportCallInMonth />
          </div>
        </div>
      </div>
      <div className={styles.box__content}>
        <div className={styles.head__box}>
          <h3>Tổng số cuộc gọi trong tháng</h3>
        </div>
        <div className={styles.content}>
          {/* Data user */}
          <div className={styles.table}>
            <LineChartTotalCall />
          </div>
        </div>
      </div>
    </>
  );
}

export default SpAdminStaff;
