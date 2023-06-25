import { useState } from "react";
import { SolutionRun } from "./SolutionRun";

const instruction = `Нажимайте на центр кругов так быстро, как только можете.
Нажмите "Далее", когда будете готовы начать.

Нажмите на "НАЧАТЬ", когда будете готовы.`;

const skill = [
  "Визуальное сканирование",
  "Зрительно-моторная координация",
  "Пространственное восприятие",
  "Скорость обработки информации",
  "Фокусированное внимание",
];

const imgName = "solutions.jpg";

export const Solutions = () => {
  const [showInstruction, setShowInstruction] = useState(true);
  const [showPreview, setShowPreview] = useState(false);
  const [showTest, setShowTest] = useState(false);

  const startPreview = () => {
    setShowInstruction(false);
    setShowPreview(true);
  };

  const endPreview = () => {
    setShowPreview(false);
    setShowTest(true);
  };

  return (
    <div className="speed-screen">
      {/*{showInstruction && (*/}
      {/*  <Instruction*/}
      {/*    imgName={imgName}*/}
      {/*    startTest={startPreview}*/}
      {/*    instruction={instruction}*/}
      {/*    skill={skill}*/}
      {/*  />*/}
      {/*)}*/}
      {/*{showPreview && <SolutionRunForTrain endPreview={endPreview} />}*/}
      {/*{showTest && <SolutionRun />}*/}
      <SolutionRun />
    </div>
  );
};
