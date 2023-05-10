import {GreedBalls} from "./GreedBalls";
import styled from './consistent-balls.module.css'
import {useEffect, useState} from "react";

const path = [1, 5, 3, 9]

export const ConsistentBalls = () => {
  const [isRun, setIsRun] = useState(false)
  const [selectedBall, setSelectedBall] = useState(-1)
  const [isStepUser, setIsStepUser] = useState(false)
  const [userStep, setUserStep] = useState(0)
  const [userSelectSuccess, setUserSelectSuccess] = useState(-1)

  useEffect(() => {
    if (isRun && selectedBall <= path.length - 1) {
      setTimeout(() => {
        setSelectedBall(prev => prev + 1)
      }, 1000)
    }
    if (selectedBall > path.length - 1) {
      setSelectedBall(-1)
      setIsStepUser(true)
    }
  }, [isRun, selectedBall])

  const run = () => {
    setIsRun(true)
  }

  const clickOnBall = (i: number) => {
    if (!isStepUser) return
    if (path[userStep] === i) {
      setUserSelectSuccess(i)
      setUserStep(prev => prev++)
    }
    console.log(i)
  }
  return <div className={styled.container}>
    {isRun ?
      <GreedBalls userSelectError={-1} userSelectSuccess={userSelectSuccess} clickOnBall={clickOnBall}
                  isStepUser={isStepUser} selectedBall={path[selectedBall]}/> :
      <button onClick={run} className={'btn btn-success'}>начать</button>}
  </div>
}