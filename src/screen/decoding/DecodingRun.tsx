import { DecodingLetterList } from '../../components/decoding/DecodingLetterList'
import styled from './decoding.module.css'
import { Object } from '../../components/decoding/Object'
import { useState } from 'react'
import error from './error.mp3'
import success from './success.mp3'

const items = [
  {
    iconName: 'alarm_smart_wake',
    letters: ['а', 'б', 'н', 'т'],
    answer: 'б'
  },
  {
    iconName: 'phone_iphone',
    letters: ['а', 'к', 'н', 'т'],
    answer: 'т'
  },
  {
    iconName: 'print',
    letters: ['а', 'б', 'п', 'т'],
    answer: 'п'
  },
  {
    iconName: 'star',
    letters: ['з', 'б', 'н', 'т'],
    answer: 'з'
  },
  {
    iconName: 'sunny',
    letters: ['а', 'б', 'с', 'т'],
    answer: 'с'
  },
  {
    iconName: 'beach_access',
    letters: ['а', 'б', 'з', 'т'],
    answer: 'з'
  },
  {
    iconName: 'cruelty_free',
    letters: ['з', 'б', 'н', 'т'],
    answer: 'з'
  }
]

export const DecodingRun = () => {
  const [showObject, setShowObject] = useState(true)
  const [currentItemIdx, setCurrentItemIdx] = useState(0)
  const [object, setObject] = useState(items[0].iconName)
  const [letters, setLetters] = useState(items[0].letters)
  const [answer, setAnswer] = useState(items[0].answer)
  const [errorAnswer, setErrorAnswer] = useState('')
  const [errorSuccessAnswer, setSuccessAnswer] = useState('')

  const playError = () => {
    new Audio(error).play()
  }

  const playSuccess = () => {
    new Audio(success).play()
  }

  const handlerObject = () => {
    setShowObject(false)
  }

  const clickLetter = (letter: string) => {
    checkAnswer(letter)
    console.log(letter)
    setTimeout(nextAnswer, 2000)
  }

  const checkAnswer = (letter: string) => {
    if (letter === answer) {
      playSuccess()
      setSuccessAnswer(letter)
    } else {
      playError()
      setErrorAnswer(letter)
    }
  }

  const nextAnswer = () => {
    if (currentItemIdx < items.length - 1) {
      setSuccessAnswer('')
      setErrorAnswer('')
      setCurrentItemIdx(prev => prev + 1)
      setObject(items[currentItemIdx + 1].iconName)
      setLetters(items[currentItemIdx + 1].letters)
      setAnswer(items[currentItemIdx + 1].answer)
      setShowObject(true)
    }
  }

  return <div className={styled.container}>
    {
      showObject
        ? <Object iconName={object} handlerObject={handlerObject}/>
        : <DecodingLetterList
          errorAnswer={errorAnswer}
          errorSuccessAnswer={errorSuccessAnswer}
          clickLetter={clickLetter}
          letters={letters}
        />
    }
  </div>
}
