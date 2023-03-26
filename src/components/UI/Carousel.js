import './Carousel.css'
import { useState } from "react"

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(1)

    const lorem = 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be usedas a placeholder before final copy is available.'

    const dataSlider = [
        {
            id: 1,
            title: "Lorem ipsum",
            description: lorem
        },
        {
            id: 2,
            title: "Lorem ipsum2",
            description: lorem
        },
        {
            id: 3,
            title: "Lorem ipsum3",
            description: lorem
        },
        {
            id: 4,
            title: "STRANGER THINGS",
            description: lorem
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

    // const prevSlide = () => {
    //     if (currentIndex !== 1) {
    //         setCurrentIndex(currentIndex - 1)
    //     }
    //     else if (currentIndex === 1) {
    //         setCurrentIndex(dataSlider.length)
    //     }
    // }

    // const moveSlide = () => {

    // }

    return (
        <div className='carousel-container'>
            {dataSlider.map((obj, index) => {
                console.log(obj)
                return (
                    <div
                        key={obj.id}
                        className={currentIndex === index + 1 ? "slider active-anim" : "slider"}
                    >
                        <img
                            onClick={nextSlide}
                            src={process.env.PUBLIC_URL + `/assets/img${currentIndex}.jpg`}
                            alt="posters for movies"
                        />
                        <div className='carousel-info'>
                            <div className='inside-carousel'>
                                <div>
                                    <h2>{obj.title}</h2>
                                </div>
                                <div className='carousel-buttons'>
                                    <div><button>Play</button></div>
                                    <div><button>Top Rated</button></div>

                                </div>
                                <div className='carousel-text'>
                                    <p>{lorem}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>

    )

}

export default Carousel