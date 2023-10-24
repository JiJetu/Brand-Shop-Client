import { useLoaderData, useParams } from "react-router-dom";
import BrandSlider from "./BrandSlider";
import BrandCards from "./BrandsCards/BrandCards";


const BrandDesign = () => {

    const brand = useLoaderData();

    const {name} = useParams();

    return (
        <div className="flex flex-col">
            <div className="flex-grow h-[80vh]">
                {
                    <BrandSlider brand={brand}></BrandSlider>
                }
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 container mx-auto">
                {
                    appleCards.map(appleCard => <AppleCard key={appleCard._id} appleCard={appleCard}></AppleCard>)
                }
            </div> */}
            <BrandCards name={name}></BrandCards>
        </div>
    );
};

export default BrandDesign;