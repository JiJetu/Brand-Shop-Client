const AddProduct = () => {
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoURL = form.photoURL.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photoURL };
        console.log(newCoffee);

        // send data to the server
        fetch("http://localhost:5000/coffee", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('added successfully')
                }
            })
    }
    return (
        <div className="container mx-auto mt-4">
            <h2 className="text-center text-5xl font-bold text-black mb-6">Add Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                <div className="flex gap-6 mb-6">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <p className="label-text">Coffee Name</p>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <p className="label-text">Available Quantity</p>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex gap-6 mb-6">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <p className="label-text">Supplier Name</p>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <p className="label-text">Taste</p>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex gap-6 mb-6">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <p className="label-text">Category</p>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <p className="label-text">Details</p>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex gap-6 mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <p className="label-text">Photo URL</p>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-group w-full">Add Coffee</button>
            </form>
        </div>
    );
};

export default AddProduct;