import { useState } from 'react'

import { Tasks } from './Tasks'

import { PlusCircle } from '@phosphor-icons/react'

import styles from './Main.module.css'
import formStyles from './Form.module.css'

export function Main() {
  const [inputText, setInputText] = useState('')

  return (
    <main className={styles.main}>
      <form className={formStyles.form}>
        <input
          type='text'
          placeholder='Adicione uma nova tarefa'
          className={formStyles.input}
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          autoFocus
          required
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
