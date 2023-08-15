import React from "react";
import styles from './Counter.module.scss'

export const Counter = () => {
  const [count, setCounter] = React.useState(0);

  const increment = () => {
    setCounter(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}  className={styles.btn}>inc</button>
    </div>
  );
};
