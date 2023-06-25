import { DecodingRun } from './DecodingRun'
import { useState } from 'react'
import { Instruction } from '../../components/instruction/Instruction'

const instruction = `На экране в течение короткого промежутка времени появится картинка. Внимательно её изучите.
После того, как картинка исчезнет, на экране появятся четыре буквы.
Одна из них - это первая буква слова, которое появилось в виде картинки.
Нажмите на эту букву так быстро, как только можете.

Нажмите на "НАЧАТЬ", когда будете готовы.`

const skill = [
  'Время реакции',
  'Зрительное восприятие',
  'Память на имена',
  'Скорость обработки информации'
]

const imgName = 'decoding.jpg'

export const Decoding = () => {
  const [showInstruction, setShowInstruction] = useState(true)

  const startTest = () => {
    setShowInstruction(false)
  }

  return <>
    {
      showInstruction
        ? <Instruction
          imgName={imgName}
          skill={skill}
          instruction={instruction}
          startTest={startTest}
        />
        : <DecodingRun/>
    }
  </>
}
