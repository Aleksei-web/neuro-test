import {Dispatch, SetStateAction, useEffect, useRef, useState} from 'react'
import {CanvasGrade} from './CanvasGrade'
import styled from './grade.module.css'

type Directions = 'right' | 'left' | 'bottomLeft' | 'topLeft' | 'bottomRight' | 'topRight' | 'top' | 'bottom'

export interface Figure {
  x: number
  y: number
  directions: Directions
  color: string
  speed: number
  maxLeft: number
  maxRight: number
  maxTop: number
  maxBottom: number
}

const directions: Directions[] = ['right', 'left', 'bottomLeft', 'topLeft', 'bottomRight', 'topRight', 'top', 'bottom']

interface IGradeComponent {
  items: Figure[],
  setItems: Dispatch<SetStateAction<Figure[]>>
  handlerItemClic: (speed: number) => void
}

export const GradeComponent = ({items, setItems, handlerItemClic}: IGradeComponent) => {
  const canvasRef = useRef(null)
  const [field, setField] = useState<CanvasGrade | null>(null)

  function moveLeft(item: Figure) {
    return {...item, x: item.x - item.speed}
  }

  function moveRight(item: Figure) {
    return {...item, x: item.x + item.speed}
  }

  function randomDirection(oldDirection: 'left' | 'top' | 'bottom' | 'right'): Directions {
    let direction

    switch (oldDirection) {
      case 'left':
        direction = ['right', 'bottomRight', 'topRight', 'bottom']
        break
      case 'right':
        direction = ['left', 'bottomLeft', 'topLeft', 'top', 'bottom']
        break
      case 'top':
        direction = ['right', 'left', 'bottomLeft', 'bottomRight', 'bottom']
        break
      case 'bottom':
        direction = ['right', 'left', 'topLeft', 'topRight', 'top', 'bottom']
        break
    }

    direction = directions[Math.floor(Math.random() * directions.length)]

    return direction
  }

  const animate = () => {
    if (field) {
      setItems(p => {
        return p.map(el => {
            const {x, y, maxLeft, maxTop, maxRight, maxBottom, directions} = el

            if (x >= maxRight) {
              el.x = el.x - el.speed
              el.directions = randomDirection('right')
            }
            if (x <= maxLeft) {
              el.x = el.x + el.speed
              el.directions = randomDirection('left')
            }
            if (y >= maxBottom) {
              el.y = el.y - el.speed
              el.directions = randomDirection('bottom')
            }

            if (y <= maxTop) {
              el.y = el.y + el.speed
              el.directions = randomDirection('top')
            }

            if (el.directions === 'bottomLeft') {
              return {...el, x: el.x - el.speed, y: el.y + el.speed}
            }

            if (el.directions === 'topLeft') {
              return {...el, x: el.x - el.speed, y: el.y - el.speed}
            }

            if (directions === 'left') {
              return moveLeft(el)
            }
            if (directions === 'top') {
              return {...el, x: el.x + el.speed}
            }

            if (directions === 'bottom') {
              return {...el, x: el.x - el.speed}
            }

            if (directions === 'right') {
              return moveRight(el)
            }

            if (el.directions === 'topRight') {
              return {...el, x: el.x + el.speed, y: el.y - el.speed}
            }

            if (el.directions === 'bottomRight') {
              return {...el, x: el.x + el.speed, y: el.y + el.speed}
            }

            return el.directions === 'left' ? moveLeft(el) : moveRight(el)
          }
        )
      })
      field.renderCircle(items)
    }
  }

  requestAnimationFrame(animate)
  useEffect(() => {
    if (canvasRef.current) {
      const field: CanvasGrade = new CanvasGrade(canvasRef.current)
      setField(field)
    }
  }, [])

  function handlerClick(speed: number) {
    handlerItemClic(speed)
  }

  return <div className={styled.container}>
    <canvas ref={canvasRef} width={1000} height={600}/>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      {items.map((item, i) => (
        <div key={i}
             onClick={() => handlerClick(item.speed)}
             style={{
               backgroundColor: item.color,
               borderRadius: '8px',
               height: '50px',
               width: '80px',
               margin: '0 20px',
               cursor: 'pointer'
             }}></div>
      ))}
    </div>
  </div>
}
