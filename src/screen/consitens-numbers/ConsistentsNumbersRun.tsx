import { useState } from "react";
import { StepNumbers } from "../../components/range-numbers/StepNumbers";
import { RangeNumbers } from "../../components/range-numbers/RangeNumbers";
import styles from "./consistent-numbers.module.css";

const listOfNumbers = [
  { numbers: [5, 3], errors: 0, level: 1, difficult: 2 },
  { numbers: [6, 9, 4], errors: 0, level: 2, difficult: 3 },
  { numbers: [9, 0, 3, 2], errors: 1, level: 3, difficult: 4 },
  { numbers: [1, 3, 6, 8, 5], errors: 1, level: 4, difficult: 5 },
  { numbers: [5, 2, 0, 2, 8, 4], errors: 1, level: 5, difficult: 6 },
  { numbers: [4, 7, 2, 1, 9, 5, 6], errors: 2, level: 6, difficult: 7 },
  { numbers: [4, 2, 1, 8, 5, 3, 5, 3], errors: 2, level: 7, difficult: 8 },
  { numbers: [3, 4, 8, 6, 4, 2, 5, 6, 2], errors: 2, level: 8, difficult: 9 },
  {
    numbers: [3, 4, 0, 8, 9, 0, 2, 3, 4, 2],
    errors: 2,
    level: 9,
    difficult: 10,
  },
];

export const ConsistentsNumbersRun = () => {
  const [showSteps, setShowSteps] = useState(true);
  const [showRangeNumbers, setShowRangeNumbers] = useState(false);
  const [currentIdxArray, setCurrentIdxArray] = useState(0);
  const [showEnd, setShowEnd] = useState(false);
  const [countErrors, setCountErrors] = useState(0);
  const [totalErrors, setTotalErrors] = useState(0);
  const [resultLastSuccessTest, setResultLastSuccessTest] = useState<{
    idxTest: number;
    time: number;
  }>({ idxTest: 0, time: 0 });
  const [strResult, setStrResult] = useState("");

  const setIsDone = () => {
    setShowSteps(false);
    setShowRangeNumbers(true);
  };

  const runAgain = () => {
    setShowSteps(true);
    setShowRangeNumbers(false);
    setCurrentIdxArray(0);
    setShowEnd(false);
    setCountErrors(0);
    setTotalErrors(0);
    setResultLastSuccessTest((p) => ({
      idxTest: 0,
      time: 0,
    }));
    setStrResult("");
  };

  const levelToPercent = (level: number) => {
    switch (level) {
      case 1:
        return 15;
      case 2:
        return 33;
      case 3:
        return 50;
      case 4:
        return 58;
      case 5:
        return 67;
      case 6:
        return 75;
      case 7:
        return 83;
      case 8:
        return 92;
      case 9:
        return 100;
      default:
        return 100;
    }
  };

  const calculate = (
    idxOfSuccessTest: number,
    time: number,
    totalErrors: number
  ) => {
    const minParamY = 100;
    const maxParamY = 25;
    const maxMilliseconds = 3000;
    const minMilliseconds = 1000;
    const test = listOfNumbers[idxOfSuccessTest];
    if (!test) {
      setStrResult("не выполнен ни один тест");
      return;
    }
    const paramX = levelToPercent(test.level);
    let paramY = time / test.difficult;
    if (paramY < 1000) {
      paramY = 100;
    } else {
      paramY =
        100 -
        ((minParamY - maxParamY) / (maxMilliseconds - minMilliseconds)) *
          (paramY - minMilliseconds);
    }

    // TODO узнать конкретную формулу для параметра Z
    const paramZ = 1;

    const partOne = 0.6 * paramX + 0.4 * paramY;

    const partTwo = 0.4 * paramX + 0.3 * paramY + 0.3 * paramZ;

    const total = 0.5 * partOne + 0.5 * partTwo;

    setStrResult(`
    часть первая: 0.6 * ${paramX} + 0.4 * ${paramY} = ${partOne}$
    часть вторая: 0.4 * ${paramX} + 0.3 * ${paramY} + 0.3 * ${paramZ} = ${partTwo}$
    итого: 0.5 * ${partOne} + 0.5 * ${partTwo} = ${total}`);
  };

  const endOfList = (time: number, error?: boolean) => {
    if (error) {
      if (countErrors + 1 > listOfNumbers[currentIdxArray].errors) {
        calculate(
          currentIdxArray - 1,
          resultLastSuccessTest.time,
          totalErrors + 1
        );
        setShowEnd(true);
        return;
      } else {
        setCountErrors((p) => p + 1);
        setTotalErrors((p) => p + 1);
        setShowSteps(true);
        setShowRangeNumbers(false);
        return;
      }
    }

    if (currentIdxArray === listOfNumbers.length - 1) {
      calculate(currentIdxArray, time, totalErrors);
      setShowEnd(true);
      return;
    }

    setResultLastSuccessTest((p) => ({ ...p, time, idxTest: currentIdxArray }));
    setCurrentIdxArray((prev) => prev + 1);
    setShowSteps(true);
    setShowRangeNumbers(false);
    setCountErrors(0);
  };

  const renderTest = () => {
    return (
      <>
        {showSteps && (
          <StepNumbers
            numbers={listOfNumbers[currentIdxArray].numbers}
            time={1000}
            setIsDone={setIsDone}
          />
        )}
        {showRangeNumbers && (
          <RangeNumbers
            endOfList={endOfList}
            numbersArray={listOfNumbers[currentIdxArray].numbers}
            countErrors={listOfNumbers[currentIdxArray].errors}
          />
        )}
      </>
    );
  };

  return (
    <div className={styles.container}>
      {!showEnd && renderTest()}
      {showEnd && (
        <div>
          <div>
            {strResult.split("$").map((el) => (
              <p key={el}>{el}</p>
            ))}
          </div>
          <div>
            <button className={"btn btn-success"} onClick={runAgain}>
              начать с начала
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
