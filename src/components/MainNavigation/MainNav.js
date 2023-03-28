import './Mainnav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faTv } from '@fortawesome/free-solid-svg-icons'


const Mainnav = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <a href='/'><h2>React Movies</h2></a>
      </div>
      <ul className="nav-links" id="nav-links">
        <li className="nav-link"><a href="/">Home</a></li>
        <li className="nav-link"><a href="/movies"><FontAwesomeIcon icon={faVideo} />Movies</a></li>
        <li className="nav-link"><a href="/tv"><FontAwesomeIcon icon={faTv} />TV</a></li>
        <li className="nav-link"><a href="/trending">Trending</a></li>
        <div className="hamburger" id="hamburger-icon">
          <i className="fa-solid fa-bars"></i>
        </div>
      </ul>
      <div className='icon-container'>
        <a href='/search'>
          <FontAwesomeIcon className="nav-icon" icon={faMagnifyingGlass} beatFade />
        </a>
      </div>
    </nav>
  )

}

export default Mainnav