interface IPolygon {
  position: { x: number; y: number }
}

export const Polygon = ({position}: IPolygon) => {
  return <div
    style={{width: '115px', height: '115px', position: 'absolute', top: `${position.x}px`, left: `${position.y}px`}}>
    <svg style={{width: '95%', height: '95%'}} version="1.1" viewBox="0 0 65 65" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path
        d="m43 60.9-20.2 0C17.5 61 16.7 60.6 14 56.3L3.9 38.1C1.6 33 1.5 32.9 4 28.5L14.8 10c0 0 1.3-2.4 2.6-3.1 1.4-0.8 4.6-0.7 4.6-0.7l21.1 0.1c6.1-0.1 5.5 0.7 8.1 4.4L61.6 28.6c1.9 4.3 2.5 4.8 0.4 9.3L51.9 55.7C49.5 61 48.5 60.9 43 60.9Z"
        fill="red"/>
    </svg>
  </div>
}