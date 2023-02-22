//Style
import { Header } from "../../../layouts/Header";
//Layout
import styles from "./RightSupperAdmin.module.css";
//Components
import SpAdminDashboard from "../PageSupperAdmin/Dashboard";
import SpAdminReportCall from "../PageSupperAdmin/ReportCall";
import SpAdminStaff from "../PageSupperAdmin/ManageStaff";
import SpAdminReportCampaign from "../PageSupperAdmin/ReportCampaign";
import SpAdminCustomer from "../PageSupperAdmin/ManageCustomer";
import SpAdminLevel from "../PageSupperAdmin/ManageLevel";
import SpAdminBranch from "../PageSupperAdmin/ManageBranch";
import SpAdminSource from "../PageSupperAdmin/ManageSource";
import SpAdminChannel from "../PageSupperAdmin/ManageChannel";
import SpAdminCategory from "../PageSupperAdmin/ManageCategory";
import SpAdminProduct from "../PageSupperAdmin/ManageProduct";
import SpAdminCampaign from "../PageSupperAdmin/ManageCampaign";
function RightSupperAdmin({
  setUserID,
  deviceclv,
  setOpenFormCall,
  active,
  setOpenModal,
}) {
  let content = <SpAdminDashboard />;
  // Set componet right
  if (active == "dashboard") {
    content = <SpAdminDashboard />;
  } else if (active == "reportCall") {
    content = <SpAdminReportCall />;
  } else if (active == "manageStaff") {
    content = <SpAdminStaff />;
  } else if (active == "reportCampaign") {
    content = <SpAdminReportCampaign />;
  } else if (active == "manageCustomer") {
    content = <SpAdminCustomer />;
  } else if (active == "manageLevel") {
    content = <SpAdminLevel />;
  } else if (active == "manageBranch") {
    content = <SpAdminBranch />;
  } else if (active == "manageSource") {
    content = <SpAdminSource />;
  } else if (active == "manageChannel") {
    content = <SpAdminChannel />;
  } else if (active == "manageCategory") {
    content = <SpAdminCategory />;
  } else if (active == "manageProduct") {
    content = <SpAdminProduct />;
  } else if (active == "manageCampaign") {
    content = <SpAdminCampaign />;
  } else {
    content = <SpAdminDashboard />;
  }
  return (
    <div className={styles.right}>
      <Header />
      {content}
    </div>
  );
}

export default RightSupperAdmin;
