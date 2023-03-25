import './Carousel.css'
import { useState } from "react"

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(1)

    const dataSlider = [
        {
            id: 1,
            title: "Lorem ipsum",
            subTitle: "Lorem"
        },
        {
            id: 2,
            title: "Lorem ipsum",
            subTitle: "Lorem"
        },
        {
            id: 3,
            title: "Lorem ipsum",
            subTitle: "Lorem"
        },
    ];

    const nextSlide = () => {
        if (currentIndex !== dataSlider.length) {
            setCurrentIndex(currentIndex + 1)
        }
        else if (currentIndex === dataSlider.length) {
            setCurrentIndex(1)
        }
        console.log(currentIndex)
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
                    </div>
                )
            })}

        </div>

    )

}

export default Carousel