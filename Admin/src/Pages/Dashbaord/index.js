import React, { useEffect, useState } from "react";
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Typography } from "antd";
import { Pie } from "react-chartjs-2";
import {
  getCustomers,
  getProducts,
  getOrders,
  getRevenue,
} from "../../API";
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

function Dashboard() {
  const [orders, setOrders] = useState(0);
  const [products, setProducts] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.total);
    });
  }, []);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.total);
    });
  }, []);

  useEffect(() => {
    getCustomers().then((res) => {
      setCustomers(res.total);
    });
  }, []);

  useEffect(() => {
    getRevenue().then((res) => {
      setRevenue(res.discountedTotal);
    });
  }, []);
   // Placeholder data for the other three charts
   const Products = {
    carts: [
      { userId: 1, discountedTotal: 30 },
      { userId: 2, discountedTotal: 40 },
      { userId: 3, discountedTotal: 30 },
    ],
  };

  const Orders = {
    carts: [
      { userId: 1, discountedTotal: 20 },
      { userId: 2, discountedTotal: 50 },
      { userId: 3, discountedTotal: 30 },
    ],
  };

  const Customers = {
    carts: [
      { userId: 1, discountedTotal: 60 },
      { userId: 2, discountedTotal: 40 },
    ],
  };

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Orders"}
          value={orders}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Customers"}
          value={customers}
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Products"}
          value={products}
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Revenue"}
          value={revenue}
        />
      </Space>
      <Space>
        <DashboardChart title="Order Revenue" fetchData={getRevenue} />
        <DashboardChart title="Products" fetchData={() => Promise.resolve(Products)} />
        <DashboardChart title="Customers" fetchData={() => Promise.resolve(Customers)} />
        <DashboardChart title="Orders" fetchData={() => Promise.resolve(Orders)} />
      </Space>
    </Space>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

function DashboardChart({ title, fetchData }) {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    fetchData().then((res) => {
      const labels = res.carts.map((cart) => `User-${cart.userId}`);
      const data = res.carts.map((cart) => cart.discountedTotal);

      const dataSource = {
        labels,
        datasets: [
          {
            label: title,
            data,
            backgroundColor: ["rgba(255, 100, 100, 1)", "rgba(100, 255, 100, 1)", "rgba(100, 100, 255, 1)","rgba(0, 255, 255, 1)","rgba(128, 0, 128, 1)","rgba(255, 255, 0, 1)","rgba(255, 165, 0, 1)","rgba(255, 192, 203, 1)","rgba(165, 42, 42, 1)","rgba(255, 215, 0, 1)","rgba(255, 192, 192, 1)","rgba(144, 238, 144, 1)","rgba(173, 216, 230, 1)","rgba(255, 255, 153, 1)","rgba(216, 191, 216, 1)","rgba(224, 255, 255, 1)","rgba(255, 224, 189, 1)","rgba(255, 182, 193, 1)","rgba(210, 180, 140, 1)","rgba(255, 236, 139, 1)"],
          },
        ],
      };

      setChartData(dataSource);
    });
  }, [fetchData]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  return (
    <Card style={{ width: 310, height: 375 }}>
      <Pie options={options} data={chartData} />
    </Card>
  );
}

export default Dashboard;
