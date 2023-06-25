import { useState } from 'react'
import { Instruction } from '../../components/instruction/Instruction'
import { RecognizeRun } from './RecognizeRun'

const instruction = `Вы увидите три фигуры в течение короткого периода времени.
Внимательно наблюдайте и запомните последовательность.
Затем будут показаны четыре возможные комбинации по три фигуры. Выберите ту, что с точностью соответствует первой показанной последовательности.

Нажмите на "НАЧАТЬ", когда будете готовы.`

const skill = [
  'Визуальное сканирование',
  'Время реакции',
  'Невербальная память',
  'Пространственное восприятие',
  'Рабочая память',
  'Распознавание',
  'Скорость обработки информации'
]

const imgName = 'speed.jpg'

export const Recognize = () => {
  const [showInstruction, setShowInstruction] = useState(true)

  const run = () => {
    setShowInstruction(false)
  }

  return <>
    {showInstruction
      ? <Instruction startTest={run} instruction={instruction} skill={skill} imgName={imgName}/>
      : <RecognizeRun/>}
  </>
}
