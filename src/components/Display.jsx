import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <input
      className={`${styles.display} bg-cyan-500`}
      type="text"
      value={displayValue}
      readOnly
    />
  );
};

export default Display;
