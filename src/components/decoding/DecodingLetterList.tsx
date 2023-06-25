import { DecodingLetter } from './DecodingLetter'
import styled from './component-decoding.module.css'

interface IDecodingLetterList {
  letters: string[]
  clickLetter: (i: string) => void
  errorAnswer: string
  errorSuccessAnswer: string
}

export const DecodingLetterList = ({ letters, clickLetter, errorAnswer, errorSuccessAnswer }: IDecodingLetterList) => {
  return <div className={styled.letterGrid}>
    {letters.map((i, idx) =>
      <div onClick={() => clickLetter(i)} className={styled.letterContainer} key={idx}>
        <DecodingLetter letter={i} error={errorAnswer} success={errorSuccessAnswer}/>
      </div>)
    }
  </div>
}
