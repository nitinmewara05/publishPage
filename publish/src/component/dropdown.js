import React from 'react';
import { DownOutlined, DownloadOutlined, CustomerServiceOutlined,NotificationOutlined } from '@ant-design/icons';
import { Dropdown, Space, Divider, Button, theme } from 'antd';
const { useToken } = theme;
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        <NotificationOutlined />
       Notification prefrence
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        <CustomerServiceOutlined />
       
        24x7 customer support
      </a>
    ),
   
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
       Advertise
      </a>
    ),

  },
  {
    key: '4',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        <DownloadOutlined />
       Download App
      
      </a>
    ),

  },
];
const App = () => {
  const { token } = useToken();
  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };
  const menuStyle = {
    boxShadow: 'none',
  };
  return (
    <Dropdown
      menu={{
        items,
      }}
      dropdownRender={(menu) => (
        <div style={contentStyle}>
          {React.cloneElement(menu, {
            style: menuStyle,
          })}
          <Divider
            style={{
              margin: 0,
            }}
          />

        </div>
      )}
    >
      <Button onClick={(e) => e.preventDefault()}>
        <Space>
          More
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
};
export default App;