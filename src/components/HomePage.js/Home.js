import "./Home.css"
import SimpleSlider from '../UI/Slider';
import Button from "react-bootstrap/esm/Button";
import free from '../assets/free.jpg'

const home = () => {

    return (

        <div className="sections">
            <div className="contain">
                <div className="inside-1">
                    <h2>Lorem Ipsum</h2>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text
                        commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used
                        as a placeholder before final copy is available.</p>
                    <div className="butt">
                        <div className="butt-1">
                            <Button variant="light">Play</Button>
                        </div>
                        <div className="butt-2">
                            <Button variant="secondary">More info</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <SimpleSlider />
            </div>
            <div>
                <SimpleSlider />
            </div>
            <div>
                <SimpleSlider />
            </div>
        </div >
    )

}

export default home