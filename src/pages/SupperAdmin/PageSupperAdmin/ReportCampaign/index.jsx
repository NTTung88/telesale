//Styles
import styles from "./ReportCampaign.module.css";
//component
import StatisticCall from "../../../../components/TableManage/StatisticCall";
import LineChartCallStatistics from "../../../../components/TableManage/LineChartCallStatistics";
import StatisticReport from "../../../../components/TableManage/StatisticReport";
import LineChartJS from "../../../../components/TableManage/LineChartJS";

function SpAdminReportCampaign() {
  return (
    <>
      <div className={styles.space_title}>
        <p className={styles.title}>Báo cáo chiến dịch</p>
      </div>
      <div className={styles.campaign}>
        <select>
          <option value="">Chọn chiến dịch</option>
        </select>
      </div>
      <div>
        <p className={styles.title}>Thống kê chiến dịch:</p>
      </div>

      <StatisticCall />

      <div className={styles.box__content__call}>
        <div className={styles.title__call}>
          <h4>Tổng hóa đơn</h4>
        </div>
        <div className={styles.charts}>
          <LineChartJS />
        </div>
      </div>
      <div className={styles.box__content__call}>
        <div className={styles.title__call}>
          <h4>Tổng cuộc gọi</h4>
        </div>
        <div className={styles.charts_call}>
          <LineChartJS />
        </div>
      </div>

      <StatisticReport />
    </>
  );
}

export default SpAdminReportCampaign;
