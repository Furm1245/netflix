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
        <li className="nav-link"><a href="/movies">Movies</a></li>
        <li className="nav-link"><a href="/tv">TV</a></li>
        <li className="nav-link"><a href="/trending">Trending</a></li>
        <form>
          <input placeholder=''></input>
        </form>
      </ul>
    </nav>
  )

}

export default Mainnav