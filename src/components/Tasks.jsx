import Clipboard from '/clipboard.svg'

import styles from './Tasks.module.css'

export function Tasks() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.tasks}>
          <p>Tarefas criadas</p>
          <span className={styles.span}>0</span>
        </div>
        <div className={styles.completed}>
          <p>Concluídas</p>
          <span className={styles.span}>0</span>
        </div>
      </div>
      <div className={styles.empty}>
        <img src={Clipboard} height={56} alt='Clipboard' />
        <p className={styles.p}>
          <strong>Você ainda não tem tarefas cadastradas</strong><br />
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </section>
  )
}