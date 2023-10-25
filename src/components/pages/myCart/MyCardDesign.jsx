import { FaDollarSign } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

const MyCardDesign = ({ addedCart }) => {

    const { _id, photoURL, name, bname, price } = addedCart;

    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/addedProduct/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        if (data.acknowledged) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }

    return (
        <div className="h-[120px] flex justify-between">
            <div className="flex justify-between items-center h-full gap-3">
                <img className="h-full" src={photoURL} alt="" />
                <div>
                    <h3>{name}</h3>
                    <h5>{bname}</h5>
                </div>
            </div>
            <div className="flex gap-2 items-center ">
                <p className='flex items-center gap-1 text-2xl text-green-600'><FaDollarSign></FaDollarSign> {price}
                </p>
                <button onClick={() => handleDelete(_id)} className="p-3"><RiDeleteBin6Line></RiDeleteBin6Line></button>
            </div>
        </div>
    );
};

export default MyCardDesign;