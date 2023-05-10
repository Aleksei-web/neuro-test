import styles from "../../screen/equivalence/equivalence.module.css";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DangerousIcon from '@mui/icons-material/Dangerous';

interface IEquivalenceItem {
  color: string
  text: string
  showError: boolean
  showSuccess: boolean
}

export const EquivalenceItem = ({color, text, showError, showSuccess}: IEquivalenceItem) => {
  return <div className={styles.item}>
    {showError && <DangerousIcon className={styles.icon} sx={{color: 'red'}} />}
    {showSuccess && <CheckCircleOutlineIcon className={styles.icon} sx={{color: 'green'}} />}
    <span style={{color: color}}>{text}</span>
  </div>
}