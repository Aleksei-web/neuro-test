import React, { useState } from "react";
import { Speed } from "../screen/Speed";
import { Solutions } from "../screen/solutions/Solutions";
import { Numbers } from "../screen/numbers/Numbers";
import { ConsistentNumbers } from "../screen/consitens-numbers/ConsistentNumbers";
import { Synchronic } from "../screen/synchronic/Synchronic";
import { Equivalence } from "../screen/equivalence/Equivalence";
import { CoordinationBall } from "../screen/coordination-ball/CoordinationBall";
import { ConsistentBalls } from "../screen/consistent-balls/ConsistentBalls";
import { Recognize } from "../screen/recognize/Recognize";
import { Decoding } from "../screen/decoding/Decoding";
import { Identity } from "../screen/identity/Identity";
import { Programming } from "../screen/programming/Programming";
import { Grade } from "../screen/grade/Grade";

import "../App.css";
import { Grade2 } from "../screen/grade2/Grade2";

const testList = [
  { name: "скорость", type: "Speed", idx: 0 },
  { name: "принятие решений", type: "Solutions", idx: 1 },
  { name: "обработка информации", type: "Numbers", idx: 2 },
  { name: "последовательный", type: "ConsistentNumbers", idx: 3 },
  { name: "синхронизация", type: "Synchronic", idx: 4 },
  { name: "эквивалентность", type: "Equivalence", idx: 5 },
  { name: "координация", type: "CoordinationBall", idx: 6 },
  { name: "концентарция", type: "ConsistentBalls", idx: 7 },
  { name: "распознование", type: "Recognize", idx: 8 },
  { name: "декодирование", type: "Decoding", idx: 9 },
  { name: "идентефикация", type: "Identity", idx: 10 },
  { name: "программирование", type: "Programming", idx: 11 },
  { name: "оценка", type: "Grade", idx: 12 },
  { name: "оценка2", type: "Grade2", idx: 13 },
];

export const AllTestPage = () => {
  console.log(666);
  const [test, setTest] = useState(0);

  const handlerSelect = (e: any) => {
    console.log(e, e.target.value);
    setTest(parseInt(e.target.value));
  };

  const renderTest = () => {
    switch (test) {
      case 0:
        return <Speed />;
      case 1:
        return <Solutions />;
      case 2:
        return <Numbers />;
      case 3:
        return <ConsistentNumbers />;
      case 4:
        return <Synchronic />;
      case 5:
        return <Equivalence />;
      case 6:
        return <CoordinationBall />;
      case 7:
        return <ConsistentBalls />;
      case 8:
        return <Recognize />;
      case 9:
        return <Decoding />;
      case 10:
        return <Identity />;
      case 11:
        return <Programming />;
      case 12:
        return <Grade />;
      case 13:
        return <Grade2 />;
    }
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div style={{ width: "200px", marginTop: "40px" }}>
          <h3>Выберите тест</h3>
          <select
            className="form-select"
            aria-label="выберите тест"
            onChange={handlerSelect}
          >
            {testList.map((el) => (
              <option key={el.name} value={el.idx}>
                {el.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="screen-container">{renderTest()}</div>
    </div>
  );
};
