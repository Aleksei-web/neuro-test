import styles from './equivalence.module.css'
import {KeyboardEvent, useEffect, useRef, useState} from "react";
import {EquivalenceItem} from "../../components/equivalence/EquivalenceItem";

const items = [
  {color: 'blue', text: 'красный', isRight: false},
  {color: 'green', text: 'зеленый', isRight: true},
  {color: 'gray', text: 'голубой', isRight: false},
  {color: 'black', text: 'желтый', isRight: false},
  {color: 'red', text: 'красный', isRight: true},
  {color: 'black', text: 'фиолетовый', isRight: false},
  {color: 'red', text: 'серый', isRight: false},
  {color: 'black', text: 'черный', isRight: true},
  {color: 'orange', text: 'оранжевый', isRight: true},
  {color: 'black', text: 'розовый', isRight: false},
  {color: 'yellow', text: 'желтый', isRight: true},
  {color: 'black', text: 'коричневый', isRight: false},
  {color: 'gray', text: 'черный', isRight: false},
]


export const EquivalenceRun = () => {
  const divReference = useRef(null);
  const [isRun, setIsRun] = useState(false)
  const [currentIdx, setCurrentIdx] = useState(0)
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    console.log('effect')
    if (isRun && currentIdx < items.length - 2) {
      console.log(currentIdx)
      setTimeout(() => {
        setIsError(false)
        setIsSuccess(false)
        setCurrentIdx(prev => prev + 1)
      }, 1000, currentIdx)
    }
  }, [currentIdx])

  useEffect(() => {
    run()
  }, [])

  const run = () => {
    // @ts-ignore
    divReference?.current?.focus()
    setCurrentIdx(prev => prev + 1)
    setIsRun(true)
  }

  const handlerKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Space') {
      if (items[currentIdx].isRight) {
        setIsSuccess(true)
      } else {
        setIsError(true)
      }
    }
  }

  return <div ref={divReference}
              className={styles.container}
              onKeyDown={handlerKeyDown}
              tabIndex={1}
              autoFocus={true}>
    <EquivalenceItem
      color={items[currentIdx].color}
      text={items[currentIdx].text}
      showError={isError}
      showSuccess={isSuccess}/>
  </div>
}