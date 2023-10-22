const Brand = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 container mx-auto md:p-10">
            <div className="h-[250px] w-full text-center shadow-xl rounded-3xl">
                <img className="p-5 w-full h-3/4" src="/src/assets/Apple-Logo.png" alt="" />
                <p className="text-xl text-black my-4 font-medium">Apple</p>
            </div>
            <div className="h-[250px] w-full text-center shadow-xl rounded-3xl">
                <img className="p-5 w-full h-3/4" src="/src/assets/samsung.png" alt="" />
                <p className="text-xl text-black my-4 font-medium">Samsung</p>
            </div>
            <div className="h-[250px] w-full text-center shadow-xl rounded-3xl">
                <img className="p-5 w-full h-3/4" src="/src/assets/Google-logo.png" alt="" />
                <p className="text-xl text-black my-4 font-medium">Google</p>
            </div>
            <div className="h-[250px] w-full text-center shadow-xl rounded-3xl">
                <img className="p-5 w-full h-3/4" src="/src/assets/Sony-logo.png" alt="" />
                <p className="text-xl text-black my-4 font-medium">Sony</p>
            </div>
            <div className="h-[250px] w-full text-center shadow-xl rounded-3xl">
                <img className="p-5 w-full h-3/4" src="/src/assets/Nokia-Logo.png" alt="" />
                <p className="text-xl text-black my-4 font-medium">Nokia</p>
            </div>
            <div className="h-[250px] w-full text-center shadow-xl rounded-3xl">
                <img className="p-5 w-full h-3/4" src="/src/assets/HP-Logо.png" alt="" />
                <p className="text-xl text-black my-4 font-medium">HP</p>
            </div>
        </div>
    );
};

export default Brand;