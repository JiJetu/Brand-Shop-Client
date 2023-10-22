const Client = () => {
    return (
        <div className="container mx-auto">
            <h2 className="text-5xl font-bold text-center my-4 md:my-9 text-black">Our happy clients</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center p-7">
                <div className="mb-5 sm:mb-0">
                    <div className="flex justify-center mb-4">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                            className="rounded-full shadow-md"
                            width="150"
                            height="150"
                            alt="User 1"
                        />
                    </div>
                    <h5 className="mb-3">Anna Deynah</h5>
                    <h6 className="text-primary mb-3">UX Designer</h6>
                    <p className="px-3">
                        <i className="fas fa-quote-left pr-2"></i>
                        The website's user-friendly design and seamless checkout process made my purchase a breeze. I was impressed by the range and quality of products available, and the transparency in shipping information. Highly recommended!
                    </p>
                    <ul className="flex justify-center mb-0">
                        <li>
                            <i className="fas fa-star text-warning text-sm"></i>
                        </li>
                        <li>
                            <i className="fas fa-star text-warning text-sm"></i>
                        </li>
                        <li>
                            <i className="fas fa-star text-warning text-sm"></i>
                        </li>
                        <li>
                            <i className="fas fa-star text-warning text-sm"></i>
                        </li>
                        <li>
                            <i className="fas fa-star text-warning text-sm"></i>
                        </li>
                    </ul>
                </div>
                <div className="hidden lg:block">
                    <div className="flex justify-center mb-4">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                            className="rounded-full shadow-md"
                            width="150"
                            height="150"
                            alt="User 2"
                        />
                    </div>
                    <h5 className="mb-3">John Doe</h5>
                    <h6 className="text-primary mb-3">Web Developer</h6>
                    <p className="px-3">
                        <i className="fas fa-quote-left pr-2"></i>
                        The website's user-friendly design and seamless checkout process made my purchase a breeze. I was impressed by the range and quality of products available, and the transparency in shipping information. Highly recommended!
                    </p>
                    <ul className="flex justify-center mb-0">
                        <li>
                            <i className="fas fa-star text-warning text-sm"></i>
                        </li>
                        <li>
                            <i className="fas fa-star text-warning text-sm"></i>
                        </li>
                        <li>
                            <i className="fas fa-star text-warning text-sm"></i>
                        </li>
                        <li>
                            <i className="fas fa-star text-warning text-sm"></i>
                        </li>
                        <li>
                            <i className="fas fa-star-half-alt text-warning text-sm"></i>
                        </li>
                    </ul>
                </div>
                <div className="hidden lg:block">
                    <div className="flex justify-center mb-4">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                            className="rounded-full shadow-md"
                            width="150"
                            height="150"
                            alt="User 3"
                        />
                    </div>
                    <h5 className="mb-3">Maria Kate</h5>
                    <h6 className="text-primary mb-3">Photographer</h6>
                    <p className="px-3">
                        <i className="fas fa-quote-left pr-2"></i>
                        The website's user-friendly design and seamless checkout process made my purchase a breeze. I was impressed by the range and quality of products available, and the transparency in shipping information. Highly recommended!
                    </p>
                    <ul className="flex justify-center mb-0">
                        <li>
                            <i className="fas fa-star text-warning text-sm"></i>
                        </li>
                        <li>
                            <i className="fas fa-star text-warning text-sm"></i>
                        </li>
                        <li>
                            <i className="fas fa-star text-warning text-sm"></i>
                        </li>
                        <li>
                            <i className="fas fa-star text-warning text-sm"></i>
                        </li>
                        <li>
                            <i className="far fa-star text-warning text-sm"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Client;