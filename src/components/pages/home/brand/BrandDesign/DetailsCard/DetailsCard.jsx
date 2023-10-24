import { useLoaderData } from "react-router-dom";


const DetailsCard = () => {
    const card = useLoaderData();
    const {photoURL} = card
    console.log(photoURL);
    return (
        <div className="w-full h-[500px] container mx-auto flex justify-around items-center">
            <img className="h-full" src={photoURL} alt="" />
            <div className="border border-red-700">
                
            </div>
        </div>
    );
};

export default DetailsCard;