import styled from './synchronic.module.css'
import {useState, MouseEvent} from "react";
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const SynchronicRun = () => {
  const [correct, setCorrect] = useState(true)

  const mouseOverCircle = (e: MouseEvent<HTMLDivElement>) => {
    const node = e.target as HTMLElement
    const {left, top} = node.getBoundingClientRect()
    const x = e.clientX - left - 25;
    const y = e.clientY - top - 25;
    if (Math.abs(x) > 10 || Math.abs(y) > 10) {
      setCorrect(false)
    } else {
      setCorrect(true)
    }
    console.log(x, y)
  }

  return <div className={styled.square}>
      <div className={styled.squareSmall}></div>
      <div onMouseMove={mouseOverCircle} className={`${styled.circle}`}>
        {correct ? <CheckCircleIcon sx={{fontSize: 50, color: 'green'}}/> :
          <ErrorIcon sx={{fontSize: 50, color: 'red'}}/>}
      </div>
    </div>
}