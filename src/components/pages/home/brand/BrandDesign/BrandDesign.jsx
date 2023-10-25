import { useLoaderData, useParams } from "react-router-dom";
import BrandSlider from "./BrandSlider";
import BrandCards from "./BrandsCards/BrandCards";


const BrandDesign = () => {

    const brand = useLoaderData();

    const {name} = useParams();

    return (
        <div className="flex flex-col dark:bg-zinc-600">
            <div className="flex-grow h-[80vh]">
                {
                    <BrandSlider brand={brand}></BrandSlider>
                }
            </div>
            <BrandCards name={name}></BrandCards>
        </div>
    );
};

export default BrandDesign;