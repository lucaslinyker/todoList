/* eslint-disable */
import { Trash } from '@phosphor-icons/react'

import Clipboard from '/clipboard.svg'

import styles from './Tasks.module.css'

export function Tasks({ tasks }) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.tasks}>
          <p>Tarefas criadas</p>
          <span className={styles.span}>{tasks.length}</span>
        </div>
        <div className={styles.completed}>
          <p>Concluídas</p>
          <span className={styles.span}>
            {tasks.filter(task => task.completed === true).length}
          </span>
        </div>
      </div>

      <ul>
        {tasks.map(task => (
          <li key={task.id} id={task.id}>
            <form>
              {task.completed === true ? (
                <input type="checkbox" defaultChecked />
              ) : (
                <input type="checkbox" />
              )}

              <p>{task.text}</p>

              <button type="button">
                <Trash />
              </button>
            </form>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <div className={styles.empty}>
          <img src={Clipboard} height={56} alt='Clipboard' />
          <p className={styles.p}>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      )}
    </section>
  )
}