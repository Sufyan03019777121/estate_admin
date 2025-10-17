import React, { useState } from "react";
import { Table, Button, Tag, Typography, Space } from "antd";
import "./listing.css";

const { Title } = Typography;

export default function Listings() {
  const [listings, setListings] = useState([
    { key: 1, title: "3 Marla Plot", city: "Lahore", status: "Active" },
    { key: 2, title: "Shop", city: "Karachi", status: "Blocked" },
    { key: 1, title: "3 Marla Plot", city: "Lahore", status: "Active" },
    { key: 2, title: "Shop", city: "Karachi", status: "Blocked" },
  ]);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      render: (text) => <span className="listing-text">{text}</span>,
    },
    {
      title: "City",
      dataIndex: "city",
      render: (text) => <span className="listing-text">{text}</span>,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (s) => (
        <Tag
          color={s === "Active" ? "green" : "red"}
          className="listing-tag"
        >
          {s}
        </Tag>
      ),
    },
    {
      title: "Action",
      render: () => (
        <Space>
          <Button type="primary" size="small" className="listing-btn approve-btn">
            Approve
          </Button>
          <Button danger size="small" className="listing-btn delete-btn">
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Title level={3} className="listing-title">
        Manage Listings
      </Title>
      <div className="listing-container">
        <Table
          dataSource={listings}
          columns={columns}
          pagination={false}
          rowClassName={() => "hover-row"}
        />
      </div>
    </>
  );
}
