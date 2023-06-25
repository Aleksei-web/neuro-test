import { IdentityActions } from '../../components/identity/IdentityActions'
import { IdentityListen } from '../../components/identity/IdentityListen'

import filesMp3 from '../../components/identity/mp3'
import { useState } from 'react'
import error from '../../components/range-numbers/error.mp3'
import success from '../../components/range-numbers/success.mp3'

const items = [
  {
    file: filesMp3.clip,
    img: null,
    answer: 0,
    name: 'скрепка'
  },
  {
    file: null,
    img: 'anchor',
    answer: 0,
    name: 'якорь'
  },
  {
    file: null,
    img: 'directions_bus',
    answer: 0,
    name: 'автобус'
  },
  {
    file: filesMp3.horse,
    img: null,
    answer: 0,
    name: 'лошадь'
  },
  {
    file: filesMp3.pear,
    img: null,
    answer: 0,
    name: 'груша'
  },
  {
    file: filesMp3.phone,
    img: null,
    answer: 0,
    name: 'телефон'
  },
  {
    file: filesMp3.time,
    img: null,
    answer: 0,
    name: 'часы'
  },
  {
    file: filesMp3.clip,
    img: null,
    answer: 1,
    name: 'скрепка'
  },
  {
    file: null,
    img: 'flutter_dash',
    name: 'сова',
    answer: 0
  },
  {
    file: null,
    img: 'directions_bus',
    answer: 2,
    name: 'инструмент'
  },
  {
    file: filesMp3.owl,
    img: null,
    answer: 2,
    name: 'сова'
  },
  {
    file: null,
    img: 'directions_bus',
    answer: 2,
    name: 'автобус'
  },
  {
    file: null,
    img: 'anchor',
    answer: 2,
    name: 'якорь'
  },
  {
    file: filesMp3.pear,
    img: null,
    answer: 1,
    name: 'груша'
  },
  {
    file: null,
    img: 'directions_bus',
    answer: 2,
    name: 'автобус'
  },
  {
    file: filesMp3.clip,
    img: null,
    answer: 1,
    name: 'скрепка'
  },
  {
    file: null,
    img: 'anchor',
    answer: 2,
    name: 'якорь'
  }
]

export const IdentityRun = () => {
  const [currentItem, setCurrentItem] = useState(items[0])
  const [currentIdxItem, setCurrentIdxItem] = useState(0)

  const nextItem = () => {
    if (currentIdxItem < items.length - 1) {
      setCurrentItem(items[currentIdxItem + 1])
      setCurrentIdxItem(prev => prev + 1)
    }
  }
  const playError = () => {
    new Audio(error).play()
  }

  const playSuccess = () => {
    new Audio(success).play()
  }

  const checkAnswer = (answer: number) => {
    if (answer === currentItem.answer) {
      playSuccess()
    } else {
      playError()
    }

    setTimeout(nextItem, 500)
  }

  return <>
    {currentItem && <>
			<IdentityListen song={currentItem.file} img={currentItem.img}/>
			<IdentityActions handlerAction={checkAnswer}/>
		</>}

  </>
}
