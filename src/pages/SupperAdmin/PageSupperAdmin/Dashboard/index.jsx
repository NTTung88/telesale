//Styles
import styles from "./Dashboard.module.css";
//Component
import LineChartCallStatistics from "../../../../components/TableManage/LineChartCallStatistics";
import StatisticCall from "../../../../components/TableManage/StatisticCall";

import StatisticReport from "../../../../components/TableManage/StatisticReport";
import LineChartJS from "../../../../components/TableManage/LineChartJS";
function SpAdminDashboard() {
  return (
    <>
      <div className={styles.title}>
        <h3>Ngày báo cáo</h3>
      </div>
      <div className={styles.dateTime}>
        <input type="date" className={styles.start_time} />
        <span className={styles.to_ft}>Đến</span>
        <input type="date" className={styles.end_time} />
      </div>

      <div className={styles.title}>
        <h3>Thống kê theo ngày: 2023-02-25 đến 2023-02-25</h3>
      </div>
      <div>
        <StatisticCall />
      </div>

      <div className={styles.box__content__call}>
        <div className={styles.title__call}>
          <h4>Thống kê cuộc gọi</h4>
        </div>
        <div className={styles.charts}>
          <LineChartJS />
        </div>
      </div>

      <div className={styles.box__content__call}>
        <div className={styles.title__call}>
          <h4>Thống kê cuộc gọi</h4>
        </div>
        <div className={styles.charts_call}>
          <LineChartJS />
        </div>
      </div>
      <div className={styles.title}>
        <h3>Báo cáo tháng</h3>
      </div>
      <div>
        <input type="date" className={styles.start_time} />
      </div>

      <div className={styles.title}>
        <h3>Thống kê theo tháng</h3>
      </div>
      <div>
        <StatisticCall />
      </div>

      <div className={styles.box__content__call}>
        <div className={styles.title__call}>
          <h4>Thống kê cuộc gọi</h4>
        </div>
        <div className={styles.charts}>
          <LineChartJS />
        </div>
      </div>

      <div className={styles.box__content__call}>
        <div className={styles.title__call}>
          <h4>Thống kê cuộc gọi</h4>
        </div>
        <div className={styles.charts_call}>
          <LineChartJS />
        </div>
      </div>

      <div>
        <StatisticReport />
      </div>
    </>
  );
}

export default SpAdminDashboard;
