import styles from './LeftStaff.module.css'
import { AiFillAppstore } from 'react-icons/ai'

export function LeftStaff({active, setActive}) {
    return (
      <div className={`${styles.left}`}>
        <h4>Vai trò: Nhân viên</h4>
        <div className={styles.border}></div>
        <div className={styles.links}>
          <div style={{cursor: 'pointer'}}
           onClick={() => setActive('staffmanager')}
            className={`${styles.link} ${active == 'staffmanager' && `${styles.active}`}`}>
            <AiFillAppstore
              style={{
                color: 'white',
                fontSize: '18px',
                marginRight: '10px'
              }} />
            <span>Quản lý khách hàng</span>
          </div>

          <div style={{cursor: 'pointer'}}
           onClick={() => setActive('calendar')}
           className={`${styles.link} ${active == 'calendar' && `${styles.active}`}`}>
            <AiFillAppstore
              style={{
                color: 'white',
                fontSize: '18px',
                marginRight: '10px'
              }} />
            <span>Lịch</span>
          </div>

          <div style={{cursor: 'pointer'}}
           onClick={() => setActive('campaign')}
           className={`${styles.link} ${active == 'campaign' && `${styles.active}`}`}>
            <AiFillAppstore
              style={{
                color: 'white',
                fontSize: '18px',
                marginRight: '10px'
              }} />
            <span>Chiến dịch</span>
          </div>
        </div>

        <div className={styles.border}></div>
        <div className={styles.links}>

          <div style={{cursor: 'pointer'}}
           onClick={() => setActive('newsboard')}
           className={`${styles.link} ${active == 'newsboard' && `${styles.active}`}`}>
            <AiFillAppstore
              style={{
                color: 'white',
                fontSize: '18px',
                marginRight: '10px'
              }} />
            <span>Bảng thông tin</span>
          </div>

          <div style={{cursor: 'pointer'}}
           onClick={() => setActive('callreport')}
           className={`${styles.link} ${active == 'callreport' && `${styles.active}`}`}>
            <AiFillAppstore
              style={{
                color: 'white',
                fontSize: '18px',
                marginRight: '10px'
              }} />
            <span> Báo cáo cuộc gọi</span>
          </div>

          <div style={{cursor: 'pointer'}} 
          onClick={() => setActive('orderreport')}
          className={`${styles.link} ${active == 'orderreport' && `${styles.active}`}`}>
            <AiFillAppstore
              style={{
                color: 'white',
                fontSize: '18px',
                marginRight: '10px'
              }} />
            <span> Báo cáo đơn hàng</span>
          </div>

          <div style={{cursor: 'pointer'}}
           onClick={() => setActive('campaignreport')}
           className={`${styles.link} ${active == 'campaignreport' && `${styles.active}`}`}>
            <AiFillAppstore
              style={{
                color: 'white',
                fontSize: '18px',
                marginRight: '10px'
              }} />
            <span>Báo cáo Chiến dịch</span>
          </div>
        </div>
      </div>
    )
}