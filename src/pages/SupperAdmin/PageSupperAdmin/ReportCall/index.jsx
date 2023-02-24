//Style
import LineChartCallStatistics from "../../../../components/TableManage/LineChartCallStatistics";
import TableDetailCall from "../../../../components/TableManage/TableDetailCall";
// Component
import TableDetailCallOfCampaige from "../../../../components/TableManage/TableDetailCallOfCampaige";
import TableDetailCallOfStaff from "../../../../components/TableManage/TableDetailCallOfStaff";
import styles from "./ReportCall.module.css";

function SpAdminReportCall() {
  return (
    <>
      <div className={styles.title}>
        <h3>Ngày báo cáo</h3>
      </div>
      <div>
        <input type="date" className={styles.start_time} />
        <span className={styles.to_ft}>Đến</span>
        <input type="date" className={styles.end_time} />
      </div>

      <div className={styles.box__content__call}>
        <div className={styles.title__call}>
          <h4>Thống kê cuộc gọi</h4>
        </div>
        <div>
          <LineChartCallStatistics />
        </div>
      </div>

      <div className={styles.box__content}>
        <div className={styles.head__box}>
          <h3>Chi tiết cuộc gọi theo ngày - Tổng số ( 0 cuộc gọi )</h3>
        </div>

        <div className={styles.content}>
          {/* Data user */}
          <div className={styles.table}>
            <TableDetailCall />
          </div>
        </div>
      </div>

      <div className={styles.box__content}>
        <div className={styles.head__box}>
          <h3>Chi tiết cuộc gọi theo nhân viên - Tổng cộng : ( 0 cuộc gọi )</h3>
        </div>

        <div className={styles.content}>
          {/* Data user */}
          <div className={styles.table}>
            <TableDetailCallOfStaff />
          </div>
        </div>
      </div>

      <div className={styles.box__content}>
        <div className={styles.head__box}>
          <h3>Chi tiết cuộc gọi theo Chiến dịch - tổng số ( 6 cuộc gọi )</h3>
        </div>

        <div className={styles.content}>
          {/* Data user */}
          <div className={styles.table}>
            <TableDetailCallOfCampaige />
          </div>
        </div>
      </div>
    </>
  );
}

export default SpAdminReportCall;
