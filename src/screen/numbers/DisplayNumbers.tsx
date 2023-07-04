import styles from "./numbers.module.css";
import { NumberItem } from "../../components/numbers/NumberItem";
import successMp3 from "../../components/range-numbers/success.mp3";
import errorMp3 from "../../components/range-numbers/error.mp3";

interface IDisplayNumbers {
  handleClick: (isRightAnswer: boolean) => void;
  bigBall: number;
  smallBall: number;
  success: number;
  trigger?: string;
}

export const DisplayNumbers = ({
  bigBall,
  smallBall,
  success,
  trigger,
  handleClick,
}: IDisplayNumbers) => {
  const playSuccess = () => {
    new Audio(successMp3).play();
  };

  const playError = () => {
    new Audio(errorMp3).play();
  };

  const handleClickBall = (result: number) => {
    console.log({ result, success });
    if (result === success) {
      playSuccess();
    } else {
      playError();
    }

    setTimeout(() => {
      handleClick(result === success);
    }, 500);
  };

  const randomDirection = () => {
    return Math.random() <= 0.5 ? "row-reverse" : "row";
  };

  return (
    <div
      className={styles.container}
      style={{ flexDirection: randomDirection() }}
    >
      {trigger && <div className={styles.trigger}>{trigger}</div>}
      <NumberItem
        size={"big"}
        success={success}
        content={bigBall}
        handleClick={handleClickBall}
      />{" "}
      <NumberItem
        size={"small"}
        success={success}
        content={smallBall}
        handleClick={handleClickBall}
      />
    </div>
  );
};
