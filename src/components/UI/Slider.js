import './Slider.css'
import { useState, useEffect } from "react";
import movieTrailer from 'movie-trailer'
import Modal from 'react-bootstrap/Modal';
import ReactPlayer from 'react-player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Slider2 = (props) => {


    const [video, setVideo] = useState('')
    const [videoUrl, setVideoUrl] = useState(null)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [index, setIndex] = useState(0)


    const SlideAnimation = {
        transform: `translateX(calc(${index} * -100%)`
    }

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


    const movieInfo = props.movies.slice(0, 18).map(({ id, poster_path, original_title }) => {
        return (
            <img
                key={id}
                onClick={() => { setVideo(original_title); handleShow() }}
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt='A movie'
            />
        )
    })

    const prevSlide = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };



    const nextSlide = () => {
        const slider = document.querySelector('.netflix-slider')

        const itemCount = parseInt(getComputedStyle(slider).getPropertyValue('--items-per-screen'))

        const maxIndex = Math.ceil(props.movies.length / itemCount) - 1; // Calculate maximum index based on number of movies and items per screen

        if (index < maxIndex - 1) { // Check if current index is less than maximum index
            setIndex(index + 1);
        }

        if (index >= maxIndex - 1) {
            setIndex(0)
        }
    }



    return (
        <>
            <div className='netflix-container'>
                {index > 0 &&
                    <div className='handle left-handle' onClick={prevSlide}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                }
                <div className="netflix-slider" style={SlideAnimation}>
                    {movieInfo}
                </div>
                <div className='handle right-handle' onClick={nextSlide}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
                <Modal show={show} onHide={handleClose} className="backdrop" style={{ opacity: 1 }} centered>
                    {videoUrl == null &&
                        <>
                            <Modal.Body>
                                <h2>This video is unavailable</h2>
                            </Modal.Body>
                        </>
                    }
                    {videoUrl !== null &&
                        <div className="react-player">
                            <ReactPlayer
                                width="100%"
                                height="100%"
                                url={videoUrl} />
                        </div>
                    }
                </Modal>


            </div>
        </>
    )
}


export default Slider2