import styled from "./multipleTask.module.css";
import { MouseEvent, useState } from "react";
import { MultipleItem } from "./MultipleItem";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

const colorList = [
  { color: "зеленый", text: "green", isTheSame: true },
  { color: "черный", text: "black", isTheSame: true },
  { color: "красный", text: "green", isTheSame: false },
  { color: "коричневый", text: "orange", isTheSame: false },
  { color: "голубой", text: "blue", isTheSame: true },
  { color: "желтый", text: "black", isTheSame: false },
  { color: "фиолетовый", text: "gray", isTheSame: false },
  { color: "голубой", text: "blue", isTheSame: true },
  { color: "черный", text: "red", isTheSame: true },
  { color: "желтый", text: "green", isTheSame: false },
  { color: "красный", text: "red", isTheSame: false },
  { color: "желтый", text: "yellow", isTheSame: true },
  { color: "коричневый", text: "black", isTheSame: false },
  { color: "белый", text: "gray", isTheSame: false },
  { color: "красный", text: "red", isTheSame: true },
];

export const MultipleTaskRun = () => {
  const [idx, setIdx] = useState(0);
  const [correct, setCorrect] = useState(true);

  const nextItem = () => {
    if (idx >= colorList.length - 2) {
      return;
    }

    setIdx((p) => p + 1);
  };

  const mouseOverCircle = (e: MouseEvent<HTMLDivElement>) => {
    const node = e.target as HTMLElement;
    const { left, top } = node.getBoundingClientRect();
    const x = e.clientX - left - 25;
    const y = e.clientY - top - 25;
    if (Math.abs(x) > 10 || Math.abs(y) > 10) {
      setCorrect(false);
    } else {
      setCorrect(true);
    }
    console.log(x, y);
  };

  return (
    <div style={{ height: "100%", width: "100%", position: "relative" }}>
      <div onMouseMove={mouseOverCircle} className={styled.circle}>
        {correct ? (
          <CheckCircleIcon sx={{ fontSize: 50, color: "green" }} />
        ) : (
          <ErrorIcon sx={{ fontSize: 50, color: "red" }} />
        )}
      </div>
      <MultipleItem
        color={colorList[idx].color}
        text={colorList[idx].text}
        isTheSame={colorList[idx].isTheSame}
        nextItem={nextItem}
      />
    </div>
  );
};
