import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
import {
  SidebarWrapper,
} from "../elements"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarWrapper>
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""} `}>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <Links styleClass={`${isOpen ? "sidebar-links" : ""}`} />
        <SocialLinks styleClass={`${isOpen ? "sidebar-icons" : ""}`} />
      </div>
    </aside>
    </SidebarWrapper>
  )
}

export default Sidebar
