import {Employee} from "../../screen/client/employee";
import React from 'react';
import {Button, Space, Table, Tag} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import {employeeList} from "../../screen/client/employeeList";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<Employee> = [
  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Возраст',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Login',
    dataIndex: 'login',
    key: 'login',
  },
  {
    title: 'Password',
    dataIndex: 'password',
    key: 'password',
  },
  {
    title: 'теги',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, {tags}) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'admin') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Действия',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button type="primary" size="small">
          удалить
        </Button>
        <Button type="primary" size="small">
          редактировать
        </Button>
        <Button type="primary" size="small">
          история
        </Button>
      </Space>
    ),
  },
];

const data: Employee[] = employeeList

interface IEmployeeList {
  employee: Employee[]
}

export const EmployeeList = () => {

  return <>
    <Table columns={columns} dataSource={data}/>
  </>
}