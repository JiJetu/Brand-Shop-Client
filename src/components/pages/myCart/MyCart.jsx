import { useLoaderData } from "react-router-dom";
import MyCardDesign from "./MyCardDesign";


const MyCart = () => {
    const addedCarts = useLoaderData();
    console.log(addedCarts);


    return (
        <div className="container mx-auto max-w-screen-sm mt-4 md:mt-10">
            {
                addedCarts?.map(addedCart => <MyCardDesign key={addedCart._id} addedCart={addedCart}></MyCardDesign>)
            }
        </div>
    )
};

export default MyCart;