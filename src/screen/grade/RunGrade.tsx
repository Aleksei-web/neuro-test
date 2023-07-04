import { Figure, GradeComponent } from "../../components/grade/GradeComponent";
import { useState } from "react";
import error from "../../components/range-numbers/error.mp3";
import success from "../../components/range-numbers/success.mp3";

const arrayItems = [
  [
    {
      x: 100,
      y: 300,
      directions: "right",
      color: "green",
      speed: 0.4,
      maxLeft: 50,
      maxRight: 950,
      maxBottom: 550,
      maxTop: 50,
    },
    {
      x: 900,
      y: 300,
      directions: "left",
      color: "red",
      speed: 0.6,
      maxLeft: 50,
      maxRight: 950,
      maxBottom: 550,
      maxTop: 50,
    },
  ],
  [
    {
      x: 100,
      y: 300,
      directions: "right",
      color: "green",
      speed: 0.4,
      maxLeft: 50,
      maxRight: 950,
      maxBottom: 550,
      maxTop: 50,
    },
    {
      x: 900,
      y: 300,
      directions: "top",
      color: "red",
      speed: 0.7,
      maxLeft: 50,
      maxRight: 950,
      maxBottom: 550,
      maxTop: 50,
    },
  ],
  [
    {
      x: 100,
      y: 300,
      directions: "right",
      color: "green",
      speed: 0.4,
      maxLeft: 50,
      maxRight: 950,
      maxBottom: 550,
      maxTop: 50,
    },
    {
      x: 90,
      y: 250,
      directions: "bottomTop",
      color: "red",
      speed: 0.6,
      maxLeft: 50,
      maxRight: 950,
      maxBottom: 550,
      maxTop: 50,
    },
    {
      x: 330,
      y: 500,
      directions: "bottomLeft",
      color: "orange",
      speed: 0.4,
      maxLeft: 50,
      maxRight: 950,
      maxBottom: 550,
      maxTop: 50,
    },
  ],
  [
    {
      x: 100,
      y: 300,
      directions: "right",
      color: "green",
      speed: 0.8,
      maxLeft: 50,
      maxRight: 950,
      maxBottom: 550,
      maxTop: 50,
    },
    {
      x: 900,
      y: 300,
      directions: "topLeft",
      color: "red",
      speed: 0.5,
      maxLeft: 50,
      maxRight: 950,
      maxBottom: 550,
      maxTop: 50,
    },
    {
      x: 900,
      y: 60,
      directions: "bottomLeft",
      color: "orange",
      speed: 0.5,
      maxLeft: 50,
      maxRight: 950,
      maxBottom: 550,
      maxTop: 50,
    },
  ],
  [
    {
      x: 150,
      y: 420,
      directions: "right",
      color: "green",
      speed: 0.8,
      maxLeft: 50,
      maxRight: 950,
      maxBottom: 550,
      maxTop: 50,
    },
    {
      x: 90,
      y: 200,
      directions: "left",
      color: "red",
      speed: 0.5,
      maxLeft: 50,
      maxRight: 950,
      maxBottom: 550,
      maxTop: 50,
    },
    {
      x: 600,
      y: 60,
      directions: "bottomLeft",
      color: "orange",
      speed: 0.5,
      maxLeft: 50,
      maxRight: 950,
      maxBottom: 550,
      maxTop: 50,
    },
  ],
  [
    {
      x: 150,
      y: 420,
      directions: "right",
      color: "green",
      speed: 0.8,
      maxLeft: 50,
      maxRight: 950,
      maxBottom: 550,
      maxTop: 50,
    },
    {
      x: 90,
      y: 200,
      directions: "left",
      color: "red",
      speed: 0.5,
      maxLeft: 50,
      maxRight: 950,
      maxBottom: 550,
      maxTop: 50,
    },
    {
      x: 400,
      y: 80,
      directions: "bottomLeft",
      color: "orange",
      speed: 0.5,
      maxLeft: 50,
      maxRight: 950,
      maxBottom: 550,
      maxTop: 50,
    },
    {
      x: 600,
      y: 60,
      directions: "bottomTop",
      color: "pink",
      speed: 0.5,
      maxLeft: 50,
      maxRight: 950,
      maxBottom: 550,
      maxTop: 50,
    },
  ],
  [
    {
      x: 250,
      y: 520,
      directions: "topRight",
      color: "green",
      speed: 0.8,
      maxLeft: 50,
      maxRight: 950,
      maxBottom: 550,
      maxTop: 50,
    },
    {
      x: 180,
      y: 250,
      directions: "right",
      color: "red",
      speed: 0.5,
      maxLeft: 50,
      maxRight: 950,
      maxBottom: 550,
      maxTop: 50,
    },
    {
      x: 100,
      y: 160,
      directions: "bottomLeft",
      color: "orange",
      speed: 0.5,
      maxLeft: 50,
      maxRight: 950,
      maxBottom: 550,
      maxTop: 50,
    },
    {
      x: 300,
      y: 260,
      directions: "bottomLeft",
      color: "pink",
      speed: 0.5,
      maxLeft: 50,
      maxRight: 950,
      maxBottom: 550,
      maxTop: 50,
    },
  ],
  [
    {
      x: 150,
      y: 420,
      directions: "right",
      color: "green",
      speed: 0.8,
      maxLeft: 50,
      maxRight: 950,
      maxBottom: 550,
      maxTop: 50,
    },
    {
      x: 90,
      y: 200,
      directions: "left",
      color: "red",
      speed: 0.5,
      maxLeft: 50,
      maxRight: 950,
      maxBottom: 550,
      maxTop: 50,
    },
    {
      x: 600,
      y: 60,
      directions: "bottomLeft",
      color: "orange",
      speed: 0.5,
      maxLeft: 50,
      maxRight: 950,
      maxBottom: 550,
      maxTop: 50,
    },
    {
      x: 320,
      y: 260,
      directions: "bottomLeft",
      color: "pink",
      speed: 0.5,
      maxLeft: 50,
      maxRight: 950,
      maxBottom: 550,
      maxTop: 50,
    },
  ],
  [
    {
      x: 150,
      y: 420,
      directions: "right",
      color: "green",
      speed: 0.8,
      maxLeft: 50,
      maxRight: 950,
      maxBottom: 550,
      maxTop: 50,
    },
    {
      x: 90,
      y: 200,
      directions: "left",
      color: "red",
      speed: 0.5,
      maxLeft: 50,
      maxRight: 950,
      maxBottom: 550,
      maxTop: 50,
    },
    {
      x: 600,
      y: 60,
      directions: "bottomLeft",
      color: "orange",
      speed: 0.5,
      maxLeft: 50,
      maxRight: 950,
      maxBottom: 550,
      maxTop: 50,
    },
    {
      x: 320,
      y: 420,
      directions: "bottomLeft",
      color: "pink",
      speed: 0.5,
      maxLeft: 50,
      maxRight: 950,
      maxBottom: 550,
      maxTop: 50,
    },
  ],
];

export const RunGrade = () => {
  // @ts-ignore
  const [items, setItems] = useState<Figure[]>(arrayItems[0]);
  const [currentIdx, setCurrentIdx] = useState(0);

  const handlerClick = (speed: number) => {
    let maxNumber = 0;
    items.forEach((i) => {
      maxNumber = Math.max(maxNumber, i.speed);
    });

    const playError = () => {
      new Audio(error).play();
      setTimeout(nextItem, 500);
    };

    const playSuccess = () => {
      new Audio(success).play();
      setTimeout(nextItem, 500);
    };

    const nextItem = () => {
      if (arrayItems[currentIdx + 1]) {
        // @ts-ignore
        setItems([...arrayItems[currentIdx + 1]]);
        setCurrentIdx((prev) => prev + 1);
      }
    };

    function successHandler() {
      playSuccess();
    }

    function errorHandler() {
      playError();
    }

    if (maxNumber === speed) {
      successHandler();
    } else {
      errorHandler();
    }
  };

  return (
    <>
      <GradeComponent
        handlerItemClic={handlerClick}
        items={items}
        setItems={setItems}
      />
    </>
  );
};
