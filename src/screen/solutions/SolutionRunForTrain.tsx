import { Circle } from "../../components/figure/Circle";
import { Polygon } from "../../components/figure/Polygon";
import { MouseEvent, useRef, useState } from "react";
import { PosterTrain } from "../../components/PosterTrain";

interface ISolutionRunForTrain {
  moveCircle: (x: number, y: number) => void;
  visiblePolygon: boolean;
  positionPolygon: { x: number; y: number };
  RADIUS: number;
  positionCircle: { x: number; y: number };
}

const circlePositions = [
  { x: 10, y: 20 },
  { x: 50, y: 120 },
  { x: 200, y: 90 },
  { x: 100, y: 120 },
];

const polygonPositions = [
  { x: 80, y: 100 },
  { x: 200, y: 200 },
  { x: 300, y: 300 },
  { x: 250, y: 20 },
];

const SolutionTrain = ({
  RADIUS,
  moveCircle,
  visiblePolygon,
  positionPolygon,
  positionCircle,
}: ISolutionRunForTrain) => {
  const containerRef = useRef<HTMLDivElement>(null);

  function handleClick(e: MouseEvent<SVGCircleElement, globalThis.MouseEvent>) {
    const x = e.clientX - e.currentTarget.getBoundingClientRect().x - RADIUS;
    const y = e.clientY - e.currentTarget.getBoundingClientRect().y - RADIUS;
    console.log("123");
    setTimeout(() => moveCircle(x, y), 500);
  }

  return (
    <div>
      <div className="speed-container position-relative" ref={containerRef}>
        <Circle handleClick={handleClick} position={positionCircle} />
        {visiblePolygon && <Polygon position={positionPolygon} />}
      </div>
    </div>
  );
};

interface ISolutionRun {
  endPreview: () => void;
}

export const SolutionRunForTrain = ({ endPreview }: ISolutionRun) => {
  const RADIUS = 50;
  const [idx, setIdx] = useState(0);
  const [visiblePolygon, setVisiblePolygon] = useState(false);
  const [positionPolygon, setPositionPolygon] = useState(polygonPositions[idx]);
  const [positionCircle, setPositionCircle] = useState(circlePositions[idx]);
  const [showPosterStart, setShowPosterStart] = useState(true);
  const [showPosterEnd, setShowPosterEnd] = useState(false);

  let moveCircle = (x: number, y: number) => {
    console.log("move circle");
    if (idx === polygonPositions.length - 1) {
      setShowPosterEnd(true);
      return;
    }
    setVisiblePolygon(Math.random() <= 0.5);
    setIdx((p) => p + 1);
    setPositionPolygon((prev) => ({ ...prev, ...polygonPositions[idx + 1] }));
    setPositionCircle((prev) => ({ ...prev, ...circlePositions[idx + 1] }));
  };

  const run = () => {
    setShowPosterStart(false);
  };

  const end = () => {
    endPreview();
  };

  return (
    <>
      {showPosterStart && (
        <PosterTrain run={run} title={"Сейчас будут тернировочные занания"} />
      )}
      {showPosterEnd && (
        <PosterTrain
          title={"Тренировка окончена. Теперь будут настоящие задания"}
          run={end}
        />
      )}
      {!showPosterStart && !showPosterEnd && (
        <SolutionTrain
          moveCircle={moveCircle}
          visiblePolygon={visiblePolygon}
          positionPolygon={positionPolygon}
          RADIUS={RADIUS}
          positionCircle={positionCircle}
        />
      )}
    </>
  );
};
