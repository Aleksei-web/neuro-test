import { useEffect, useState } from 'react'
import styles from './range-numbers.module.css'

interface IStepNumbers {
  numbers: number[]
  time: number
  setIsDone: () => void
}

export const StepNumbers = ({ numbers, time, setIsDone }: IStepNumbers) => {
  const [currentNumber, setCurrentNumber] = useState<null | number>(null)
  const [currentIdx, setCurrentIdx] = useState(0)

  useEffect(() => {
    run()
  }, [currentIdx])

  const run = () => {
    setTimeout(() => {
      if (currentIdx === numbers.length) {
        setIsDone()
      } else {
        setCurrentIdx(prev => prev + 1)
        setCurrentNumber(numbers[currentIdx])
      }
    }, time)
  }

  return <>
    {currentNumber === null && <div className={styles.oneStep} style={{ fontSize: '24px' }}>очередь компьютера</div>}
    {currentNumber !== null && <div className={styles.oneStep}>{currentNumber}</div>}
  </>
}
