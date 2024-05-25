import rocketLogo from '/rocket.svg'

export function Header() {
  return (
    <header>
      <img src={rocketLogo} alt="A logo of a blue rocket" />
      <h1>
        to
        <span>do</span>
      </h1>
    </header>
  )
}