import styled from './consistent-balls.module.css'

const items = [
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
]

interface IGreedBalls {
  selectedBall: number
  isStepUser: boolean
  clickOnBall: (i: number) => void
  userSelectSuccess: number
  userSelectError: number
}

export const GreedBalls = ({selectedBall, isStepUser, clickOnBall, userSelectSuccess,userSelectError}: IGreedBalls) => {
  return <div style={{height: '100%', width: '100%', position: 'relative'}}>
    {!isStepUser && <h3>очередь компютера</h3>}
    {
      items.map((el, i) => (<div
        onClick={() => clickOnBall(i)}
        className={styled.item}
        key={i}
        style={{
          top: `${el.x}px`,
          left: `${el.y}px`,
          backgroundColor: `${selectedBall === i || userSelectSuccess === i ? 'orange' : 'white'}`
        }}>
      </div>))
    }
  </div>
}