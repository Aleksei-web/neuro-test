import styles from '../../screen/numbers/numbers.module.css'
import UnpublishedOutlinedIcon from "@mui/icons-material/UnpublishedOutlined";

interface INumberSmall {
  content: number
  handleClick: () => void
  showIcon: boolean
}

export const NumberSmall = ({content, handleClick, showIcon}: INumberSmall) => {
  return <div className={styles.circle} onClick={handleClick}>
    <span>{content}</span>
    {showIcon && <UnpublishedOutlinedIcon className={styles.iconError} fontSize='large'/>}
  </div>
}