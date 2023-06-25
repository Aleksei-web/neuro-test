import {Button, Form, Input, Select} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import React, {useState} from "react";

const testList = [
  {name: 'скорость', type: 'Speed', idx: 0},
  {name: 'принятие решений', type: 'Solutions', idx: 1},
  {name: 'обработка информации', type: 'Numbers', idx: 2},
  {name: 'последовательный', type: 'ConsistentNumbers', idx: 3},
  {name: 'синхронизация', type: 'Synchronic', idx: 4},
  {name: 'эквивалентность', type: 'Equivalence', idx: 5},
  {name: 'координация', type: 'CoordinationBall', idx: 6},
  {name: 'концентарция', type: 'ConsistentBalls', idx: 7},
  {name: 'распознование', type: 'Recognize', idx: 8},
  {name: 'декодирование', type: 'Decoding', idx: 9},
  {name: 'идентефикация', type: 'Identity', idx: 10},
  {name: 'программирование', type: 'Programming', idx: 11},
  {name: 'оценка', type: 'Grade', idx: 12}
]

export const TestBuilder = () => {
  const [tests, setTests] = useState<number[]>([0])

  function addTest() {
    setTests(prev => [...prev, 0])
  }

  return <div style={{margin: '16px 24px'}}>
    <h3>Новая батарея тестов</h3>
    <Form>
      <Form.Item name={'name'} label={'Название'}>
        <Input/>
      </Form.Item>
      <Form.Item label={'Анкета'}>
        <Select>
          <Select.Option value={'1'}>Анкета 1</Select.Option>
          <Select.Option value={'1'}>Анкета 2</Select.Option>
          <Select.Option value={'1'}>Анкета 3</Select.Option>
          <Select.Option value={'1'}>Анкета 4</Select.Option>
        </Select>
      </Form.Item>
      {tests.map((testItem, idx) => (
        <Form.Item label={`тест ${idx + 1}`} key={idx}>
          <Select>
            {testList.map(el =>
              <Select.Option key={el.idx} value={el.type}>{el.name} </Select.Option>
            )}
          </Select>
        </Form.Item>
      ))}

      <Form.Item>
        <Button
          type="dashed"
          onClick={() => addTest()}
          style={{width: '60%'}}
          icon={<PlusOutlined/>}
        >
          Добавить тест
        </Button>
      </Form.Item>
    </Form>
  </div>
}