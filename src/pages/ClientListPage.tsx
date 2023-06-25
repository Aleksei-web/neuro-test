import React, {useState} from 'react';
import {List} from 'antd';
import VirtualList from 'rc-virtual-list';
import {clientList} from "../screen/client/clientList";
import {Link} from "react-router-dom";
import {GlobalOutlined, MobileOutlined} from '@ant-design/icons'

interface UserItem {
  id: number
  email: string;
  name: string
  phone: string
  address: string
}

export const ClientListPage = () => {
  const [data, setData] = useState<UserItem[]>([]);

  return (
    <>
      <h2 style={{marginTop: '20px'}}>Список Клиентов</h2>
      <List style={{margin: '24px 16px 0'}} bordered={true}>
        <VirtualList
          data={clientList}
          itemHeight={47}
          itemKey="email"
        >
          {(item: UserItem) => (
            <List.Item key={item.email}>
              <List.Item.Meta
                title={<Link to={`/${item.id}`}>{item.name}</Link>}
                description={item.email}
              />
              <div><GlobalOutlined/> {item.address}</div>
              <div><MobileOutlined/> {item.phone}</div>
            </List.Item>
          )}
        </VirtualList>
      </List>
    </>

  );
}
