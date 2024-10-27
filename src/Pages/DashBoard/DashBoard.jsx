import QuickAccess from "./QuickAccess/QuickAccess"
import RecentUpdateFeed from "./RecentUpdateFeed/RecentUpdateFeed"


const DashBoard = () => {
  return (
    <div className=''>
     <QuickAccess></QuickAccess>
     <RecentUpdateFeed></RecentUpdateFeed>
    </div>
  )
}

export default DashBoard