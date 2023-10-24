import { Link } from "react-router-dom";

const BrandCard = ({card}) => {
    const {_id, photoURL, name, bname, type, rating, price} = card;
    return (
        <div className="w-full h-[300px] md:mt-9 border shadow-md rounded-lg">
            <img className="w-full h-3/5 flex-grow" src={photoURL} alt="" />
            <div className="w-full flex justify-between items-start px-4 py-3">
                <div>
                    <h2 className="text-black text-xl font-semibold">Name: {name}</h2>
                    <h4 className="text-black text-lg font-medium">Brand: {bname}</h4>
                    <p>Type: {type}</p>
                    <p>Rating: {rating}</p>
                </div>
                <div className='flex items-center gap-1 text-xl'><FaDollarSign></FaDollarSign> {price}
                </div>
            </div>
            <div className="px-4 py-3 flex justify-between">
                <Link><button>Update</button></Link>
                <Link><button>Details</button></Link>
            </div>
        </div>
    );
};

export default BrandCard;