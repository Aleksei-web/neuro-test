import { KeyboardEvent, useEffect, useRef, useState } from "react";
import success from "../../components/range-numbers/success.mp3";
import error from "../../components/range-numbers/error.mp3";
import styled from "./multipleTask.module.css";

interface IMultipleItem {
  color: string;
  isTheSame: boolean;
  text: string;
  nextItem: () => void;
}

export const MultipleItem = ({
  color,
  text,
  isTheSame,
  nextItem,
}: IMultipleItem) => {
  const divReference = useRef(null);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  let timeOutId: ReturnType<typeof setTimeout>;

  const playSuccess = () => {
    new Audio(success).play();
  };

  const playError = () => {
    new Audio(error).play();
  };

  useEffect(() => {
    // @ts-ignore
    divReference?.current?.focus();
    timeOutId = setTimeout(() => {
      checkAnswer().then(nextItem);
    }, 2000);

    return () => clearTimeout(timeOutId);
  }, [color, text, isTheSame, nextItem]);

  const debounce = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  };

  const checkAnswer = async (keyPress = false) => {
    clearTimeout(timeOutId);
    if (keyPress && isTheSame) {
      setShowSuccess(true);
      await playSuccess();
      await debounce();
      setShowSuccess(false);
      return;
    }
    if (keyPress && !isTheSame) {
      setShowError(true);
      await playError();
      await debounce();
      setShowError(false);
      return;
    }
    if (!keyPress && isTheSame) {
      setShowError(true);
      await playError();
      await debounce();
      setShowError(false);
      return;
    }
    if (!keyPress && !isTheSame) {
      setShowSuccess(true);
      await playSuccess();
      await debounce();
      setShowSuccess(false);
      return;
    }
  };

  const handleKeyDown = async (e: KeyboardEvent<HTMLDivElement>) => {
    await checkAnswer(true);
    nextItem();
  };

  return (
    <>
      <div
        className={styled.container}
        tabIndex={1}
        ref={divReference}
        onKeyDown={handleKeyDown}
      >
        <div
          className={`${styled.textBox} ${showError && styled.error} ${
            showSuccess && styled.success
          }`}
        >
          <span className={`${styled.text}`} style={{ color: text }}>
            {color}
          </span>
        </div>
      </div>
    </>
  );
};
