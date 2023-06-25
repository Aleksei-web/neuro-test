import { useEffect } from "react";

export const PosterTrain = ({
  run,
  title,
}: {
  run: () => void;
  title: string;
}) => {
  useEffect(() => {
    setTimeout(run, 1000);
  });

  return (
    <div>
      <h3 style={{ color: "green", textAlign: "center", marginTop: "40px" }}>
        {title}
      </h3>
    </div>
  );
};
