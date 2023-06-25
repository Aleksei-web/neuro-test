import { MouseEvent, useEffect, useRef, useState } from 'react'
import { CanvasMaze } from './CanvasMaze'

export const Maze = () => {
  const canvasRef = useRef(null)
  const [circle, setCircle] = useState<CanvasMaze | null>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const circle: CanvasMaze = new CanvasMaze(canvasRef.current)
      setCircle(circle)

      circle.drawMaze()
    }
  }, [])

  function handlerClick (e: MouseEvent<HTMLCanvasElement>) {
    if (circle) {
      circle.clickCircle(e)
    }
  }

  return <div className={'canvas'}>
    <canvas onClick={(e) => handlerClick(e)} ref={canvasRef} width={1000} height={600}/>
  </div>
}
