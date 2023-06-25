import {Card} from "antd";
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import {Client} from "./client";

interface IClientCard {
  user: Client
}

export const ClientCard = ({user}: IClientCard) => {
  return <>
    <Card
      style={{width: 500, marginTop: 16, marginLeft: 24}}
      actions={[
        <SettingOutlined key="setting"/>,
        <EditOutlined key="edit"/>,
        <EllipsisOutlined key="ellipsis"/>,
      ]}
      title={user.name}
    >
      <Card.Meta
        description="Описание компании..."
      />
      <p style={{marginTop: '16px'}}>Контактное лицо: Жиглов Г.Н</p>
      <p>Контактный телефон: +791234567</p>
      <p>ИНН: 953-344</p>
    </Card>
  </>
}