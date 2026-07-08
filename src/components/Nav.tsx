import ThemeToggle from './ThemeToggle'

export default function Nav() {
  return (
    <nav>
      <div className="nav-logo">CW</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#impact">Impact</a></li>
        <li><a href="#what-i-do">What I Do</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#career">Career</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <ThemeToggle />
    </nav>
  )
}
