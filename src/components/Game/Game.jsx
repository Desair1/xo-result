import Field from "../Field/Field";
import Information from "../Information/Information";
import styles from "./Game.module.css";
import { store } from "../../redux/store";
import {
  setFieldAction,
  setCurrentPlayerAction,
  setGameDrawAction,
  setGameEndedAction,
  setWinnerAction,
} from "../../redux/actions";
import { useEffect } from "react";

const Game = () => {
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      console.log("Redux Store updated:", store.getState());
    });
    return () => unsubscribe(); // Отписываемся при размонтировании
  }, []);
  const reset = () => {
    store.dispatch(setWinnerAction(null));
    store.dispatch(setGameEndedAction(false));
    store.dispatch(setGameDrawAction(false));
    store.dispatch(setFieldAction(["", "", "", "", "", "", "", "", ""]));
    store.dispatch(setCurrentPlayerAction("X"));
  };

  return (
    <main className={styles.container}>
      <Information />
      <Field />
      <button onClick={reset}>Начать сначала</button>
    </main>
  );
};

export default Game;
