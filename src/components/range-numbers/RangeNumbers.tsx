import styles from './range-numbers.module.css'
import {useState} from "react";
import error from './error.mp3'
import success from './success.mp3'

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

interface IRangeNumbers {
  numbersArray: number[]
  endOfList: () => void
}

export const RangeNumbers = ({numbersArray, endOfList}: IRangeNumbers) => {
  const [currentNumber, setCurrentNumber] = useState(numbersArray[0])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [errorIdx, setErrorIdx] = useState<null | number>(null)
  const [successNumber, setSuccessNumber] = useState<null | number>(null)

  const playError = () => {
    new Audio(error).play()
  }

  const playSuccess = () => {
    new Audio(success).play()
  }

  const clickNumber = (number: number) => {
    setErrorIdx(null)
    if (currentNumber !== number) {
      playError()
      setErrorIdx(number)
      return
    }
    if (currentIdx === numbersArray.length - 1) {
      playSuccess()
      endOfList()
      return;
    } else {
      playSuccess()
      setSuccessNumber(number)
      setCurrentIdx(prev => prev + 1)
      setCurrentNumber(numbersArray[currentIdx + 1])
    }
  }

  const width = 1000 / 2 - 50
  const height = 600 / 2 - 50

  return <div className={styles.container}>
    <div className={styles.center}>Ваша очередь</div>
    {numbers.map((el, i) => <div
      key={i}
      onClick={() => clickNumber(el)}
      className={styles.item} style={{
      transform: `rotate(${(i) * (-360 / 10)}deg)`,
      top: 200 * Math.sin((Math.PI * 2 / 10) * i) + height + 'px',
      left: 200 * Math.cos((Math.PI * 2 / 10) * i) + width + 'px',
      backgroundColor: `${el === errorIdx ? 'red' : '#e7e9eb'}`,
      border: `${el === successNumber ? 'solid 5px green' : 'none'}`
    }}>
      <span style={{transform: `rotate(${(i) * (360 / 10)}deg)`}}>
        {el}
      </span>
    </div>)}
  </div>
}