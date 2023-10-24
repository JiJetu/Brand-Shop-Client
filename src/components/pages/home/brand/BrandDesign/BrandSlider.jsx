import Carousel from "nuka-carousel";
import img1 from '../../../../../assets/MK0U3_FV404.png'
import img2 from '../../../../../assets/MT4J3_FV401.png'
import img3 from '../../../../../assets/HPU72.png'

const BrandSlider = () => {
    return (
        <div className="w-full text-center">
            <Carousel>
                <img className="w-full h-[80vh]" src={img1} />
                <img className="w-full h-[80vh]" src={img2} />
                <img className="w-full h-[80vh]" src={img3} />
            </Carousel>
        </div>
    );
};

export default BrandSlider;