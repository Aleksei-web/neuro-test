import { useState } from "react";
import { Instruction } from "../../components/instruction/Instruction";
import { MultipleTaskRun } from "./MultipleTaskRun";

const instruction = `Сейчас вам нужно будет выполнить два задания одновременно.
Удерживайте курсор на шаре и одновременно нажимайте на клавишу пробел ТОЛЬКО в том случае, если цвет слова совпадает с цветом показанных букв.

Нажмите на "НАЧАТЬ", когда будете готовы.`;

const skill = [
  "Время реакции",
  "Ингибиция",
  "Зрительно-моторная координация",
  "Зрительное восприятие",
  "Мониторинг",
  "Когнитивная гибкость",
  "Скорость обработки информации",
  "Распределённое внимание",
];

const imgName = "numbers.jpg";

export const MultipleTask = () => {
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
        <MultipleTaskRun />
      )}
    </>
  );
};
