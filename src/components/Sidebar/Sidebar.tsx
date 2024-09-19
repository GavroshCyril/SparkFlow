import SidebarLogo from "../../assets/sparkFlow-icon.png";
import "./sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-title">
        <img src={SidebarLogo} alt="SPARK FLOW" />
        <h2>SPARK FLOW</h2>
      </div>
    </div>
  );
};
