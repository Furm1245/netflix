import './Carousel.css'
import { useState } from "react"

const Carousel = ({ slides }) => {
    const [currentIndex, setCurrentUser] = useState(0)

    const slideStyles = {
        backgroundImage: `url(${slides[currentIndex].url})`,
        width: 100
    }

    return (
        <div className='carousel-container'>
            <div style={{ slideStyles }}>

            </div>

        </div>

    )

}

export default Carousel