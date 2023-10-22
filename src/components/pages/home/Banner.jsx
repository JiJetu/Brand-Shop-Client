import banner from '../../../assets/pexels-ola-dapo-3345882.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-[90vh]" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Tech & Electronics</h1>
                    <p className="mb-5">Your one-stop destination for the latest in tech trends, electronic wonders, and digital discoveries. Stay ahead in the world of innovation with expert insights, reviews, and guides.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;