import './Mainnav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

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
        <div>
          <a href='/search'>
            <FontAwesomeIcon className="nav-icon" icon={faMagnifyingGlass} />
          </a>
        </div>
        {/* <form>
          <input placeholder='search'></input>
        </form> */}
      </ul>
    </nav>
  )

}

export default Mainnav