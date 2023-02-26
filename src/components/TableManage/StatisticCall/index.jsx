//Styles
import styles from "./StatisticCall.module.css";
function StatisticCall() {
  return (
    <div>
      <div className={styles.statistic}>
        {/* Col -1  */}
        <div className={styles.statistic__element}>
          <div className={styles.box}>
            <div className={styles.box_1}>
              <div className={styles.box_2}>
                <div className={styles.box_3}>
                  <a className={styles.box_txt}>
                    <span className={styles.box_txt_sp}></span>
                  </a>
                  <a className={styles.box_txt}>
                    <span className={styles.box_txt_sp}></span>
                  </a>
                  <a className={styles.box_txt}>
                    <span className={styles.box_txt_sp}></span>
                  </a>
                </div>
                <div className={styles.box_3_right}>
                  <div className={styles.box_4_right}>
                    <span className={styles.box_txt_right}>Tổng hóa đơn</span>
                    <h4 className={styles.box_txt_sp_right}>0</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.box_1}>
              <div className={styles.box_2}>
                <div className={styles.box_3}>
                  <a className={styles.box_txt}>
                    <span className={styles.box_txt_sp}></span>
                  </a>
                  <a className={styles.box_txt}>
                    <span className={styles.box_txt_sp}></span>
                  </a>
                  <a className={styles.box_txt}>
                    <span className={styles.box_txt_sp}></span>
                  </a>
                </div>
                <div className={styles.box_3_right}>
                  <div className={styles.box_4_right}>
                    <span className={styles.box_txt_right}>
                      Cuộc gọi đã nhận
                    </span>
                    <h4 className={styles.box_txt_sp_right}>0</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* col -2 */}
        <div className={styles.statistic__element}>
          <div className={styles.box}>
            <div className={styles.box_1}>
              <div className={styles.box_2}>
                <div className={styles.box_3}>
                  <a className={styles.box_txt}>
                    <span className={styles.box_txt_sp}>Không tăng</span> so với
                    cùng kì
                  </a>
                  <a className={styles.box_txt}>
                    <span className={styles.box_txt_sp}></span>
                  </a>
                  <a className={styles.box_txt}>
                    <span className={styles.box_txt_sp}></span>
                  </a>
                </div>
                <div className={styles.box_3_right}>
                  <div className={styles.box_4_right}>
                    <span className={styles.box_txt_right}>Doanh thu</span>
                    <h4 className={styles.box_txt_sp_right}>0đ</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.box_1}>
              <div className={styles.box_2}>
                <div className={styles.box_3}>
                  <a className={styles.box_txt}>
                    <span className={styles.box_txt_sp}></span>
                  </a>
                  <a className={styles.box_txt}>
                    <span className={styles.box_txt_sp}></span>
                  </a>
                  <a className={styles.box_txt}>
                    <span className={styles.box_txt_sp}></span>
                  </a>
                </div>
                <div className={styles.box_3_right}>
                  <div className={styles.box_4_right}>
                    <span className={styles.box_txt_right}>Tổng cuộc gọi</span>
                    <h4 className={styles.box_txt_sp_right}>0</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* col -3 */}
        <div className={styles.statistic__element}>
          <div className={styles.box}>
            <div className={styles.box_1}>
              <div className={styles.box_2}>
                <div className={styles.box_3}>
                  <a className={styles.box_txt}>
                    <span className={styles.box_txt_sp}>không tăng</span> so với
                    cùng kì
                  </a>
                  <a className={styles.box_txt}>
                    <span className={styles.box_txt_sp}></span>
                  </a>
                  <a className={styles.box_txt}>
                    <span className={styles.box_txt_sp}></span>
                  </a>
                </div>
                <div className={styles.box_3_right}>
                  <div className={styles.box_4_right}>
                    <span className={styles.box_txt_right}>
                      Bình quân hóa đơn
                    </span>
                    <h4 className={styles.box_txt_sp_right}>0đ</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.box_1}>
              <div className={styles.box_2}>
                <div className={styles.box_3}>
                  <a className={styles.box_txt}>
                    <span className={styles.box_txt_sp}></span>
                  </a>
                  <a className={styles.box_txt}>
                    <span className={styles.box_txt_sp}></span>
                  </a>
                  <a className={styles.box_txt}>
                    <span className={styles.box_txt_sp}></span>
                  </a>
                </div>
                <div className={styles.box_3_right}>
                  <div className={styles.box_4_right}>
                    <span className={styles.box_txt_right}>
                      Cuộc gọi đã nhận/Tổng cuộc gọi
                    </span>
                    <h4 className={styles.box_txt_sp_right}>0</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatisticCall;
