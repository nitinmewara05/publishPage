import React, { useState, useEffect } from "react";
import { Card, Col, Divider, Row, Button } from "antd";
import {ShoppingCartOutlined} from "@ant-design/icons";

const { Meta } = Card;

const Test = () => {
  const [product, setProduct] = useState([]);
 

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4500/publicproducts");
      if (!response.ok) {
        throw new Error("Network not responding");
      }
      const jsonData = await response.json();
      setProduct(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  const style = {
    padding: "8px 0",
    margin: "10px",
  };


  return (
    <div className="Products">
      {product.map((item) => (
        <Row gutter={[16, 24]}>
          <Col className="gutter-row" span={6}>
            <div style={style}>
              <Card
                key={item.id}
                hoverable
                style={{
                  width: 225,
                  height:300,
                }}
                cover={<img alt="example" src={item.img} />}
              >
                <Meta title={item.name} description={item.price} />
              <br />
                <Button>Buy Now</Button>  
             
                <Button > <ShoppingCartOutlined /></Button>
              </Card>
            </div>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Test;
