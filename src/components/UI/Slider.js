import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-elastic-carousel";
import './Slider.css'
import { useState, useEffect } from "react";
import ReactPlayer from 'react-player'
import movieTrailer from 'movie-trailer'
import Modal from 'react-bootstrap/Modal';
// import Slider from "react-slick";



const SimpleSlider = (props) => {
    const [video, setVideo] = useState('')
    const [videoUrl, setVideoUrl] = useState(null)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        const handleSearch = async () => {
            try {
                await movieTrailer(video).then(response => setVideoUrl(response))

            }
            catch (err) {
            }
        }
        handleSearch()
    }, [video])


    const movieInfo = props.movies.map(({ id, poster_path, original_title }) => {
        return (
            <div key={id} id={id} className="slide" onClick={() => { setVideo(original_title); handleShow() }}>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt='A movie'
                />
            </div>
        )
    })

    const breakpoints = [
        { width: 1, itemsToShow: 1 },
        { width: 700, itemsToShow: 2 },
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
            <Modal show={show} onHide={handleClose} className="backdrop" style={{ opacity: 1 }} centered>
                {videoUrl == null &&
                    <>
                        <Modal.Body>
                            <h2>This video is unavailable</h2>
                        </Modal.Body>
                    </>
                }
                {videoUrl !== null &&
                    <ReactPlayer url={videoUrl} />
                }
            </Modal>
        </div>
    );
}

export default SimpleSlider