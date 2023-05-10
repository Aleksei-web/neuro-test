import {useState} from "react";
import styles from "./numbers.module.css";
import {NumberSmall} from "../../components/numbers/NumberSmall";
import {NumberBig} from "../../components/numbers/NumberBig";

type Direction = 'row' | 'row-reverse'

const arrayNumbers = [
  [4, 2, 9, 1, 3, 1, 8, 5, 8, 0],
  [8, 0, 6, 7, 4, 5, 0, 1, 3, 9]
]

export const NumbersRun = () => {
  const [direction, setDirection] = useState<Direction>('row')
  const [contentSmall, setContentSmall] = useState(0)
  const [contentBig, setContentBig] = useState(1)
  const [errorAnswer, setErrorAnswer] = useState(false)
  const [rightAnswer, setRightErrorAnswer] = useState(false)

  const changeContent = () => {
    const idx = Math.floor(Math.random() * arrayNumbers[0].length)
    setContentSmall(arrayNumbers[0][idx])
    setContentBig(arrayNumbers[1][idx])
  }

  const randomDirection = () => {
    if (Math.random() <= 0.3) {
      return;
    }

    if (direction === 'row') {
      setDirection('row-reverse')
    } else {
      setDirection('row')
    }

  }

  const handleClick = (isCorrectAnswer: boolean) => {
    isCorrectAnswer ? setRightErrorAnswer(true) : setErrorAnswer(true)
    setTimeout(() => {
      setRightErrorAnswer(false)
      setErrorAnswer(false)
      randomDirection()
      changeContent()
    }, 500)
  }

  return <div className={styles.container} style={{flexDirection: direction}}>
    <NumberSmall showIcon={errorAnswer} content={contentSmall} handleClick={() => handleClick(false)}/>
    <NumberBig showIcon={rightAnswer} content={contentBig} handleClick={() => handleClick(true)}/>
  </div>
}