import styled from './recognize.module.css'

import {Icon} from "@material-ui/core";
import {useEffect} from "react";

interface IPicture {
  icons: string[]
  changeShowQuestion: () => void
}

export const Picture = ({icons, changeShowQuestion}: IPicture) => {
  useEffect(() => {
    setTimeout(changeShowQuestion, 1500)
  }, [])

  return <div className={styled.elementContainer}>
    {icons.map((i , idx)=> <Icon key={idx} className={styled.iconPicture}>{i}</Icon>)}
  </div>
}