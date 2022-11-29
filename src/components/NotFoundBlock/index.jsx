import React from 'react';
import styles from './NotFountBlock.module.scss';

export default function NotFoundBlock() {
  return (
    <h1 className={styles.root}>
      <span>😱</span>
      <div>Ничего не найдено. Сорян !</div>
    </h1>
  );
}
