import React, { useCallback, useState, useEffect } from "react";
import { Table, Select, Form, ConfigProvider } from "antd";
import "antd/dist/antd.css";
import reqwest from "reqwest";
const { Option } = Select;

const Order = () => {
  const columns = [
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => (a.name.first > b.name.first ? 1 : -1),
      render: (name) => `${name.first} ${name.last}`,
      width: "20%",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      filters: [
        { text: "Male", value: "male" },
        { text: "Female", value: "female" },
      ],
      width: "20%",
    },
    {
      title: "Age",
      dataIndex: "dob",
      render: (age) => age.date,
      sorter: (a, b) => (a.dob.age > b.dob.age ? 1 : -1),
      width: "20%",
    },
  ];
  const [isLoading, setIsLoading] = useState(false);
  const [userList, setUserList] = useState([]);
  const [pagination, setPagination] = useState({
    pageSize: 10,
    defaultCurrent: 1,
  });

  const customFetch = async (params = {}) => {
    setIsLoading(true);
    const response = await reqwest({
      url: "https://randomuser.me/api",
      method: "get",
      data: {
        results: 30,
      },
      type: "json",
    });
    console.log("🚀 ~ file: Order.jsx ~ line 65 ~ customFetch ~ response.results", response.results)
    setUserList(response.results);
    setIsLoading(false);
  };

  useEffect(() => {
    customFetch({});
  }, []);

  const handleTableChange = (pagination, filters, sorter) => {
    setPagination(pagination);
    customFetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  };
  // function handleChange(value) {
  //   console.log(`selected ${value}`);
  // }
  const handleChange = useCallback((value) => {
    console.log(`selected ${value}`);
  }, [isLoading]);
  return (
    <div>
      <ConfigProvider>
        <Form>
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={handleChange}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Form>
        <Table
          columns={columns}
          dataSource={userList}
          loading={isLoading}
          onChange={handleTableChange}
          pagination={pagination}
          rowKey="email"
        />
      </ConfigProvider>
    </div>
  );
};

export default Order;
