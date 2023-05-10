import {MouseEvent, MouseEventHandler, useEffect, useLayoutEffect, useRef, useState} from "react";
import {Circle} from "../components/figure/Circle";
import {Polygon} from "../components/figure/Polygon";

export const Solutions = () => {
  const RADIUS = 50
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({width: 0, height: 0})
  const [positionCircle, setPositionCircle] = useState({x: 0, y: 0})
  const [positionPolygon, setPositionPolygon] = useState({x: 0, y: 0})
  const [visiblePolygon, setVisiblePolygon] = useState(false)

  useEffect(() => {
    if (containerRef.current) {
      setContainerSize({
        width: containerRef.current['offsetWidth'],
        height: containerRef.current['offsetHeight']
      });
    }
  }, []);

  function handleClick(e: MouseEvent<SVGCircleElement, globalThis.MouseEvent>) {
    console.log('x -> ', e.clientX - e.currentTarget.getBoundingClientRect().x - RADIUS)
    console.log('y ->', e.clientY - e.currentTarget.getBoundingClientRect().y - RADIUS)
    setTimeout(moveCircle, 500)
  }

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const moveCircle = () => {
    setVisiblePolygon(false)
    const x = getRandomInt(RADIUS, containerSize.height - RADIUS * 2)
    const y = getRandomInt(RADIUS, containerSize.width - RADIUS * 2)
    console.log(containerSize.height)
    console.log({x, y})
    setPositionCircle({x, y})
    if (Math.random() > 0.5) {
      const res = generatePolygonPosition()
      if (!isInterceptFigure([x, y], res)) {
        console.log('isIntercept ',)
        setVisiblePolygon(true)
        movePolygon(...res)
      }
    }
  }

  const generatePolygonPosition = (): [number, number] => {
    const x = getRandomInt(RADIUS, containerSize.height - RADIUS * 2)
    const y = getRandomInt(RADIUS, containerSize.width - RADIUS * 2)

    return [x, y]
  }

  const isInterceptFigure = (coordA: [number, number], coordB: [number, number]) => {
    const [x1, y1] = coordA
    const [x2, y2] = coordB
    const diffX = Math.max(x1, x2) - Math.min(x1, x2)
    const diffY = Math.max(y1, y2) - Math.min(y1, y2)
    console.log({diffX, diffY, x1, y1, x2, y2})

    return (diffX < 100 && diffY < 100);
  }

  const movePolygon = (x: number, y: number) => {
    setPositionPolygon({x, y})
  }
  return <div className="speed-screen">
    <div className='speed-container position-relative' ref={containerRef}>
      <Circle handleClick={handleClick} position={positionCircle}/>
      {visiblePolygon && <Polygon position={positionPolygon}/>}
    </div>
  </div>
}