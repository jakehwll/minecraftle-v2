import { useEffect, useState } from 'react';
import classes from './Loading.module.css';

export const Loading = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((currentDots) =>
        currentDots.length < 3 ? currentDots + "." : ""
      );
    }, 500); // Change dot every 500ms

    return () => clearInterval(interval);
  }, []);
  
  return <div className={classes.root}>Loading{dots}</div>;
}