import { useLoaderData } from 'react-router-dom';
import Footer from '../Footer';
import Banner from './Banner';
import Team from './Team';
import Brand from './brand/Brand';
import Client from './client';

const Home = () => {

    const brands = useLoaderData();
    console.log(brands);

    
    return (
        <div className='dark:bg-zinc-600'>
            <Banner></Banner>
            <div className="container mx-auto">
                <h2 className="text-5xl font-bold text-center my-4 md:my-9 text-black dark:text-white">Brands</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:p-10 dark:text-white">
                    {
                        brands.map(brand => <Brand key={brand._id} brand={brand}></Brand>)
                    }
                </div>
            </div>
            <Team></Team>
            <Client></Client>
            <Footer></Footer>
        </div>
    );
};

export default Home;