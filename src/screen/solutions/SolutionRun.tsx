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
    countClickCircle: { whitPolygon: 0, single: 0 },
    countClickPolygon: 0,
    countClickDiv: 0,
    countSingleTask: 0,
    countDoubleTask: 0,
    coordinateClick: [],
    timeStart: Date.now(),
    timeEnd: Date.now(),
  });
  const [strResult, setStrResult] = useState("");

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

    setTimeout(moveCircle, 500, { x, y });
  }

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const moveCircle = (coordinate: { x: number; y: number }) => {
    // @ts-ignore
    setResult((prev) => ({
      ...prev,
      count: prev.count + 1,
      coordinateClick: [...prev.coordinateClick, coordinate],
      timeEnd: Date.now(),
    }));
    let isDoubleTask = false;
    setVisiblePolygon(false);
    const x = getRandomInt(RADIUS, containerSize.height - RADIUS * 2);
    const y = getRandomInt(RADIUS, containerSize.width - RADIUS * 2);
    setPositionCircle({ x, y });
    if (Math.random() > 0.5) {
      isDoubleTask = true;
      const res = generatePolygonPosition();
      if (!isInterceptFigure([x, y], res)) {
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

    if (result.count === 24) {
      calculate();
      return;
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

  const increaseClickCircle = () => {
    const countCircleClick = result.countClickCircle;
    visiblePolygon ? countCircleClick.whitPolygon++ : countCircleClick.single++;

    setResult((prev) => ({
      ...prev,
      countClickCircle: { ...countCircleClick },
    }));
  };

  const clickContainer = (e: MouseEvent<HTMLDivElement>) => {
    // @ts-ignore
    const tag = e.target?.tagName as "path" | "circle" | "DIV";

    if (tag === "path") {
      setResult((prev) => ({
        ...prev,
        countClickPolygon: prev.countClickPolygon + 1,
      }));
      moveCircle({ x: 100, y: 100 });
    }
    if (tag === "circle") {
      increaseClickCircle();
    }
    if (tag === "DIV") {
      setResult((prev) => ({
        ...prev,
        countClickPolygon: prev.countClickPolygon + 1,
      }));
      moveCircle({ x: 100, y: 100 });
    }
  };

  const calculateLengthToCenter = (x: number, y: number) => {
    const minProcent = 25;
    const length = Math.pow(Math.abs(x), 2) + Math.pow(Math.abs(y), 2);
    let proc = 100 - length / (RADIUS / 100);

    if (proc < minProcent) {
      proc = minProcent;
    }

    return ((100 / (100 - minProcent)) * (proc - minProcent)) / 100;
  };

  const calculateParamA = () => {
    const arrData = result.coordinateClick.map(({ x, y }) =>
      calculateLengthToCenter(x, y)
    );

    const averageData =
      arrData.reduce((prev, current) => prev + current) / arrData.length;

    return (averageData / result.count) * 100;
  };

  const calculateParamB = () => {
    const maxSeconds = 60;
    const minSeconds = 25;
    let seconds = (result.timeEnd - result.timeStart) / 100;
    if (seconds < minSeconds) {
      seconds = minSeconds;
    }

    if (seconds > maxSeconds) {
      seconds = maxSeconds;
    }

    return Math.ceil((100 / (maxSeconds - minSeconds)) * seconds + 25 - 100);
  };

  const calculate = () => {
    const paramX =
      result.countClickCircle.single /
      ((result.countSingleTask / (result.count / 100)) * result.count);
    const paramY =
      result.countClickCircle.whitPolygon /
      ((result.countDoubleTask / (result.count / 100)) * result.count);
    const paramZ =
      result.countClickPolygon /
      ((result.countDoubleTask / (result.count / 100)) * result.count);

    const paramA = calculateParamA();

    const paramB = calculateParamB();

    const calculateResult = (paramX + paramY + paramA + paramB) / 4 - paramZ;
    setStrResult(
      `(${paramX} + ${paramY} + ${paramA} + ${paramB}) / 4 - ${paramZ} = ${calculateResult}`
    );

    return calculateResult;
  };

  return (
    <>
      {" "}
      {result.count < 25 ? (
        <div
          className="speed-container position-relative"
          ref={containerRef}
          style={{ border: "1px solid red" }}
          onClick={clickContainer}
        >
          {result.count} из {countAsk}
          <Circle
            handleClick={(e) => handleClick(e)}
            position={positionCircle}
          />
          {visiblePolygon && <Polygon position={positionPolygon} />}
        </div>
      ) : (
        <div>
          {JSON.stringify(result)}
          <div>
            {result.count} из {countAsk}
            <div>итого: {strResult}</div>
          </div>
        </div>
      )}
    </>
  );
};
