import { NavLink } from "react-router-dom"
import { useAuthContext } from '../hooks/useAuthContext'

// components

// styles & images
import "./Sidebar.css"
import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'

export default function Sidebar() {
  const { user } = useAuthContext()

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/">
                <img src={DashboardIcon} alt="dashboard icon" />
                <span>RPG</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="add project icon" />
                <span>Create RPG</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}