import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-elastic-carousel";
import './Slider.css'
import free from '../assets/free.jpg'
// import Slider from "react-slick";



const SimpleSlider = () => {

    const items = [
        { id: 1, title: 'item #1' },
        { id: 2, title: 'item #2' },
        { id: 3, title: 'item #3' },
        { id: 4, title: 'item #4' },
        { id: 5, title: 'item #5' },
        { id: 6, title: 'item #6' },
        { id: 7, title: 'item #7' },
    ]


    const productInfo = items.map(({ id, title, src }) => {
        return (
            <div id={id} className="slide">
                <img
                    src={src}
                    alt='A movie'
                />
                <div>
                    <p>{title}</p>
                </div>
            </div>
        )
    })

    const breakpoints = [
        // { width: 1, itemsToShow: 1 },
        // { width: 700, itemsToShow: 2 },
        // { width: 900, itemsToShow: 3 },
        // { width: 1550, itemsToShow: 3 },
        { width: 1600, itemsToShow: 6 },
    ];

    return (

        <div className="sec">
            <h2>Genre</h2>
            <Carousel disableArrowsOnEnd={false} showArrows={false} responsive breakPoints={breakpoints} >
                {productInfo}
            </Carousel>
        </div>
    );
}

export default SimpleSlider