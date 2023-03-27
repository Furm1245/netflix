import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-elastic-carousel";
import './Slider.css'
// import Slider from "react-slick";



const SimpleSlider = (props) => {
    // const items = [
    //     { id: 1, title: 'item #1', src: free },
    //     { id: 2, title: 'item #2', src: grim },
    //     { id: 3, title: 'item #3', src: frozen },
    //     { id: 4, title: 'item #4', src: stone },
    //     { id: 5, title: 'item #5', src: violent },
    //     { id: 6, title: 'item #6', src: free },
    //     { id: 7, title: 'item #7', src: grim },
    //     { id: 8, title: 'item #7', src: frozen },
    //     { id: 9, title: 'item #7', src: free },
    //     { id: 10, title: 'item #7', src: stone },
    // ]


    const movieInfo = props.movies.map(({ id, poster_path }) => {
        return (
            <div key={id} id={id} className="slide">
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