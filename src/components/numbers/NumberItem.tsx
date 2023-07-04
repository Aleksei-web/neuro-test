import styles from "../../screen/numbers/numbers.module.css";
import UnpublishedOutlinedIcon from "@mui/icons-material/UnpublishedOutlined";
import { useEffect, useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

interface INumberSmall {
  content: number;
  handleClick: (content: number) => void;
  success: number;
  size: "big" | "small";
}

export const NumberItem = ({
  content,
  handleClick,
  success,
  size,
}: INumberSmall) => {
  const [showIconError, setShowIconError] = useState(false);
  const [showIconSuccess, setShowIconSuccess] = useState(false);

  useEffect(() => {
    setShowIconError(false);
    setShowIconSuccess(false);
  }, [content, size, success]);

  const clickBall = () => {
    if (success === content) {
      setShowIconSuccess(true);
    } else {
      setShowIconError(true);
    }

    handleClick(content);
  };

  return (
    <div
      className={`${styles.circle} ${size === "big" && styles.big}`}
      onClick={clickBall}
    >
      <span>{content}</span>
      {showIconError && (
        <UnpublishedOutlinedIcon
          className={styles.iconError}
          fontSize="large"
        />
      )}
      {showIconSuccess && (
        <CheckCircleOutlineIcon
          className={styles.iconSuccess}
          color="success"
          fontSize="large"
        />
      )}
    </div>
  );
};
