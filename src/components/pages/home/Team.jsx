import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';

const Team = () => {
    return (
        <div>
            <h2 data-aos="fade-down" className="text-5xl font-bold text-center my-4 md:my-9 text-black dark:text-white">Team Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div data-aos="flip-left">
                    <div className="card bg-transparent">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/whd5SGT/member1.png" alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-black dark:text-white">John Doe</h2>
                            <div className='flex gap-2'>
                                <BsFacebook></BsFacebook>
                                <BsInstagram></BsInstagram>
                                <BsTwitter></BsTwitter>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left">
                    <div className="card bg-transparent">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/sVrn5J8/member2.png" alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-black dark:text-white">Alice Smith</h2>
                            <div className='flex gap-2'>
                                <BsFacebook></BsFacebook>
                                <BsInstagram></BsInstagram>
                                <BsTwitter></BsTwitter>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left">
                    <div className="card bg-transparent">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/mSmvcvR/member3.png" alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-black dark:text-white">Mike Johnson</h2>
                            <div className='flex gap-2'>
                                <BsFacebook></BsFacebook>
                                <BsInstagram></BsInstagram>
                                <BsTwitter></BsTwitter>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left">
                    <div className="card bg-transparent">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/bHBhZtN/member4.png" alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-black">Emily Davis</h2>
                            <div className='flex gap-2'>
                                <BsFacebook></BsFacebook>
                                <BsInstagram></BsInstagram>
                                <BsTwitter></BsTwitter>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Team;