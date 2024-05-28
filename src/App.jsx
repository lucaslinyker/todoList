import { Header } from './components/Header'
import { Form } from './components/Form'
import { Tasks } from './components/Tasks'

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Form />
        <Tasks />
      </main>
    </>
  )
}
