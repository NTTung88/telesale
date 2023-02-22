// Styles
import styles from './RightStaff.module.css'
// Layouts
import { Header } from '../../../layouts/Header'
// Components
import {StaffManager} from '../PageStaff/StaffManager'
import {Calendar} from '../PageStaff/Calendar'
import {CallReport} from '../PageStaff/CallReport'
import {Campaign} from '../PageStaff/Campaign'
import {NewsBoard} from '../PageStaff/NewsBoard'
import {OrderReport} from '../PageStaff/OrderReport'
import {CampaignReport} from '../PageStaff/CampaignReport'

export function RightStaff({
  setUserID,
  deviceclv,
  setOpenFormCall,
  active,
  setOpenModal
}) {
 
  let content = <StaffManager
                setUserID={setUserID}
                deviceclv={deviceclv}
                setOpenModal={setOpenModal}
                />
    // Set componet right 
    if(active == 'staffmanager') {
      content = <StaffManager setUserID={setUserID} deviceclv={deviceclv}
                setOpenFormCall={setOpenFormCall}
                setOpenModal={setOpenModal} />
    } else if(active == 'calendar') {
      content = <Calendar/>
    } else if(active == 'campaign') {
      content = <Campaign/>
    } else if(active == 'newsboard') {
      content = <NewsBoard/>
    } else if(active == 'callreport') {
      content = <CallReport/>
    } else if(active == 'orderreport') {
      content = <OrderReport/>
    }else if(active == 'campaignreport') {
      content = <CampaignReport/>
    } else {
      content = <StaffManager setUserID={setUserID} deviceclv={deviceclv}
       setOpenFormCall={setOpenFormCall}
        setOpenModal={setOpenModal}/>
    }

    return (
      <div className={styles.right}>
        <Header/>
        {content}
      </div>
    )
}