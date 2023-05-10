import {useEffect, useState} from "react";
import styled from "./consistent-balls.module.css";
import {GreedBallsPlay} from "./GreedBallsPlay";
import {GreedBallsSelect} from "./GreedBallsSelect";

const path = [1, 5, 3, 9]

const arraySome = [
  {

    items: [
      {x: 80, y: 50},
      {x: 120, y: 220},
      {x: 90, y: 400},
      {x: 280, y: 280},
      {x: 480, y: 200},
      {x: 95, y: 550},
      {x: 158, y: 786},
      {x: 280, y: 500},
      {x: 430, y: 500},
      {x: 430, y: 800},
    ],
    path: [3]
  },
  {

    items: [
      {x: 80, y: 50},
      {x: 120, y: 220},
      {x: 90, y: 400},
      {x: 280, y: 280},
      {x: 480, y: 200},
      {x: 95, y: 550},
      {x: 158, y: 786},
      {x: 280, y: 500},
      {x: 430, y: 500},
      {x: 430, y: 800},
    ],
    path: [3, 9]
  },
  {
    items: [
      {x: 80, y: 50},
      {x: 120, y: 220},
      {x: 90, y: 400},
      {x: 280, y: 280},
      {x: 480, y: 200},
      {x: 95, y: 550},
      {x: 158, y: 786},
      {x: 280, y: 500},
      {x: 430, y: 500},
      {x: 430, y: 800},
    ],
    path: [5, 8, 2]
  },
  {
    items: [
      {x: 80, y: 50},
      {x: 120, y: 220},
      {x: 90, y: 400},
      {x: 280, y: 280},
      {x: 480, y: 200},
      {x: 95, y: 550},
      {x: 158, y: 786},
      {x: 280, y: 500},
      {x: 430, y: 500},
      {x: 430, y: 800},
    ],
    path: [5, 1, 2, 9]
  },
]

export const ConsistentBallsRun = () => {
  const [isStepUser, setIsStepUser] = useState(false)
  const [color, setColor] = useState<'red' | 'green'>('red')
  const [countClick, setCountClick] = useState(0)
  const [idx, setIdx] = useState(0)
  const [balls, setBalls] = useState(arraySome[0].items)
  const [path, setPath] = useState(arraySome[0].path)

  const done = () => {
    setIsStepUser(true)
    console.log('done')
  }

  const clickBall = (i: number) => {
    console.log('мимо')
    if (path[countClick] === i) {
      console.log('мимо1')
      setColor('green')
      setCountClick(prev => prev + 1)
      if (countClick === path.length - 1 && idx < arraySome.length - 1) {
        setTimeout(() => {
          console.log('here')
          setCountClick(0)
          setIdx(prev => prev + 1)
          setBalls(arraySome[idx + 1].items)
          setPath(arraySome[idx + 1].path)
          setIsStepUser(false)
        }, 1000)

      }
    } else {
      setColor('red')
      // setCountClick(prev => prev + 1)
    }
    console.log(i)
  }

  return <div className={styled.container}>
    {isStepUser ?
      <GreedBallsSelect balls={balls} clickBall={clickBall}
                        selectedColorBall={color}/> :
      <GreedBallsPlay path={path} balls={balls} done={done}/>}
  </div>
}