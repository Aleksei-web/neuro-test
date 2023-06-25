import { MouseEvent, useState } from 'react'
import styles from './coordination-ball.module.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorIcon from '@mui/icons-material/Error'

export const CoordinationRun = () => {
  const [correct, setCorrect] = useState(true)

  const mouseOverCircle = (e: MouseEvent<HTMLDivElement>) => {
    const node = e.target as HTMLElement
    const { left, top } = node.getBoundingClientRect()
    const x = e.clientX - left - 25
    const y = e.clientY - top - 25
    if (Math.abs(x) > 10 || Math.abs(y) > 10) {
      setCorrect(false)
    } else {
      setCorrect(true)
    }
    console.log(x, y)
  }

  return <div className={styles.container}>
    <div onMouseMove={mouseOverCircle} className={styles.ball}>
      {correct
        ? <CheckCircleIcon sx={{ fontSize: 50, color: 'green' }}/>
        : <ErrorIcon sx={{ fontSize: 50, color: 'red' }}/>}
    </div>

  </div>
}
