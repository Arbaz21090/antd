/** @format */

import React, { useState, useEffect } from "react";
import { Table, Rate, Avatar } from "antd";
const Effect1 = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setDataSource(data.products);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: 1,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: 2,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: 3,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: 4,
      render:(rating)=>{
        return<Rate value={rating} allowHalf disabled/>
      }
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: 5,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: 6,
    },
    {
        key: 7,
      title: "Image",
      dataIndex: "thumbnail",
      render:(link)=>{
        return <Avatar src={link}/>
      }
      
    },
  ];
  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        loading={loading}
      ></Table>
    </div>
  );
};

export default Effect1;
