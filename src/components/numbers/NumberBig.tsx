import styles from '../../screen/numbers/numbers.module.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import UnpublishedOutlinedIcon from '@mui/icons-material/UnpublishedOutlined';
import {useState} from "react";

interface INumberBig {
  content: number
  handleClick: () => void
  showIcon: boolean
}

export const NumberBig = ({content, handleClick, showIcon}: INumberBig) => {

  return <div className={`${styles.circle} ${styles.big}`} onClick={handleClick}>
    <span>{content}</span>
    {
      showIcon && <CheckCircleOutlineIcon className={styles.iconSuccess}
																					color="success" fontSize='large'/>
    }

  </div>
}