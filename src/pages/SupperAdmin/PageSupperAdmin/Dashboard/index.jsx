//Styles
import styles from "./Dashboard.module.css";
function SpAdminDashboard() {
  return (
    <div className={styles.wapper}>
      <p className={styles.title}>Report day</p>
      <div className={styles.timeline}></div>
    </div>
  );
}

export default SpAdminDashboard;
