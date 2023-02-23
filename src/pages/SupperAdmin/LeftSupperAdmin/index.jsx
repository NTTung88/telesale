//Style
import styles from "./LeftSupperAdmin.module.css";
//Icon
import { AiFillAppstore } from "react-icons/ai";
function LeftSupperAdmin({ active, setActive }) {
  return (
    <div className={`${styles.left}`}>
      <h4>Vai trò: Quản lý</h4>
      <div className={styles.border}></div>
      <div className={styles.links}>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setActive("dashboard")}
          className={`${styles.link} ${
            active == "dashboard" && `${styles.active}`
          }`}
        >
          <AiFillAppstore
            style={{
              color: "white",
              fontSize: "18px",
              marginRight: "10px",
            }}
          />
          <span>Dashboar</span>
        </div>

        <div
          style={{ cursor: "pointer" }}
          onClick={() => setActive("reportCall")}
          className={`${styles.link} ${
            active == "reportCall" && `${styles.active}`
          }`}
        >
          <AiFillAppstore
            style={{
              color: "white",
              fontSize: "18px",
              marginRight: "10px",
            }}
          />
          <span>Báo cáo cuộc gọi</span>
        </div>

        <div
          style={{ cursor: "pointer" }}
          onClick={() => setActive("manageStaff")}
          className={`${styles.link} ${
            active == "manageStaff" && `${styles.active}`
          }`}
        >
          <AiFillAppstore
            style={{
              color: "white",
              fontSize: "18px",
              marginRight: "10px",
            }}
          />
          <span>Quản lý nhân viên</span>
        </div>

        <div
          style={{ cursor: "pointer" }}
          onClick={() => setActive("reportCampaign")}
          className={`${styles.link} ${
            active == "reportCampaign" && `${styles.active}`
          }`}
        >
          <AiFillAppstore
            style={{
              color: "white",
              fontSize: "18px",
              marginRight: "10px",
            }}
          />
          <span>Báo cáo chiến dịch</span>
        </div>
      </div>

      <div className={styles.border}></div>
      <div className={styles.links}>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setActive("manageCustomer")}
          className={`${styles.link} ${
            active == "manageCustomer" && `${styles.active}`
          }`}
        >
          <AiFillAppstore
            style={{
              color: "white",
              fontSize: "18px",
              marginRight: "10px",
            }}
          />
          <span>Quản lý khách hàng</span>
        </div>

        <div
          style={{ cursor: "pointer" }}
          onClick={() => setActive("manageLevel")}
          className={`${styles.link} ${
            active == "manageLevel" && `${styles.active}`
          }`}
        >
          <AiFillAppstore
            style={{
              color: "white",
              fontSize: "18px",
              marginRight: "10px",
            }}
          />
          <span> Quản lý cấp độ</span>
        </div>

        <div
          style={{ cursor: "pointer" }}
          onClick={() => setActive("manageBranch")}
          className={`${styles.link} ${
            active == "manageBranch" && `${styles.active}`
          }`}
        >
          <AiFillAppstore
            style={{
              color: "white",
              fontSize: "18px",
              marginRight: "10px",
            }}
          />
          <span> Quản lý chi nhánh</span>
        </div>

        <div
          style={{ cursor: "pointer" }}
          onClick={() => setActive("manageSource")}
          className={`${styles.link} ${
            active == "manageSource" && `${styles.active}`
          }`}
        >
          <AiFillAppstore
            style={{
              color: "white",
              fontSize: "18px",
              marginRight: "10px",
            }}
          />
          <span>Quản lý nguồn</span>
        </div>

        <div
          style={{ cursor: "pointer" }}
          onClick={() => setActive("manageChannel")}
          className={`${styles.link} ${
            active == "manageChannel" && `${styles.active}`
          }`}
        >
          <AiFillAppstore
            style={{
              color: "white",
              fontSize: "18px",
              marginRight: "10px",
            }}
          />
          <span>Quản lý kênh</span>
        </div>

        <div
          style={{ cursor: "pointer" }}
          onClick={() => setActive("manageCategory")}
          className={`${styles.link} ${
            active == "manageCategory" && `${styles.active}`
          }`}
        >
          <AiFillAppstore
            style={{
              color: "white",
              fontSize: "18px",
              marginRight: "10px",
            }}
          />
          <span>Quản lý danh mục</span>
        </div>

        <div
          style={{ cursor: "pointer" }}
          onClick={() => setActive("manageProduct")}
          className={`${styles.link} ${
            active == "manageProduct" && `${styles.active}`
          }`}
        >
          <AiFillAppstore
            style={{
              color: "white",
              fontSize: "18px",
              marginRight: "10px",
            }}
          />
          <span>Quản lý sản phẩm</span>
        </div>

        <div
          style={{ cursor: "pointer" }}
          onClick={() => setActive("manageCampaign")}
          className={`${styles.link} ${
            active == "manageCampaign" && `${styles.active}`
          }`}
        >
          <AiFillAppstore
            style={{
              color: "white",
              fontSize: "18px",
              marginRight: "10px",
            }}
          />
          <span>Quản lý chiến dịch</span>
        </div>
      </div>
    </div>
  );
}

export default LeftSupperAdmin;
