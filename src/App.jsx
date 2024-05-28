import { Header } from './components/Header'
import { Form } from './components/Form'

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Form />
      </main>
    </>
  )
}
