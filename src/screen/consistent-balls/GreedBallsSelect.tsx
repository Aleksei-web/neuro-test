import {useEffect, useState} from "react";
import styled from "./consistent-balls.module.css";

interface IGreedBallsSelect {
  balls: { x: number; y: number; }[]
  clickBall: (i: number) => void
  selectedColorBall: 'green' | 'red'
}


export const GreedBallsSelect = ({balls, clickBall, selectedColorBall}: IGreedBallsSelect) => {
  const [selectedBallIdx, setSelectedBallIdx] = useState(-1)

  const click = (i: number) => {
    setSelectedBallIdx(i)
      clickBall(i)
  }

  return <div style={{height: '100%', width: '100%', position: 'relative'}}>
    <h3>Ваша очередь</h3>
    {
      balls.map((el, i) => (<div
        onClick={() => click(i)}
        className={styled.item}
        key={i}
        style={{
          top: `${el.x}px`,
          left: `${el.y}px`,
          backgroundColor: `${selectedBallIdx === i ? selectedColorBall : 'white'}`
        }}>
      </div>))
    }
  </div>
}