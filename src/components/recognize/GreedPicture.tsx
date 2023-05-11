import styled from './recognize.module.css'
import {Picture} from "./Picture";
import {Icon} from "@material-ui/core";

interface IGreedPicture {
  icons: string[][]
  clickGreedItem: (i: number) => void
  error: number
  success: number
}

export const GreedPicture = ({icons, clickGreedItem, error, success}: IGreedPicture) => {

  return <div className={styled.container}>
    {
      icons.map((el, i) => <div
          onClick={() => clickGreedItem(i)}
          key={i} style={{width: '40%', position: 'relative'}}>
          {error === i && <Icon className={`${styled.styledIconResult} ${styled.iconError}`}>error_outlined</Icon>}
          {success === i && <Icon className={`${styled.styledIconResult}`}>task_alt</Icon>}
          <Picture icons={el} changeShowQuestion={() => undefined}/>
        </div>
      )
    }
  </div>
}