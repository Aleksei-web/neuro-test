import styled from './consistent-balls.module.css'
import { useEffect, useState } from 'react'

interface IGreedBalls {
  balls: { x: number; y: number; }[]
  path: number[]
  done: () => void
}

export const GreedBallsPlay = ({ balls, path, done }: IGreedBalls) => {
  const [selectedBallIdx, setSelectedBallIdx] = useState(-1)

  useEffect(() => {
    setTimeout(() => {
      console.log('timeout run')
      if (selectedBallIdx <= path.length - 1) {
        setSelectedBallIdx(prev => prev + 1)
      } else {
        done()
      }
    }, 1000)
  }, [selectedBallIdx])

  return <div style={{ height: '100%', width: '100%', position: 'relative' }}>
    <h3>очередь компьютера</h3>
    {
      balls.map((el, i) => (<div
        className={styled.item}
        key={i}
        style={{
          top: `${el.x}px`,
          left: `${el.y}px`,
          backgroundColor: `${path[selectedBallIdx] === i ? 'orange' : 'white'}`
        }}>
      </div>))
    }
  </div>
}
