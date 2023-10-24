import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";

const BrandCards = ({name}) => {

    const [cards, setCards] = useState();


    useEffect( ()=> {
        fetch(`http://localhost:5000/product/${name}`)
        .then(res => res.json())
        .then(data => setCards(data))
    },[name])

    // console.log(cards);
    console.log(name);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 container mx-auto mt-48">
            {
                cards?.map(card => <BrandCard key={card._id} card={card}></BrandCard>)
            }
            <h2 className="text-black"></h2>
        </div>
    );
};

export default BrandCards;