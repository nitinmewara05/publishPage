import React from 'react';
import { useState, useEffect } from 'react';
import { Carousel, Card } from 'antd';
const { Meta } = Card;
const contentStyle = {
  height: '300px',
  color: '#fff',
  lineHeight: '300px',
  textAlign: 'center',
  background: '#364d79',
};

const App = () => {
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
    <Carousel autoplay>
      {product.map((item) => (
        <div key={item.id} style={contentStyle}> 
          <Card
            hoverable
            style={{
              width: 1600,
              height: 400,
            }}
            cover={<img alt="example" src={item.img} />}
          >
            <Meta title={item.name} description={item.price} />
          </Card>
        </div>
      ))}
    </Carousel>
  );
};

export default App;