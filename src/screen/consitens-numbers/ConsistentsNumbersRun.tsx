import {useState} from "react";
import {StepNumbers} from "../../components/range-numbers/StepNumbers";
import {RangeNumbers} from "../../components/range-numbers/RangeNumbers";
import styles from "./consistent-numbers.module.css";

const listOfNumbers = [
  [4],
  [5, 3],
  [6, 9, 4],
  [9, 0, 3, 2],
  [1, 3, 6, 8, 5],
  [5, 2, 0, 2, 8, 4],
  [4, 7, 2, 1, 9, 5, 6],
]

export const ConsistentsNumbersRun = () => {
  const [showSteps, setShowSteps] = useState(true)
  const [showRangeNumbers, setShowRangeNumbers] = useState(false)
  const [currentIdxArray, setCurrentIdxArray] = useState(0)
  const [showEnd, setShowEnd] = useState(false)

  const setIsDone = () => {
    console.log('111')
    setShowSteps(false)
    setShowRangeNumbers(true)
  }

  const endOfList = () => {
    if (currentIdxArray === listOfNumbers.length - 1) {
      setShowEnd(true)
      return
    }
    setCurrentIdxArray(prev => prev + 1)
    setShowSteps(true)
    setShowRangeNumbers(false)
  }

  const renderTest = () => {
    return <>
      {
        showSteps && <StepNumbers numbers={listOfNumbers[currentIdxArray]} time={1000} setIsDone={setIsDone}/>
      }
      {
        showRangeNumbers && <RangeNumbers endOfList={endOfList} numbersArray={listOfNumbers[currentIdxArray]}/>
      }
    </>
  }

  return <div className={styles.container}>
    {(!showEnd) && renderTest()}
    {showEnd && <button  className={'btn btn-success'}>следующий тест</button>}
  </div>
}