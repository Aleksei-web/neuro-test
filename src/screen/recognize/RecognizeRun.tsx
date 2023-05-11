import styled from './recognize.module.css'
import {Picture} from "../../components/recognize/Picture";
import {useState} from "react";
import {GreedPicture} from "../../components/recognize/GreedPicture";


const arrayItems = [
  {
    question: ['balance', 'wb_incandescent', 'wb_twilight'],
    variables: [
      ['balance', 'wb_incandescent', 'wb_twilight'],
      ['balance', 'wb_iridescent', 'wb_twilight'],
      ['balance', 'wb_twilight', 'wb_incandescent'],
      ['balance', 'wb_incandescent', 'wb_sunny'],
    ],
    idxRight: 0
  },
  {
    question: ['balance', 'wb_twilight', 'wb_incandescent'],
    variables: [
      ['balance', 'wb_incandescent', 'wb_twilight'],
      ['balance', 'wb_iridescent', 'wb_twilight'],
      ['balance', 'wb_twilight', 'wb_incandescent'],
      ['balance', 'wb_incandescent', 'wb_sunny'],
    ],
    idxRight: 2
  },
  {
    question: ['balance', 'wb_iridescent', 'wb_twilight'],
    variables: [
      ['balance', 'wb_incandescent', 'wb_twilight'],
      ['balance', 'wb_iridescent', 'wb_twilight'],
      ['balance', 'wb_twilight', 'wb_incandescent'],
      ['balance', 'wb_incandescent', 'wb_sunny'],
    ],
    idxRight: 1
  },
  {
    question: ['balance', 'wb_incandescent', 'wb_sunny'],
    variables: [
      ['balance', 'wb_incandescent', 'wb_twilight'],
      ['balance', 'wb_iridescent', 'wb_twilight'],
      ['balance', 'wb_twilight', 'wb_incandescent'],
      ['balance', 'wb_incandescent', 'wb_sunny'],
    ],
    idxRight: 3
  },
  {
    question: ['balance', 'wb_incandescent', 'hourglass_empty'],
    variables: [
      ['balance', 'wb_incandescent', 'wb_twilight'],
      ['balance', 'wb_incandescent', 'hourglass_empty'],
      ['balance', 'wb_twilight', 'wb_incandescent'],
      ['balance', 'wb_incandescent', 'wb_sunny'],
    ],
    idxRight: 1
  },
  {
    question: ['extension', 'flutter_dash', 'hourglass_empty'],
    variables: [
      ['extension', 'wb_incandescent', 'wb_twilight'],
      ['balance', 'flutter_dash', 'hourglass_empty'],
      ['balance', 'wb_twilight', 'wb_incandescent'],
      ['extension', 'flutter_dash', 'hourglass_empty'],
    ],
    idxRight: 3
  },
  {
    question: ['hotel_class', 'flutter_dash', 'hotel_class'],
    variables: [
      ['extension', 'wb_incandescent', 'wb_twilight'],
      ['hotel_class', 'flutter_dash', 'hotel_class'],
      ['hotel_class', 'hotel_class', 'hotel_class'],
      ['extension', 'flutter_dash', 'hourglass_empty'],
    ],
    idxRight: 1
  },
  {
    question: ['component_exchange', 'flutter_dash', 'hotel_class'],
    variables: [
      ['extension', 'wb_incandescent', 'wb_twilight'],
      ['hotel_class', 'flutter_dash', 'hotel_class'],
      ['component_exchange', 'flutter_dash', 'hotel_class'],
      ['extension', 'component_exchange', 'hourglass_empty'],
    ],
    idxRight: 2
  }
]

export const RecognizeRun = () => {
  const [showQuestion, setShowQuestion] = useState(true)
  const [idxError, setIdxError] = useState(-1)
  const [idxSuccess, setIdxSuccess] = useState(-1)
  const [question, setQuestion] = useState(arrayItems[0].question)
  const [variables, setVariables] = useState(arrayItems[0].variables)
  const [idxRight, setIdxRight] = useState(arrayItems[0].idxRight)
  const [idxQuestion, setIdxQuestion] = useState(0)


  const changeShowQuestion = () => {
    setShowQuestion(false)
  }

  function clickGreedItem(i: number) {
    if (i === idxRight) {
      setIdxSuccess(i)
    } else {
      setIdxError(i)
    }
    setTimeout(nextQuestion, 1000)
  }

  function nextQuestion() {
    console.log('next')
    if (idxQuestion === arrayItems.length - 2) {
      return
    }
    setVariables(arrayItems[idxQuestion + 1].variables)
    setQuestion(arrayItems[idxQuestion + 1].question)
    setIdxRight(arrayItems[idxQuestion + 1].idxRight)
    setIdxError(prev => prev - 10)
    setIdxSuccess(prev => prev - 10)
    setIdxQuestion(prev => prev + 1)
    setShowQuestion(true)
  }

  return <div className={styled.container}>
    {showQuestion ? <Picture
        changeShowQuestion={changeShowQuestion}
        icons={question}/> :
      <GreedPicture
        clickGreedItem={clickGreedItem}
        icons={variables}
        error={idxError}
        success={idxSuccess}
      />
    }
  </div>
}