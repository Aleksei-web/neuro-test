import { useState } from 'react'
import { Instruction } from '../../components/instruction/Instruction'
import { IdentityRun } from './IdentityRun'

const instruction = `Для этого задания понадобится звук.
Вам будут по очереди показаны предметы. Если вы первый раз видите появившийся на экране предмет или слышите его название, нажмите на 'Не появлялся ранее'.
Если предмет появлялся ранее в виде картинки, нажмите на 'Появлялся как изображение', а если вы слышали ранее его название, то нажмите на 'Появлялся в речи'.

Нажмите на "НАЧАТЬ", когда будете готовы.`

const skill = [
  'Время реакции',
  'Зрительное восприятие',
  'Ингибиция',
  'Контекстуальная память',
  'Мониторинг',
  'Невербальная память',
  'Память на имена',
  'Рабочая память',
  'Распознавание',
  'Скорость обработки информации',
  'Слуховое восприятие'
]

const imgName = 'identity.jpg'

export const Identity = () => {
  const [showInstruction, setShowInstruction] = useState(true)

  const startTest = () => {
    setShowInstruction(false)
  }

  return <>
    {
      showInstruction
        ? <Instruction imgName={imgName} instruction={instruction} skill={skill} startTest={startTest}/>
        : <IdentityRun/>
    }
  </>
}
