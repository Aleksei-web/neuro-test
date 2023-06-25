import React, {useState} from 'react';
import {Button, Form, Input} from 'antd';
import {PlusOutlined} from '@ant-design/icons'

interface Field {
  question: string;
  answer?: string[]
}

export const Questionnaire: React.FC = () => {
  const [fields, setFields] = useState<Field[]>([{question: ''}])

  const onFinish = (values: { [key: string]: string }) => {
  };

  function addAnswer(idx: number) {
    setFields(prev => prev.map((e, i) =>
      i === idx ? {...e, answer: e.answer ? [...e.answer, ''] : ['']} : {...e}))
  }

  const addQuestion = () => {
    setFields(fields => [...fields, {question: ''}])
  }

  function saveForm() {
    console.log('fields', fields)
  }

  const changeQuestion = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    setFields(prev => {
      return prev.map((el, i) => {
        if (i === idx) {
          return {...el, question: e.target.value}
        } else {
          return {...el}
        }
      })
    })
  };

  const changeAnswer = (e: React.ChangeEvent<HTMLInputElement>, idxQ: number, idxAnswer: number) => {
    setFields(prev => {
      return prev.map((el, i) => {
        if (i === idxQ) {
          if (!el.answer) {
            return {...el, answer: [e.target.value]}
          } else {
            return {
              ...el,
              answer: [...el.answer.map((ans, ia) => ia === idxAnswer ? e.target.value : ans)]
            }
          }
        } else {
          return {...el}
        }
      })
    })
  };

  return (
    <>
      <h3 style={{margin: '24px 16px'}}>Новая анкета</h3>
      <Form
        name="dynamic_form_item"
        onFinish={onFinish}
        style={{maxWidth: 600, margin: '16px 24px',}}
      >
        <Form.Item label={'Название анкеты'}>
          <Input/>
        </Form.Item>

        {fields.map((el, idx) => <div
          key={idx + 'div'}
          style={{
            maxWidth: 600,
            // border: '1px solid black',
            padding: '16px',
            borderRadius: '8px'
          }}>
          <Form.Item
            key={idx}
            label={`Вопрос ${idx + 1}`}
            name={`${idx}`}
          >
            <Input key={idx + 'input'} value={el.question} onChange={(e) => changeQuestion(e, idx)}/>
          </Form.Item>
          {el.answer && el.answer.map((answer, index) => (
            <Form.Item name={`${idx}-${index}`} key={index + 'answer'} label={`Ответ ${index + 1}`}>
              <Input onChange={(e) => changeAnswer(e, idx, index)}/>
            </Form.Item>
          ))}
          <Button
            key={idx + 'btn'}
            type="dashed"
            onClick={() => addAnswer(idx)}
            style={{width: '60%'}}
            icon={<PlusOutlined/>}
          >
            Добавить ответ
          </Button>
        </div>)}
        <Form.Item>
          <Button
            type="dashed"
            onClick={() => addQuestion()}
            style={{width: '60%'}}
            icon={<PlusOutlined/>}
          >
            Добавить вопрос
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" onClick={saveForm}>
            сохранить
          </Button>
        </Form.Item>
      </Form>
    </>);
};