import { BellFilled, MailOutlined, SearchOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, Input, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { getComments, getOrders } from "../../API";

const { Search } = Input;

function AppHeader() {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    getOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);

  const handleSearch = (value) => {
    // Handle search action here
    console.log(`Searching for: ${value}`);
  };
  return (
    <div className="AppHeader">
      <Image
        width={50}
        src="https://us.123rf.com/450wm/ylivdesign/ylivdesign2110/ylivdesign211012498/176252095-three-persons-admin-icon-outline-three-persons-admin-vector-icon-color-flat-isolated.jpg?ver=6"
      ></Image>
      <Space>
        <Badge count={comments.length} dot>
          <MailOutlined
            style={{ fontSize: 24 }}
            onClick={() => {
              setCommentsOpen(true);
            }}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled
            style={{ fontSize: 24 }}
            onClick={() => {
              setNotificationsOpen(true);
            }}
          />
        </Badge>
        <SearchOutlined
          style={{ fontSize: 24, cursor: "pointer" }}
          onClick={() => {
            setSearchVisible(!searchVisible);
          }}
        />
        {searchVisible && (
          <Search
            placeholder="Enter search term"
            onSearch={handleSearch}
            enterButton
            style={{ width: 200 }}
          />
        )}
      </Space>
      <Drawer
        title="Comments"
        open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer>
      <Drawer
        title="Notifications"
        open={notificationsOpen}
        onClose={() => {
          setNotificationsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong>{item.title}</Typography.Text> has been
                ordered!
              </List.Item>
            );
          }}
        ></List>
      </Drawer>
    </div>
  );
}

export default AppHeader;
