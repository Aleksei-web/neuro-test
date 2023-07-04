import { useState } from "react";
import { Instruction } from "./Instruction";
import { DisplayNumbers } from "./DisplayNumbers";

type Direction = "row" | "row-reverse";

const findBigBall = [
  { bigBall: 2, smallBall: 4, success: 2, trigger: undefined },
  { bigBall: 1, smallBall: 5, success: 1, trigger: "пять" },
  { bigBall: 7, smallBall: 3, success: 7, trigger: "маленький" },
  { bigBall: 9, smallBall: 7, success: 9, trigger: undefined },
  { bigBall: 3, smallBall: 4, success: 3, trigger: undefined },
  { bigBall: 6, smallBall: 7, success: 6, trigger: "белый" },
  { bigBall: 6, smallBall: 8, success: 6, trigger: undefined },
  { bigBall: 2, smallBall: 9, success: 2, trigger: "девять" },
  { bigBall: 8, smallBall: 7, success: 8, trigger: undefined },
  { bigBall: 1, smallBall: 2, success: 1, trigger: "два" },
  { bigBall: 4, smallBall: 7, success: 4, trigger: "номер" },
  { bigBall: 5, smallBall: 4, success: 5, trigger: undefined },
];

const findBigNumber = [
  { bigBall: 2, smallBall: 4, success: 4, trigger: "два" },
  { bigBall: 6, smallBall: 1, success: 6, trigger: undefined },
  { bigBall: 8, smallBall: 7, success: 8, trigger: "большой" },
  { bigBall: 1, smallBall: 6, success: 6, trigger: "один" },
  { bigBall: 2, smallBall: 0, success: 2, trigger: undefined },
  { bigBall: 6, smallBall: 7, success: 7, trigger: undefined },
  { bigBall: 4, smallBall: 2, success: 4, trigger: undefined },
  { bigBall: 2, smallBall: 5, success: 5, trigger: "пять" },
  { bigBall: 3, smallBall: 2, success: 3, trigger: "меньше" },
  { bigBall: 1, smallBall: 4, success: 4, trigger: undefined },
  { bigBall: 2, smallBall: 8, success: 8, trigger: undefined },
  { bigBall: 2, smallBall: 0, success: 2, trigger: "два" },
];

const instructionTextFindBigBall = `
Нажмите на САМУЮ БОЛЬШУЮ ФИГУРУ так быстро как 
только можете для того, чтобы выполнить задание 
менее чем за одну минуту!`;

const instructionTextFindBigNumber = `
Нажмите на САМУЮ БОЛЬШУЮ ЦИФРУ так быстро как 
только можете для того, чтобы выполнить задание 
менее чем за одну минуту!
`;

