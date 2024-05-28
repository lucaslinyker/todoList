import { PlusCircle } from '@phosphor-icons/react'

import styles from './Form.module.css'

export function Form() {
  return (
    <form className={styles.form}>
      <input type="text" placeholder='Adicione uma nova tarefa' className={styles.input} />
      <button type="submit" className={styles.button}>
        Criar
        <PlusCircle size={16} weight='bold' />
      </button>
    </form>
  )
}
