import styles from "./numbers.module.css";

interface Instruction {
  text: string;
  close: () => void;
}

export const Instruction = ({ text, close }: Instruction) => {
  return (
    <div className={styles.instructionContainer}>
      <div>{text}</div>
      <div>
        <button className={"btn btn-primary"} onClick={close}>
          дале
        </button>
      </div>
    </div>
  );
};
