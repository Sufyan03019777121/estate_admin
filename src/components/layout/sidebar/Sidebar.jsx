import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  TeamOutlined,
  HomeOutlined,
  EnvironmentOutlined,
  BarChartOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import "./sidebar.css";

const { Sider } = Layout;

function Sidebar({ setPage }) {
  const menuItems = [
    { key: "dashboard", icon: <DashboardOutlined />, label: "Dashboard" },
    { key: "users", icon: <UserOutlined />, label: "Users" },
    { key: "agents", icon: <TeamOutlined />, label: "Agents" },
    { key: "listings", icon: <HomeOutlined />, label: "Listings" },
    { key: "zones", icon: <EnvironmentOutlined />, label: "Zones / Cities" },
    { key: "reports", icon: <BarChartOutlined />, label: "Reports" },
    { key: "payments", icon: <DollarOutlined />, label: "Payments" },
  ];

  return (
    <Sider
      className="custom-sider"
      theme="light"
      collapsible={false}
      trigger={null} 
    >
      <div className="sider-logo">
        Isttaa<span>World</span>
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        items={menuItems.map((item) => ({
          ...item,
          onClick: () => setPage(item.key),
        }))}
        className="sider-menu"
      />
    </Sider>
  );
}

export default Sidebar;
