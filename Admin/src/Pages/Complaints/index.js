import { Button, Form, Input, Select, Space, Typography, Checkbox, Radio, DatePicker } from "antd";
import { useEffect, useState } from "react";
import { getComplaints } from "../../API";

const { Option } = Select;

function ComplaintForm() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // Handle form submission here
    console.log("Received values:", values);
    // You can add API calls or other logic to handle the form data
    // Reset the form after submission
    form.resetFields();
  };

  return (
    <Space size={20} direction="vertical" style={{ backgroundColor: '#fff', padding: '20px' }}>
      {/* Add Customer Name Input */}
      <Form.Item
        name="customerName"
        label="Customer Name"
        rules={[{ required: true, message: "Please enter customer name" }]}
      >
        <Input />
      </Form.Item>

      {/* Add Product Bought Select */}
      <Form.Item
        name="productName"
        label="Product Bought"
        rules={[{ required: true, message: "Please enter the product name" }]}
      >
        <Select placeholder="Select a product">
          {/* Replace options with your actual product data */}
          <Option value="product1">Phone</Option>
          <Option value="product2">Ipad</Option>
          <Option value="product3">Laptop</Option>
          <Option value="product4">Airpods</Option>
          {/* Add more options as needed */}
        </Select>
      </Form.Item>

      {/* Add Complaint or Query Text Area */}
      <Form.Item
        name="complaintQuery"
        label="Complaint or Query"
        rules={[{ required: true, message: "Please enter your complaint or query" }]}
      >
        <Input.TextArea />
      </Form.Item>

      {/* Add Date and Day Picker */}
      <Form.Item
        name="dateAndDay"
        label="Date and Day"
      >
        <DatePicker />
      </Form.Item>

      {/* Add Dropdown Select */}
      <Form.Item
        name="product quality"
        label="Product Quality"
      >
        <Select placeholder="Select an option">
          <Option value="option1">Good</Option>
          <Option value="option2">Bad</Option>
          <Option value="option3">Average</Option>
          {/* Add more options as needed */}
        </Select>
      </Form.Item>

      {/* Add Checkboxes */}
      <Form.Item
        name="checkboxes"
        label="Checkboxes"
      >
        <Checkbox.Group>
          <Checkbox value="checkbox1">Checkbox 1</Checkbox>
          <Checkbox value="checkbox2">Checkbox 2</Checkbox>
          <Checkbox value="checkbox3">Checkbox 3</Checkbox>
        </Checkbox.Group>
      </Form.Item>

      {/* Add Radio Buttons */}
      <Form.Item
        name="reason"
        label="Reason"
      >
        <Radio.Group>
          <Radio value="radio1">The product is not good</Radio>
          <Radio value="radio2">Want to exchange the product</Radio>
          <Radio value="radio3">Others</Radio>
        </Radio.Group>
      </Form.Item>

      {/* Add Text Box 1 */}
      <Form.Item
        name="remarks"
        label="Remarks"
      >
        <Input />
      </Form.Item>

      {/* Add Text Box 2 */}
      <Form.Item
        name="textBox2"
        label="Text Box 2"
      >
        <Input />
      </Form.Item>

      {/* Add Submit Button */}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Space>
  );
}

function Complaints() {
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Customer Complaint/Query Form</Typography.Title>
      <ComplaintForm />
    </Space>
  );
}

export default Complaints;
