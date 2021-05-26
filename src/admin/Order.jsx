import React, { useCallback, useState, useEffect } from "react";
import { Table, Select, Form, ConfigProvider } from "antd";
import queryString from "query-string";
import "antd/dist/antd.css";
import reqwest from "reqwest";
const { Option } = Select;

const Order = () => {
  // const columns = [
  //   {
  //     title: "Email",
  //     dataIndex: "email",
  //   },
  //   {
  //     title: "Name",
  //     dataIndex: "name",
  //     sorter: (a, b) => (a.name.first > b.name.first ? 1 : -1),
  //     render: (name) => `${name.first} ${name.last}`,
  //     width: "20%",
  //   },
  //   {
  //     title: "Gender",
  //     dataIndex: "gender",
  //     filters: [
  //       { text: "Male", value: "male" },
  //       { text: "Female", value: "female" },
  //     ],
  //     width: "20%",
  //   },
  //   {
  //     title: "Age",
  //     dataIndex: "dob",
  //     render: (age) => age.date,
  //     sorter: (a, b) => (a.dob.age > b.dob.age ? 1 : -1),
  //     width: "20%",
  //   },
  // ];
  // const customFetch = async (params = {}) => {
  //   console.log(params)
  //   setIsLoading(true);
  //   const response = await reqwest({
  //     url: "https://randomuser.me/api",
  //     method: "get",
  //     data: {
  //       results: 30,
  //     },
  //     type: "json",
  //   });
  //   // console.log("🚀 ~ file: Order.jsx ~ line 65 ~ customFetch ~ response.results", response.results)
  //   setUserList(response.results);
  //   setPagination({...pagination, total: response.results.length})
  //   setIsLoading(false);
  // };
  const [isLoading, setIsLoading] = useState(false);
  const [userList, setUserList] = useState([]);
  const [_pagination, setPagination] = useState({
    pageSize: 10,
    defaultCurrent: 1,
    total: 0,
    showQuickJumper: true,
  });

  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
  });
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      width: "20%",
    },
    {
      title: "Create Date",
      dataIndex: "createAt",
      width: "20%",
    },
    {
      title: "Description",
      dataIndex: "description",
      width: "20%",
    },
    {
      title: "Author",
      dataIndex: "author",
      width: "20%",
    },
  ];
  const customFetch = async (params = {}) => {
    console.log(
      "🚀 ~ file: Order.jsx ~ line 90 ~ customFetch ~ params",
      params
    );
    console.log(params.results);
    console.log(params.page);
    if (params) {
      await setFilter({
        ...filter,
        _limit: params.results,
        _page: params.page,
      });
    }
    console.log(filter);
    setIsLoading(true);
    try {
      const paramString = queryString.stringify(filter); // convert object filter thành string
      const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
      const response = await fetch(requestUrl); //Call API
      const respondseJSON = await response.json(); // Trả Api về dạng object
      const { data, pagination } = respondseJSON; // Khai báo giá trị để hứng API
      setUserList(data);
      setPagination({
        ..._pagination,
        total: pagination._totalRows,
      });
      // setPagination(pagination); // Cập nhật số trang trên Pagination component
    } catch (error) {
      console.log("Fail ", error.massage);
    }
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
  const handleChange = useCallback(
    (value) => {
      console.log(`selected ${value}`);
    },
    [isLoading]
  );
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
          pagination={_pagination}
          rowKey="title"
        />
      </ConfigProvider>
    </div>
  );
};

export default Order;
