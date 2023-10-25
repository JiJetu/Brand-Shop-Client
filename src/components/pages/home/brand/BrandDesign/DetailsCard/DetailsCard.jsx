import { useLoaderData } from "react-router-dom";
import { FaDollarSign, FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2";


const DetailsCard = () => {
    const card = useLoaderData();
    const { name, bname, description, type, rating, price, photoURL } = card
    console.log(card);


    const handleAddToCart = () => {
        // send data to the server
        fetch("http://localhost:5000/addedProduct", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(card)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                else{
                    Swal.fire({
                        title: 'Error!',
                        text: 'already added',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="w-full h-[90vh] container mx-auto md:flex justify-around items-center">
            <img className="w-full md:w-2/5 h-full" src={photoURL} alt="" />
            <div className="p-4 flex justify-between items-start">
                <div>
                    <h2 className="text-3xl text-black font-semibold">{name}</h2>
                    <p className="mt-7 text-justify">{description}</p>
                    <p className="mt-5">Rating: {rating}</p>
                    <p className="mt-3">Type: {type}</p>
                    <p className="mt-3">Brand: {bname}</p>
                    <button onClick={handleAddToCart} className="btn btn-success px-4 py-3 mt-3"><FaShoppingCart></FaShoppingCart> Add to card</button>
                </div>
                <div>
                    <p className='flex items-center gap-1 text-2xl text-green-600'><FaDollarSign></FaDollarSign> {price}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;