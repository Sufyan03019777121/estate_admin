import React from "react";
import { Row, Col, Card, Statistic, Typography } from "antd";
import { UserOutlined, HomeOutlined, DollarOutlined } from "@ant-design/icons";
import "./dashboard.css"

const { Title } = Typography;

export default function Dashboard() {
  return (
    <>
      <Title className="dashboard_title" level={4}>
        Dashboard Overview
      </Title>
      <Row gutter={16}>
        <Col span={8}>
          <Card className="users-card" hoverable>
            <Statistic
              title="Total Users"
              value={1024}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card className="users-card" hoverable>
            <Statistic title="Active Listings" value={340} prefix={<HomeOutlined />} />
          </Card>
        </Col>
        <Col span={8}>
          <Card className="users-card" hoverable>
            <Statistic title="Revenue (PKR)" value={750000} prefix={<DollarOutlined />} />
          </Card>
        </Col>
      </Row>
    </>
  );
}
