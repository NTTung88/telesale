// styles
import styles from "./CallToUser.module.css";
// Components
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
// Modules
import { useAxios } from "../../context/AxiosContex";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
// context
import { useAuth } from "../../context/AuthContext";
import { useClv } from "../../hooks/useClv";
// functions
import {
  formatNumber,
  toHoursAndMinutes,
  truncate,
} from "../../utils/functions";

export function CallToUser({
  user,
  deviceclv,
  rejectStt,
  openFormCall,
  setOpenFormCall,
}) {
  const { getLevelUser } = useAxios();
  const { brand, dataCalled, dataAfterParse } = useAuth();

  const { data: levels } = useQuery(["levels", brand], () =>
    getLevelUser(brand)
  );
  // Get data from usl

  useEffect(() => {
    if (rejectStt == 11) {
      toast.error("Khách hàng đang bận");
    }
  }, [rejectStt]);

  function rejectCall() {
    deviceclv?.current.reject();
    toast.error("Cuộc gọi đã kết thúc");
  }

  function cancelCall() {
    setOpenFormCall(false);
    deviceclv?.current.reject();
  }
  return (
    <div
      className={`${
        !openFormCall ? styles.formmoal : `${styles.formmoal} ${styles.at}`
      }`}
    >
      <div className={styles.wrapf}>
        <div className={styles.form}>
          <div className={styles.head}>
            <h6>Thông tin cuộc gọi</h6>
          </div>
          <div className={styles.fields}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "14px",
              }}
            >
              <span>
                Tên khách hàng:{" "}
                {user?.customer.dataUsers.firstName +
                  " " +
                  user?.customer.dataUsers.lastName}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "14px",
              }}
            >
              <span>
                Số điện thoại:{" "}
                {dataAfterParse?.ReceiptNumber &&
                  formatNumber(dataAfterParse?.ReceiptNumber)}
              </span>
            </div>
            <div className={styles.field}>
              <label>Thời gian gọi</label>
              <Input
                disabled
                value={
                  dataAfterParse?.Data?.TotalTimeCall &&
                  toHoursAndMinutes(dataAfterParse?.Data?.TotalTimeCall)
                }
                type="text"
              />
            </div>
            <div className={styles.field}>
              <label>Trạng thái gọi</label>
              <Input
                disabled
                value={
                  dataAfterParse?.Status == "Up_Out"
                    ? "Đang nói chuyện"
                    : dataAfterParse?.Status == "Down_Out"
                    ? "Đã tắt máy"
                    : rejectStt == 11
                    ? "Khách hàng bận"
                    : rejectStt == 12
                    ? "Tự hủy"
                    : "Đang đổ chuông"
                }
                type="text"
              />
            </div>
            <div className={styles.field}>
              <label>Thực gọi</label>
              <Input
                disabled
                value={
                  dataAfterParse?.Data?.RealTimeCall &&
                  toHoursAndMinutes(dataAfterParse?.Data?.RealTimeCall)
                }
                type="text"
              />
            </div>
            <div className={styles.field}>
              <label>LinkFile</label>
              <Input
                disabled
                value={
                  dataAfterParse?.Data?.LinkFile &&
                  truncate(dataAfterParse?.Data?.LinkFile, 7, 7, 30)
                }
                type="text"
              />
            </div>
            <div className={styles.field}>
              <label>Code</label>
              <Input disabled value={dataAfterParse?.ApiKey} type="text" />
            </div>
            <div className={styles.field}>
              <label>Thông tin gọi</label>
              <textarea></textarea>
            </div>
            <div className={styles.order}>
              <div className={styles.field}>
                <label>Level khách hàng</label>
                <select>
                  {levels &&
                    levels.map((lv, i) => <option value={i}>{lv.name}</option>)}
                </select>
              </div>
              <Button
                style={{ background: "rgb(0, 136, 255)", marginTop: "10px" }}
              >
                Đặt hàng
              </Button>
              <Button onClick={rejectCall}>Tắt máy</Button>
              <Button>Lưu</Button>
              <Button onClick={cancelCall}>Hủy</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
