import {MouseEvent, useEffect, useState} from "react"

interface ICircle {
  handleClick: (e: MouseEvent<SVGCircleElement>) => void
  position: { x: number; y: number }
}


export const Circle = ({handleClick, position}: ICircle) => {
  const [opacity, setOpacity] = useState('none')

  useEffect(() => {
    setOpacity('none')
  }, [position.y, position.x])

  const showAttributeAndHandle = (e: MouseEvent<SVGCircleElement>) => {
    setOpacity('block')
    handleClick(e)
  }

  return <div style={{position: 'absolute', top: `${position.x}px`, left: `${position.y}px`}}>
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2_2)">
        <circle onClick={(e) => showAttributeAndHandle(e)} cx="50" cy="50" r="50" fill="#FF0000"/>
        <circle display={opacity} cx="50" cy="50" r="17" stroke="black"/>
        <line display={opacity} x1="25" y1="50" x2="75" y2="50" stroke="black"/>
        <path display={opacity} d="M50 25V75" stroke="black"/>
      </g>
      <defs>
        <clipPath id="clip0_2_2">
          <rect width="100" height="100" fill="white"/>
        </clipPath>
      </defs>
    </svg>
    {/*<svg height="100" width="100">*/}
    {/*  <g>*/}
    {/*    <circle onClick={(e) => handleClick(e)} cx="50" cy="50" r="50" fill="red" />*/}
    {/*    <circle r="20" cx="20" cy="20" strokeWidth={3} fill='none' />*/}
    {/*  </g>*/}

    {/*</svg>*/}
  </div>
}