import { useEffect } from 'react'
import SideBar from '../../components/SideBar/SideBar'
import { useUser } from '../../hooks/useUser'
import { useNavigate, useLocation } from 'react-router'
import './Dashboard.css'

function Dashboard ({ children }) {
  const { user } = useUser()
  const navigate = useNavigate()
  const { state } = useLocation()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [user])
  return (
    <main className='dashboardContainer'>
      <SideBar />
      <div className='contentDashboard'>
        <div className='dashboardBar'>
          <span>Panel Administrativo</span>
        </div>
        {children}
      </div>
    </main>
  )
}

export default Dashboard
