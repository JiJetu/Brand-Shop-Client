import Carousel from "nuka-carousel";

const BrandSlider = ({ brand }) => {
    // const [brand, setBrands] = useState()

    // useEffect(() => {
    //     fetch("http://localhost:5000/brand")
    //         .then(res => res.json())
    //         .then(data => setBrands(data))
    // }, [])

    
    // const brand = brands.find(br => br._id == id)
     // console.log(brand);

    // console.log(brands, id );

    const {image, ads} = brand;
    console.log(ads[1].image2);

    

    return (
        <div className="w-full text-center">
            <Carousel>
                <img className="w-full h-[80vh]" src={ads[0].image1} />
                <img className="w-full h-[80vh]" src={ads[1].image2} />
                <img className="w-full h-[80vh]" src={ads[2].image3} />
            </Carousel>
        </div>
    );
};

export default BrandSlider;