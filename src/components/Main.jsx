import { Tasks } from './Tasks'

import { PlusCircle } from '@phosphor-icons/react'

import styles from './Main.module.css'
import formStyles from './Form.module.css'

export function Main() {
  return (
    <main className={styles.main}>
      <form className={formStyles.form}>
        <input
          type='text'
          placeholder='Adicione uma nova tarefa'
          className={formStyles.input}
        />
        <button type='submit' className={formStyles.button}>
          Criar
          <PlusCircle size={16} weight='bold' />
        </button>
      </form>

      <Tasks />
    </main>
  )
}
