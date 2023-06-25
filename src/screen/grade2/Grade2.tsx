import { useState } from "react";
import { Instruction } from "../../components/instruction/Instruction";
import { RunGrade2 } from "./RunGrade2";

const instruction = `Наблюдайте за меняющимися фигурами в течение нескольких секунд, пока играет музыка.
Во время вашей очереди игры, остановите движение фигур через такой же промежуток времени.

Нажмите на "НАЧАТЬ", когда будете готовы.`;

const skill = ["Оценка", "Слуховое восприятие"];

const imgName = "identity.jpg";

export const Grade2 = () => {
  const [showInstruction, setShowInstruction] = useState(true);

  const startTest = () => {
    setShowInstruction(false);
  };

  return (
    <>
      {showInstruction ? (
        <Instruction
          imgName={imgName}
          instruction={instruction}
          skill={skill}
          startTest={startTest}
        />
      ) : (
        <RunGrade2 />
      )}
    </>
  );
};
