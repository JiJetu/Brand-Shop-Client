import AppleSlider from "./AppleSlider";


const Apple = () => {


    return (
        <div className="flex flex-col">
            <div className="flex-grow h-[80vh]">
                <AppleSlider></AppleSlider>
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 container mx-auto">
                {
                    appleCards.map(appleCard => <AppleCard key={appleCard._id} appleCard={appleCard}></AppleCard>)
                }
            </div> */}
        </div>
    );
};

export default Apple;