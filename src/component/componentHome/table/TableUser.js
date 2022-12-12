import React from "react";
import "./Table.css";
import { Table } from "antd";
import ButtonTable from "../../../common/button/ButtonTable";
import { Link } from "react-router-dom";

function TableUser({ data, loadingData }) {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
      action: "xoa",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
      action: "xoa",
    },
  ];

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: "5%",
      key: "id",
    },
    {
      title: "FirstName",
      dataIndex: "firstName",
      width: "10%",
      key: "firstName",
    },
    {
      title: "LastName",
      dataIndex: "lastName",
      width: "10%",
      key: "lastName",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "Phone",
      width: "15%",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: "20%",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      width: "15%",
      filters: [
        {
          text: "male",
          value: "male",
        },
        {
          text: "female",
          value: "female",
        },
        {
          text: "other",
          value: "other",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.gender?.startsWith(value),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "20%",
    },
    {
      title: "action",
      dataIndex: "action",
      key: "action",
      width: "5%",
      render: (_, data) => (
        <Link
          to={{
            pathname: `users/${data.id}`,
          }}
        >
          <ButtonTable />
        </Link>
      ),
    },
  ];
  return <Table dataSource={data} columns={columns} loading={loadingData} />;
}

export default TableUser;
