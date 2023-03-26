import './Dashboard.css'
import SideBar from '../../components/SideBar/SideBar'

function Dashboard ({ children }) {
  return (
    <main className='dashboardContainer'>
      <SideBar />
      <div className='contentDashboard'>
        <div className='dashboardBar'>
          <span>Camilo</span>
        </div>
        {children}
      </div>
    </main>
  )
}

export default Dashboard
