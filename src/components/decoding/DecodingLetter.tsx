import styled from './component-decoding.module.css'

interface IDecodingLetter {
  letter: string
  error: string
  success: string
}

export const DecodingLetter = ({ letter, error, success }: IDecodingLetter) => {
  return <div
    className={`${styled.letter} ${error === letter && styled.error} ${success === letter && styled.success} `}
  >
    <span>{letter}</span>
  </div>
}
