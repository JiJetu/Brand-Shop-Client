import Swal from 'sweetalert2'

const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const bname = form.bname.value;
        const description = form.description.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const photoURL = form.photoURL.value;

        const newProduct = { name, bname, description, type, rating, price, photoURL };
        console.log(newProduct);

        // send data to the server
        fetch("https://assignment-10-puce.vercel.app/product", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
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
            })
    }
    return (
        <div className="container mx-auto mt-4">
            <h2 className="text-center text-5xl font-bold text-black mb-6">Add Product</h2>
            <form onSubmit={handleAddProduct}>
                <div className="flex gap-6 mb-6">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <p className="label-text">Brand Name</p>
                        </label>
                        <label className="input-group">
                            <input type="text" name="bname" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <p className="label-text">Product Name</p>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex gap-6 mb-6">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <p className="label-text">Photo URL</p>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <p className="label-text">Product Type</p>
                        </label>
                        <label className="input-group">
                            <select name="type" className="input input-bordered w-full">
                                <option value="phone">Phone</option>
                                <option value="computer">Computer</option>
                                <option value="laptop">Laptop</option>
                                <option value="tablet">Tablet</option>
                                <option value="monitor">Monitor</option>
                                <option value="headphone">Headphone</option>
                                <option value="camera">Camera</option>
                                <option value="television">Television</option>
                                <option value="speaker">Speaker</option>
                                <option value="keyboard">Keyboard</option>
                                <option value="mouse">Mouse</option>
                                <option value="printer">Printer</option>
                                <option value="gaming console">Gaming Console</option>
                            </select>
                        </label>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="flex gap-6 mb-6">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <p className="label-text">Product Price</p>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price $" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <p className="label-text">Product Rating</p>
                        </label>
                        <label className="input-group">
                            <input type="number" step="any" min={1} max={5} name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex gap-6 mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <p className="label-text">Product Description</p>
                        </label>
                        <label className="input-group">
                            <textarea type="text" spellCheck="true" name="description" rows="3" placeholder="Product Description..." className="px-5 p-3 border border-gray-400  w-full" />
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-group w-full">Add</button>
            </form>
        </div>
    );
};

export default AddProduct;