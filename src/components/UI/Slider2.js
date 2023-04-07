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

    const calculateProgressBar = () => {

        const slider = document.querySelector('.netflix-slider')

        const itemCount = movieInfo.length

        const itemsPerScreen = parseInt(getComputedStyle(slider).getPropertyValue('--items-per-screen'))

        const progressBarCount = Math.ceil(itemCount / itemsPerScreen)

        console.log(progressBarCount)


    }

    calculateProgressBar()



    const prevSlide = () => {
        setIndex(index - 1)
    }

    const nextSlide = () => {
        setIndex(index + 1)

        console.log(index)
    }

    return (
        <>
            <div className='index-bar'>
                <div className='index-item active'></div>
                <div className='index-item'></div>
                <div className='index-item'></div>
                <div className='index-item'></div>
            </div>
            <div className='netflix-container'>
                <div className='handle left-handle' onClick={prevSlide}>
                    <FontAwesomeIcon icon={faChevronLeft} />
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