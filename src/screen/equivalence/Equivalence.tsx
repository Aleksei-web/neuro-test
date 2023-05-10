import styles from './equivalence.module.css'
import {KeyboardEvent, useEffect, useRef, useState} from "react";
import {EquivalenceItem} from "../../components/equivalence/EquivalenceItem";
import {Instruction} from "../../components/instruction/Instruction";
import {EquivalenceRun} from "./EquivalenceRun";

const instruction = `В центре экрана появится название цвета.
Нажимайте на пробел, когда название цвета совпадает с цветом его букв (например: слово "синий" написано синими буквами).
Если цвет букв и название не совпадают (например, слово "синий" написано красными буквами), ничего не нужно делать.

Нажмите на "НАЧАТЬ", когда будете готовы.`

const skill = [
  'Время реакции',
  'Зрительное восприятие',
  'Ингибиция',
  'Мониторинг',
  'Память на имена',
  'Скорость обработки информации',
]

const imgName = 'speed.jpg'


export const Equivalence = () => {
  const [showInstruction, setShowInstruction] = useState(true)

  const startTest = () => {
    setShowInstruction(false)
  }

  return <>
    {
      showInstruction ? <Instruction
          imgName={imgName}
          skill={skill}
          instruction={instruction}
          startTest={startTest}
        /> :
        <EquivalenceRun/>
    }
  </>
}