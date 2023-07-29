import React, { useState } from "react";
import { AudioOutlined, ShoppingCartOutlined, LoginOutlined,CustomerServiceOutlined, GiftOutlined} from "@ant-design/icons";
import { Breadcrumb, Layout, theme, Input, Button, Space } from "antd";
import Dropmenu from "./dropdown";
import { useNavigate } from 'react-router-dom';
import Productlist from "./Productlist"
import Carousel from "./Carousel";
const Nav = () => {
const { Header, Content, Footer } = Layout;
const Navigate = useNavigate ();
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#364d79",
    }}
  />
);
const handleLogin =()=>{
  Navigate("/Login")
} 

const { Search } = Input;

  const onSearch = (value) => console.log(value);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [size, setSize] = useState("medium");
  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Search 
          placeholder="input search text"
          enterButton="Search"
          size="medium"
          suffix={suffix}
          onSearch={onSearch}
          style={{
            width: 400,
            marginLeft:200,
            
          }}
        />

        <Space wrap>

        <Space
            style={{
              padding: 8,
              marginLeft: 40,
            }}
          >
             <Button type="primary" size={size}>
            Became a seller
          </Button>
            </Space>

         
          <br /> 
          <Space
            style={{
              padding: 8,
              marginLeft: 40,
            }}
          >
             
            <Button type="primary" size={size} onClick={handleLogin}>
            <LoginOutlined />
              Login
            </Button>
          </Space>
          <br />
          <Space
            style={{
              padding: 8,
              marginLeft: 15,
            }}
          >
             <Dropmenu />
            </Space>


         
          <br />
          <Space
            style={{
              padding: 8,
              marginLeft: 9,
            }}
          >
             <Button type="primary" size={size}>
             <ShoppingCartOutlined />
            Cart
          </Button>
            </Space>
        </Space>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          Content
        </div>
      </Content>

<Carousel/>
   
      <Productlist/>
      
      <Footer
        style={{
          textAlign: "center",
        }}
      >
         <Space
            style={{
              padding: 8,
              marginLeft: 40,
            }}
          >
             <Button type="primary" size={size}>
            Became a seller
          </Button>
            </Space>
            <Space
            style={{
              padding: 8,
              marginLeft: 40,
            }}
          >
             <Button type="primary" size={size}>
             <GiftOutlined />
            Gift Pcards
          </Button>
          
            </Space>
            <Space
            style={{
              padding: 8,
              marginLeft: 40,
            }}
          >
             <Button type="primary" size={size}>
            Advertise
          </Button>
          
            </Space>
            <Space
            style={{
              padding: 8,
              marginLeft: 40,
            }}
          >
             <Button type="primary" size={size}>
             <CustomerServiceOutlined />
            Help Center
          </Button>
          
            </Space>
      </Footer>
    </Layout>
  );
};
export default Nav;
