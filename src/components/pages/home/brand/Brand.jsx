import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Brand = ({ brand }) => {
    const { _id, name, image } = brand;
    console.log(_id);


    return (
        <div>
            <Link to={`/brand/${_id}`}><div className="h-[250px] w-full text-center shadow-xl rounded-3xl">
                <img className="p-5 w-full h-3/4" src={image} alt="" />
                <p className="text-xl text-black my-4 font-medium">{name}</p>
            </div></Link>
        </div>
    );
};

export default Brand;