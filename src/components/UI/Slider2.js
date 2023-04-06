import './Slider2.css'
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Slider2 = (props) => {

    const [index, setIndex] = useState(0)

    const SlideAnimation = {
        transform: `translateX(calc(${index} * -100%)`
    }


    const movieInfo = props.movies.slice(0, 18).map(({ id, poster_path }) => {
        return (
            <img
                key={id}
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt='A movie'
            />
        )
    })

    const prevSlide = () => {
        setIndex(index - 1)
    }

    const nextSlide = () => {
        setIndex(index + 1)

        console.log(index)
    }

    return (
        <>
            <div className='netflix-container'>
                <div className='handle left-handle'>
                    <FontAwesomeIcon icon={faChevronLeft} onClick={prevSlide} />
                </div>
                <div className="netflix-slider" style={SlideAnimation}>
                    {movieInfo}

                </div>
                <div className='handle right-handle' onClick={nextSlide}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
        </>
    )
}


export default Slider2