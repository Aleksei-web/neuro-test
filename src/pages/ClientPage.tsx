import {Menu, MenuProps} from 'antd';
import {ContactsOutlined, IdcardOutlined, RollbackOutlined, UsergroupAddOutlined} from '@ant-design/icons';
import {useState} from "react";
import {Link, useParams} from "react-router-dom";
import {clientList} from "../screen/client/clientList";
import {ClientCard} from "../components/client/ClientCard";
import {EmployeeList} from "../components/client/EmployeeList";


const items: MenuProps['items'] = [
  {
    label: <Link style={{textDecoration: 'none'}} to={'/'}>Список</Link>,
    key: 'list',
    icon: <RollbackOutlined/>,
  },
  {
    label: 'Карточка',
    key: 'card',
    icon: <IdcardOutlined/>,
  },
  {
    label: 'Сотрудники',
    key: 'employee',
    icon: <UsergroupAddOutlined/>,
  },
  {
    label: 'Контракты',
    key: 'contract',
    icon: <ContactsOutlined/>,
  },
];

export const ClientPage = () => {
  const [current, setCurrent] = useState('card');

  let {id} = useParams();

  const currentUser = clientList.find(el => el.id === parseInt(id || '1'))

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const renderCard = () => {
    if (!currentUser) {
      return ''
    }
    switch (current) {
      case 'card':
        return <ClientCard user={currentUser}/>
      case 'employee':
        return <EmployeeList/>
      case 'contract':
        return <h2>Контракты</h2>
      default:
        return ''
    }
  }

  return <>
    <Menu onClick={onClick} theme="dark" selectedKeys={[current]} mode="horizontal" items={items}/>
    {
      renderCard()
    }

  </>
}