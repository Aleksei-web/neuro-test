import styles from './consistent-numbers.module.css'
import { ConsistentsNumbersRun } from './ConsistentsNumbersRun'
import { useState } from 'react'
import { Instruction } from '../../components/instruction/Instruction'

const instruction = `Вам будет показана серия цифр.
Внимательно изучите и запомните их для того, чтобы затем воспроизвести.

Нажмите на "НАЧАТЬ", когда будете готовы.`

const skill = ['Время реакции', 'Кратковременная память',
  'Кратковременная фонологическая память',
  'Рабочая память',
  'Скорость обработки информации'
]

const imgName = 'speed.jpg'

export const ConsistentNumbers = () => {
  const [showInstruction, setShowInstruction] = useState(true)

  const startTest = () => {
    setShowInstruction(false)
  }

  return <div className={styles.container}>
    {showInstruction
      ? <Instruction
        imgName={imgName}
        skill={skill}
        instruction={instruction}
        startTest={startTest}/>
      : <ConsistentsNumbersRun/>

    }
  </div>
}
