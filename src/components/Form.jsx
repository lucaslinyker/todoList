import { PlusCircle } from '@phosphor-icons/react'

export function Form() {
  return (
    <form>
      <input type="text" placeholder='Adicione uma nova tarefa' />
      <button type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  )
}
