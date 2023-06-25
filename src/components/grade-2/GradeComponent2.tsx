import { memo, useEffect, useRef, useState } from "react";
import { CanvasGrade2 } from "./CanvasGrade2";
import rington1 from "./1.mp3";
import rington2 from "./2.mp3";
import rington3 from "./3.mp3";
import rington4 from "./4.mp3";

const listRington = [
  { mp3: rington1, showButton: false, time: 3, playFigure: true },
  { mp3: rington1, showButton: true, playFigure: true },
  { mp3: rington2, showButton: false, time: 2, playFigure: true },
  { mp3: rington2, showButton: true, playFigure: true },
  { mp3: rington3, showButton: false, time: 3, playFigure: true },
  { mp3: rington3, showButton: true, playFigure: true },
  { mp3: rington4, showButton: false, time: 3, playFigure: true },
  { mp3: rington4, showButton: true, playFigure: true },
  { mp3: rington1, showButton: false, time: 3, playFigure: false },
  { mp3: rington1, showButton: true, playFigure: false },
  { mp3: rington2, showButton: false, time: 4, playFigure: false },
  { mp3: rington2, showButton: true, playFigure: false },
  { mp3: rington3, showButton: false, time: 3, playFigure: false },
  { mp3: rington3, showButton: true, playFigure: false },
  { mp3: rington4, showButton: false, time: 3, playFigure: false },
  { mp3: rington4, showButton: true, playFigure: false },
];

interface IGradeItem {
  stop: () => void;
  mp3: string;
  showButton: boolean;
  playFigure: boolean;
  time?: number;
}

const GradeItem = memo(
  ({ stop, time, showButton, playFigure, mp3 }: IGradeItem) => {
    const canvasRef = useRef(null);
    const [canvas, setCanvas] = useState<CanvasGrade2 | null>(null);

    const audio = new Audio(mp3);

    useEffect(() => {
      if (!canvasRef.current) return;

      const canvas = new CanvasGrade2(canvasRef.current);
      setCanvas(canvas);

      audio.play().then(() => {
        playFigure && canvas?.play();
        if (time) {
          setTimeout(() => {
            canvas.stop();
            audio.pause();
            stop();
          }, time * 1000);
        }
      });

      return () => {
        canvas?.stop();
        audio.pause();
      };
    }, [mp3, playFigure, showButton, time]);

    const stopItem = () => {
      audio.pause();
      canvas?.stop();
      stop();
    };

    return (
      <>
        <canvas ref={canvasRef} width={1000} height={600} />
        {showButton && (
          <button
            className="btn btn-primary"
            style={{
              zIndex: 100,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(50%, 50%)",
            }}
            onClick={stopItem}
          >
            стоп
          </button>
        )}
      </>
    );
  }
);

export const GradeComponent2 = () => {
  const [idx, setIdx] = useState(0);
  const [item, setItem] = useState(listRington[idx]);

  const stop = () => {
    setItem((item) => ({ ...listRington[idx + 1] }));
    setIdx((p) => p + 1);
    console.log({ idx });
  };

  return (
    <>
      <GradeItem
        showButton={item.showButton}
        mp3={item.mp3}
        playFigure={item.playFigure}
        time={item.time}
        stop={stop}
      />
    </>
  );
};
