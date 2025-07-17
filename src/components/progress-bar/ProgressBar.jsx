import { useProgress } from "./use-progress-bar";

export const ProgressBar = () => {
  const progress = useProgress();

  return (
    <div
      style={{
        width: progress,
        position: "fixed",
        top: 0,
        left: 0,
        height: "7px",
        backgroundColor: "rgba(255, 0, 0, 1)",
      }}
    />
  );
};