export const NumbersRun = () => {
  const [showFindBall, setShowFindBall] = useState(false);
  const [showPrevBigBall, setShowPrevBigBall] = useState(true);
  const [showPrevBigNumber, setShowPrevBigNumber] = useState(false);
  const [part, setPart] = useState(1);
  const [idx, setIdx] = useState(0);
  const [currentItem, setCurrentItem] = useState(findBigBall[0]);
  const [resultStr, setResultStr] = useState<null | string>(null);
  const [result, setResult] = useState([
    {
      trigger: { success: 0, error: 0 },
      notTrigger: { success: 0, error: 0 },
      timeStart: Date.now(),
      timeEnd: Date.now(),
      count: 0,
    },
    {
      trigger: { success: 0, error: 0 },
      notTrigger: { success: 0, error: 0 },
      timeStart: Date.now(),
      timeEnd: Date.now(),
      count: 0,
    },
  ]);

  const runAgain = () => {
    setShowFindBall(false);
    setShowPrevBigBall(true);
    setShowPrevBigNumber(false);
    setPart(1);
    setIdx(0);
    setCurrentItem(findBigBall[0]);
    setResultStr("");
    setResult([
      {
        trigger: { success: 0, error: 0 },
        notTrigger: { success: 0, error: 0 },
        timeStart: Date.now(),
        timeEnd: Date.now(),
        count: 0,
      },
      {
        trigger: { success: 0, error: 0 },
        notTrigger: { success: 0, error: 0 },
        timeStart: Date.now(),
        timeEnd: Date.now(),
        count: 0,
      },
    ]);
  };

  const calculate = () => {
    const sumArr: number[] = [];
    let strRes = `тест окончен. результаты: $`;
    console.log("--------", result);

    result.forEach((el, i) => {
      const paramX = (100 * el.notTrigger.success) / (0.5 * el.count);

      const paramY = (100 * el.trigger.success) / (0.5 * el.count);
      let time = el.timeEnd - el.timeStart;
      console.log({ time });
      if (time < 12000) {
        time = 12000;
      }
      if (time > 60000) {
        time = 60000;
      }

      const paramZ = 100 - (100 / (60000 - 12000)) * (time - 12000);

      const sum = 0.3 * paramX + 0.4 * paramY + 0.3 * paramZ;

      const str = `0.3 * ${paramX} + 0.4 * ${paramY} + 0.3 * ${paramZ} = ${sum}`;
      strRes += `расчет по части ${i + 1}: ${str} $`;

      sumArr.push(sum);
    });

    const total = 0.5 * sumArr[0] + 0.5 * sumArr[1];
    const strTotal = `0.5 * ${sumArr[0]} + 0.5 * ${sumArr[1]} = ${total}`;
    strRes += `итого: ${strTotal}`;
    setResultStr(strRes);
  };

  const closeBannerShowFindBigBall = () => {
    setResult((el) =>
      el.map((r, i) => (i === 0 ? { ...r, timeStart: Date.now() } : r))
    );
    setShowPrevBigBall(false);
    setShowFindBall(true);
  };

  // закрываем банер. начало второй части задания
  const closeBannerShowFindBigNumber = () => {
    setResult((p) =>
      p.map((el, i) => (i === 1 ? { ...el, timeStart: Date.now() } : { ...el }))
    );
    setShowPrevBigNumber(false);
    setShowFindBall(true);
    setCurrentItem(findBigNumber[0]);
    setPart(2);
  };

  // конец первой части задания
  const endBigBall = () => {
    setResult((p) =>
      p.map((el, i) => (i === 0 ? { ...el, timeEnd: Date.now() } : { ...el }))
    );
    setShowFindBall(false);
    setShowPrevBigNumber(true);
    setIdx(0);
  };

  const endTest = () => {
    console.log("end test");
    setResult((p) =>
      p.map((el, i) => (i === 1 ? { ...el, timeEnd: Date.now() } : { ...el }))
    );
    setShowFindBall(false);
    calculate();
  };

  const nextItem = () => {
    setIdx((p) => p + 1);

    if (part === 1) {
      if (idx + 1 >= findBigBall.length) {
        endBigBall();
        return;
      }
      const item = findBigBall[idx + 1];
      setCurrentItem((val) => ({ ...item }));
    } else {
      if (idx + 1 >= findBigNumber.length) {
        endTest();
        return;
      }
      const item = findBigNumber[idx + 1];
      setCurrentItem((val) => ({ ...item }));
    }
  };

  const handleClick = (isCorrectAnswer: boolean) => {
    setResult((res) => {
      return res.map((el, i) => {
        if (i + 1 !== part) {
          return el;
        } else {
          if (currentItem.trigger) {
            isCorrectAnswer ? el.trigger.success++ : el.trigger.error++;
          } else {
            isCorrectAnswer ? el.notTrigger.success++ : el.notTrigger.error++;
          }

          return {
            ...el,
            timeEnd: Date.now(),
            count: el.count + 1,
          };
        }
      });
    });
    nextItem();
  };

  return (
    <>
      {showPrevBigBall && (
        <Instruction
          text={instructionTextFindBigBall}
          close={closeBannerShowFindBigBall}
        />
      )}

      {showPrevBigNumber && (
        <Instruction
          text={instructionTextFindBigNumber}
          close={closeBannerShowFindBigNumber}
        />
      )}

      {showFindBall && (
        <DisplayNumbers
          handleClick={handleClick}
          bigBall={currentItem.bigBall}
          smallBall={currentItem.smallBall}
          success={currentItem.success}
          trigger={currentItem.trigger}
        />
      )}

      {resultStr && (
        <div>
          {resultStr.split("$").map((el) => (
            <div
              key={el}
              style={{
                padding: "40px",
                fontSize: "24px",
                textAlign: "center",
              }}
            >
              {el}
            </div>
          ))}
          <div style={{ textAlign: "center" }}>
            <button className={"btn btn-primary"} onClick={runAgain}>
              повторить
            </button>
          </div>
        </div>
      )}
    </>
  );
};
