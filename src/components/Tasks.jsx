/* eslint-disable */
import { CheckCircle, Circle, Trash } from '@phosphor-icons/react'

import Clipboard from '/clipboard.svg'

import styles from './Tasks.module.css'

export function Tasks({ tasks, setTasks }) {
  function handleCompleteTask(e) {
    const taskId = e.target.closest('li').id
    const task = tasks.find(task => task.id === +taskId)

    if (task.completed === false) {
      setTasks(tasks.map(task => task.id === +taskId ? { ...task, completed: true } : task))
    } else {
      setTasks(tasks.map(task => task.id === +taskId ? { ...task, completed: false } : task))
    }
  }

  function handleDeleteTask(e) {
    const taskId = e.target.closest('li').id
    setTasks(tasks.filter(task => task.id !== +taskId))
  }

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

      <ul className={styles.tasksList}>
        {tasks.map(task => {
          const classBorderTask = `${styles.taskItem} ${!task.completed && styles.borderTaskItem}`

          const classIconCheckbox = `
            ${styles.iconCheckbox}
            ${task.completed ? styles.iconCheckboxChecked : styles.iconCheckboxUnchecked}
          `

          const classParagraphTask = `${styles.content} ${task.completed && styles.lineTroughParagraph}`

          return (
            <li key={task.id} id={task.id}>
              <form className={classBorderTask}>
                <button type="button" onClick={handleCompleteTask} className={styles.btnComplete}>
                  {task.completed ?
                    <CheckCircle size={24} weight="fill" className={classIconCheckbox} /> :
                    <Circle size={24} className={classIconCheckbox} />
                  }
                </button>

                <p className={classParagraphTask}>{task.text}</p>

                <button type="button" onClick={handleDeleteTask} className={styles.btnDelete}>
                  <Trash size={20} />
                </button>
              </form>
            </li>
          )})}
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