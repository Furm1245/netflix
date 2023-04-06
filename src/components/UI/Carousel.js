import './Carousel.css'
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(1)

    const carouselBackground = {
        backgroundImage: `url(${process.env.PUBLIC_URL
            + `/assets/img${currentIndex}.jpg`})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'

    }

    const dataSlider = [
        {
            id: 1,
            title: "STRANGER THINGS",
            description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl. Watch all you want. This nostalgic nod to '80s sci-fi and horror classics has earned dozens of Emmy nominations, including three for Outstanding Drama."
        },
        {
            id: 2,
            title: "SCARY MOVIE",
            description: "Starring Jon Abrahams, Carmen Electra, Shannon Elizabeth, Anna Faris, Kurt Fuller, Regina Hall, Lochlyn Munro, Cheri Oteri, and Dave Sheridan, it follows a group of teenagers who accidentally hit a man with their car, dump his body in a lake and never talk about it again."
        },
        {
            id: 3,
            title: "IT",
            description: "Set in Derry, Maine, the film tells the story of The Losers' Club (Lieberher, Ray Taylor, Lillis, Wolfhard, Oleff, Jacobs, and Dylan Grazer), a group of seven outcast children who are terrorized by the eponymous being which emerges from the sewer (Skarsgård), only to face their own personal demons in the process."
        },
        {
            id: 4,
            title: "TURBO",
            description: "Turbo (Ryan Reynolds) is a speed-obsessed snail with an unusual dream: to become the world's greatest racer. This odd snail gets a chance to leave his slow-paced life behind when a freak accident gives him the power of superspeed."
        },
    ];

    const nextSlide = () => {
        if (currentIndex !== dataSlider.length) {
            setCurrentIndex(currentIndex + 1)
        }
        else if (currentIndex === dataSlider.length) {
            setCurrentIndex(1)
        }
    }


    const prevSlide = () => {
        if (currentIndex !== 1) {
            setCurrentIndex(currentIndex - 1)
        }
        else if (currentIndex === 1) {
            setCurrentIndex(dataSlider.length)
        }
    }

    // const moveSlide = () => {

    // }

    return (
        <div className='carousel-container' style={carouselBackground}>
            {dataSlider.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={currentIndex === index + 1 ? "slider active-anim" : "slider"}
                    >
                        <div className='carousel-left-icon' onClick={prevSlide}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </div>
                        <div className='carousel-info'>
                            <div className='inside-carousel'>
                                <div>
                                    <h2>{obj.title}</h2>
                                </div>
                                <div className='carousel-buttons'>
                                    <div><button className='left-button'> <FontAwesomeIcon icon={faPlay} /> Play</button></div>
                                    <div><button className='right-button'> <FontAwesomeIcon icon={faStar} /> Top Rated</button></div>

                                </div>
                                <div className='carousel-text'>
                                    <p>{obj.description}</p>
                                </div>
                            </div>
                        </div>

                        <div className='carousel-right-icon' onClick={nextSlide}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </div>
                )
            })}

        </div>

    )

}

export default Carousel