import './Mainnav.css'


const Mainnav = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <p>React Movies</p>
      </div>
      <div className="hamburger" id="hamburger-icon">
        <i className="fa-solid fa-bars"></i>
      </div>
      <ul className="nav-links" id="nav-links">
        <li className="nav-link"><a href="/">Home</a></li>
        <li className="nav-link"><a href="#about">Movies</a></li>
        <li className="nav-link"><a href="#project-h2">TV</a></li>
        <li className="nav-link"><a href="#contact">Trending</a></li>
        <form>
          <input placeholder=''></input>
        </form>
      </ul>
    </nav>
  )

}

export default Mainnav