import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-elastic-carousel";
import './Slider.css'
import { useState } from "react";
// import Slider from "react-slick";



const SimpleSlider = (props) => {
    const [modal, setModal] = useState(false)


    const toggleModal = () => {
        setModal(!modal)
        console.log(modal)
    }


    const movieInfo = props.movies.map(({ id, poster_path }) => {
        return (
            <div key={id} id={id} className="slide" onClick={toggleModal}>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt='A movie'
                />
            </div>
        )
    })

    const breakpoints = [
        // { width: 1, itemsToShow: 1 },
        // { width: 700, itemsToShow: 2 },
        { width: 1000, itemsToShow: 3 },
        { width: 1400, itemsToShow: 5 },
        { width: 1600, itemsToShow: 6 },
        { width: 2000, itemsToShow: 8 },
    ];

    return (

        <div className="sec">
            <Carousel disableArrowsOnEnd={false} showArrows={true} responsive breakPoints={breakpoints} >
                {movieInfo}
            </Carousel>
        </div>
    );
}

export default SimpleSlider