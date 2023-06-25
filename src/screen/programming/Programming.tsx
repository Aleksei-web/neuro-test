import { useState } from 'react'
import { Instruction } from '../../components/instruction/Instruction'
import { Maze } from '../../components/programming/Maze'

const instruction = `Вы увидите на экране лабиринт.
Проведите шар, нажимая на синие кружки, из правого верхнего угла в левый нижний угол, выбирая самый короткий путь.

Нажмите на "НАЧАТЬ", когда будете готовы.`

const skill = ['Визуальное сканирование', 'Планирование', 'Пространственное восприятие']

const imgName = 'programm.jpg'

export const Programming = () => {
  const [showInstruction, setShowInstruction] = useState(true)

  const startTest = () => {
    setShowInstruction(false)
  }

  return <>
    {showInstruction
      ? <Instruction
        imgName={imgName}
        skill={skill}
        instruction={instruction}
        startTest={startTest}
      />
      : <Maze/>}
  </>
}
