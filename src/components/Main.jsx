import { useState } from 'react'

import { Tasks } from './Tasks'

import { PlusCircle } from '@phosphor-icons/react'

import styles from './Main.module.css'
import formStyles from './Form.module.css'

export function Main() {
  const [inputText, setInputText] = useState('')
  const [tasks, setTasks] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    setInputText('')
    setTasks([...tasks, { id: tasks.length + 1, text: inputText, completed: false }])
  }

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit} className={formStyles.form}>
        <input
          type='text'
          placeholder='Adicione uma nova tarefa'
          className={formStyles.input}
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          autoFocus
          required
          data-testid='input'
        />
        <button type='submit' className={formStyles.button} data-testid='create'>
          Criar
          <PlusCircle size={16} weight='bold' />
        </button>
      </form>

      <Tasks tasks={tasks} setTasks={setTasks} />
    </main>
  )
}
