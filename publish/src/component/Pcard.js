import React, { useState, useEffect } from "react";
import { Card } from "antd";
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
  }, []); // Empty dependency array to call fetchData only once when the component mounts

  return (
    <div>
      {product.map((item) => (
        <Card
          key={item.id}
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src={item.img} />}
        >
          <Meta title={item.name} description={item.price} />
        </Card>
      ))}
    </div>
  );
};

export default Test;
