import React from 'react'
import styles from './Game.module.sass'
import logo from './guy.png'

const Game = () => (
  <div className={styles.game}>
    <header className={styles.gameHeader}>
      <img src={logo} className={styles.gameLogo} alt="logo" />
      <p>
        {"Игру ещё предстоит спроектировать и написать!"}
      </p>
      <a
        className={styles.gameLink}
        href="/"
      >
        {"На главную"}
      </a>
      <a
        className={styles.gameLink}
        href="/fame"
      >
        {"Посмотреть рекорды"}
      </a>
    </header>
  </div>
)

export default Game
