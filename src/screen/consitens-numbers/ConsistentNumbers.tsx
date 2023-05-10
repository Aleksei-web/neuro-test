import {StepNumbers} from "../../components/range-numbers/StepNumbers";
import styles from './consistent-numbers.module.css'
import {memo, useCallback, useMemo, useState} from "react";
import {RangeNumbers} from "../../components/range-numbers/RangeNumbers";
import error from '../../components/range-numbers/error.mp3'

const listOfNumbers = [
  [4],
  [5, 3],
  [6, 9, 4],
  [9, 0, 3, 2],
  [1, 3, 6, 8, 5],
  [5, 2, 0, 2, 8, 4],
  [4, 7, 2, 1, 9, 5, 6],
]


export const ConsistentNumbers = () => {
  const [showSteps, setShowSteps] = useState(true)
  const [showRangeNumbers, setShowRangeNumbers] = useState(false)
  const [currentIdxArray, setCurrentIdxArray] = useState(0)
  const [canRun, setCanRun] = useState(false)
  const [showEnd, setShowEnd] = useState(false)

  const setIsDone = () => {
    console.log('111')
    setShowSteps(false)
    setShowRangeNumbers(true)
  }

  const run = () => {
    setCanRun(true)
    setCurrentIdxArray(0)
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
    {!canRun && !showEnd && <button onClick={run} className={'btn btn-primary'}>старт</button>}
    {(canRun && !showEnd) && renderTest()}
    {showEnd && <button  className={'btn btn-success'}>следующий тест</button>}
  </div>
}