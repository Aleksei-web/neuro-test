import { MouseEvent, useEffect, useRef, useState } from "react";
import { Circle } from "../../components/figure/Circle";
import { Polygon } from "../../components/figure/Polygon";

export const SolutionRun = () => {
  const RADIUS = 50;
  const countAsk = 25;
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [positionCircle, setPositionCircle] = useState({ x: 0, y: 0 });
  const [positionPolygon, setPositionPolygon] = useState({ x: 0, y: 0 });
  const [visiblePolygon, setVisiblePolygon] = useState(false);
  const [result, setResult] = useState({
    count: 0,
    countClickCircle: 0,
    countClickPolygon: 0,
    countClickDiv: 0,
    countSingleTask: 0,
    countDoubleTask: 0,
  });

  useEffect(() => {
    if (containerRef.current) {
      setContainerSize({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }
  }, []);

  function handleClick(e: MouseEvent<SVGCircleElement>) {
    e.preventDefault();
    const x = e.clientX - e.currentTarget.getBoundingClientRect().x - RADIUS;
    const y = e.clientY - e.currentTarget.getBoundingClientRect().y - RADIUS;

    setTimeout(moveCircle, 500);
  }

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const moveCircle = () => {
    let isDoubleTask = false;
    setVisiblePolygon(false);
    const x = getRandomInt(RADIUS, containerSize.height - RADIUS * 2);
    const y = getRandomInt(RADIUS, containerSize.width - RADIUS * 2);
    setPositionCircle({ x, y });
    if (Math.random() > 0.5) {
      isDoubleTask = true;
      const res = generatePolygonPosition();
      if (!isInterceptFigure([x, y], res)) {
        console.log("isIntercept ");
        setVisiblePolygon(true);
        movePolygon(...res);
      }
    }
    if (isDoubleTask) {
      setResult((prev) => ({
        ...prev,
        countDoubleTask: prev.countDoubleTask + 1,
      }));
    } else {
      setResult((prev) => ({
        ...prev,
        countSingleTask: prev.countSingleTask + 1,
      }));
    }
  };

  const generatePolygonPosition = (): [number, number] => {
    const x = getRandomInt(RADIUS, containerSize.height - RADIUS * 2);
    const y = getRandomInt(RADIUS, containerSize.width - RADIUS * 2);

    return [x, y];
  };

  const isInterceptFigure = (
    coordA: [number, number],
    coordB: [number, number]
  ) => {
    const [x1, y1] = coordA;
    const [x2, y2] = coordB;
    const diffX = Math.max(x1, x2) - Math.min(x1, x2);
    const diffY = Math.max(y1, y2) - Math.min(y1, y2);

    return diffX < 100 && diffY < 100;
  };

  const movePolygon = (x: number, y: number) => {
    setPositionPolygon({ x, y });
  };

  const clickContainer = (e: MouseEvent<HTMLDivElement>) => {
    // @ts-ignore
    const tag = e.target?.tagName as "path" | "circle" | "DIV";

    if (tag === "path") {
      setResult((prev) => ({
        ...prev,
        count: prev.count + 1,
        countClickPolygon: prev.countClickPolygon + 1,
      }));
      moveCircle();
    }
    if (tag === "circle") {
      setResult((prev) => ({
        ...prev,
        count: prev.count + 1,
        countClickCircle: prev.countClickCircle + 1,
      }));
    }
    if (tag === "DIV") {
      setResult((prev) => ({
        ...prev,
        count: prev.count + 1,
        countClickPolygon: prev.countClickPolygon + 1,
      }));
      moveCircle();
    }
  };

  return (
    <>
      {" "}
      <div
        className="speed-container position-relative"
        ref={containerRef}
        style={{ border: "1px solid red" }}
        onClick={clickContainer}
      >
        <div>
          {result.count} из {countAsk}
        </div>
        <Circle handleClick={(e) => handleClick(e)} position={positionCircle} />
        {visiblePolygon && <Polygon position={positionPolygon} />}
      </div>
    </>
  );
};
