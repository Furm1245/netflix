import './Mainnav.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faTv } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Mainnav = () => {

  const [show, setShow] = useState(false)

  const onShow = () => {
    setShow(!show)
    console.log('clicked')
  }



  return (
    <nav className="nav-container">
      <div className="hamburger" id="hamburger-icon" onClick={onShow}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="nav-logo">
        <a href='/'><h2>React Movies</h2></a>
      </div>
      <ul className={show === true ? 'nav-responsive' : "nav-links"} id="nav-links">
        <li className="nav-link"><a href="/">Home</a></li>
        <li className="nav-link"><a href="/movies"><FontAwesomeIcon icon={faVideo} />Movies</a></li>
        <li className="nav-link"><a href="/tv"><FontAwesomeIcon icon={faTv} />TV</a></li>
        <li className="nav-link"><a href="/trending">Trending</a></li>
      </ul>
      <div className='icon-container'>
        <a href='/search' aria-label="links to search page">
          <FontAwesomeIcon className="nav-icon" icon={faMagnifyingGlass} beatFade />
        </a>
      </div>
    </nav>
  )

}

export default Mainnav