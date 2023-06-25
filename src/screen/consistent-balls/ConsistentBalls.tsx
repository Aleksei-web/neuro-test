import styled from './consistent-balls.module.css'
import { ConsistentBallsRun } from './ConsistentBallsRun'
import { useState } from 'react'
import { Instruction } from '../../components/instruction/Instruction'

const instruction = `Вы увидите, как в определённом порядке загораются круги.
Внимательно наблюдайте за ними и запомните порядок, чтобы воспроизвести его, когда придёт ваша очередь.

Нажмите на "НАЧАТЬ", когда будете готовы.`

const skill = [
  'Время реакции',
  'Кратковременная зрительная память',
  'Кратковременная память',
  'Невербальная память',
  'Планирование',
  'Пространственное восприятие',
  'Рабочая память',
  'Скорость обработки информации'
]

const imgName = 'consistent.jpg'

export const ConsistentBalls = () => {
  const [showInstruction, setShowInstruction] = useState(true)

  const run = () => {
    setShowInstruction(false)
  }

  return <div className={styled.container}>

    {showInstruction
      ? <Instruction startTest={run} instruction={instruction} skill={skill} imgName={imgName}/>
      : <ConsistentBallsRun/>}
  </div>
}
