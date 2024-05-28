import Clipboard from '/clipboard.svg'

export function Tasks() {
  return (
    <section>
      <div>
        <div>
          <p>Tarefas criadas</p>
          <span>0</span>
        </div>
        <div>
          <p>Concluídas</p>
          <span>0</span>
        </div>
      </div>
      <div>
        <img src={Clipboard} height={56} alt='Clipboard' />
        <p>
          <span>Você ainda não tem tarefas cadastradas</span><br />
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </section>
  )
}