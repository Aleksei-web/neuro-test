import styles from './numbers.module.css'
import {NumberBig} from "../../components/numbers/NumberBig";
import {NumberSmall} from "../../components/numbers/NumberSmall";
import {useState} from "react";
import {NumbersRun} from "./NumbersRun";
import {Instruction} from "../../components/instruction/Instruction";


const instruction = `Нажмите на фигуру большего размера так быстро, как только можете, не обращая внимания на числа.

Нажмите на "НАЧАТЬ", когда будете готовы.`

const skill = [
  'Время реакции',
  'Ингибиция',
  'Когнитивная гибкость',
  'Мониторинг',
  'Скорость обработки информации'
]

const imgName = 'numbers.jpg'


export const Numbers = () => {
  const [showInstruction, setShowInstruction] = useState(true)

  const startTest = () => {
    setShowInstruction(false)
  }

  return <>
    {
      showInstruction ?
      <Instruction imgName={imgName} instruction={instruction} skill={skill} startTest={startTest}/> :
      <NumbersRun/>
    }
  </>
}