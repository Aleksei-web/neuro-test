import {Questionnaire} from "../components/test-builder/Questionnaire";
import {Menu, MenuProps} from "antd";
import {useState} from "react";
import {ContactsOutlined, IdcardOutlined, RollbackOutlined, UsergroupAddOutlined} from "@ant-design/icons";
import {TestBuilder} from "../components/test-builder/TestBuilder";

const items: MenuProps['items'] = [
  {
    label: 'Новая анкета',
    key: 'new',
    icon: <RollbackOutlined/>,
  },
  {
    label: 'Анкеты',
    key: 'list',
    icon: <IdcardOutlined/>,
  },
  {
    label: 'батарея',
    key: 'barrary',
    icon: <UsergroupAddOutlined/>,
  },
  {
    label: 'все тесты',
    key: 'all-test',
    icon: <ContactsOutlined/>,
  },
];

export const BuilderTestPage = () => {
  const [current, setCurrent] = useState('new');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const renderCard = () => {
    switch (current) {
      case 'new':
        return <Questionnaire/>
      case 'list':
        return <h2>Список анкет</h2>
      case 'barrary':
        return <TestBuilder/>
      case 'all-test':
        return <h2>Список тестов</h2>
      default:
        return ''
    }
  }

  return <div>
    <Menu onClick={onClick} theme="dark" selectedKeys={[current]} mode="horizontal" items={items}/>
    {renderCard()}
  </div>
}

