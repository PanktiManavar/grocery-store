import React from 'react'

const ViewCategoryProduct = () => {

    // const [data, setData] = useState([]);
    // const [filter, setFilter] = useState(data);
    // const [loading, setLoading] = useState(false);

    // let componentMounted = true;

    // useEffect(() => {
    //     getCategory();
    //     getProducts();

    // }, []);

    // const getProducts = async () => {
    //     setLoading(true);
    //     const response = await fetch("api/productselect");
    //     // return console.warn(response);
    //     if (componentMounted) {
    //         setData(await response.clone().json());
    //         setFilter(await response.json());
    //         setLoading(false);
    //         console.log(filter);
    //     }
    //     return () => {
    //         componentMounted = false;
    //     };
    // };
    // const Loading = () => {
    //     return (
    //         <>
    //             Loading...
    //         </>
    //     )
    // }

    return (
        <div>
            {/* <div className="heading">
                <h1>Our Shop</h1>
                <p> <Link to="/Home">Home </Link>- Product </p>
            </div>

            <div className='row justify-content-center'>
                {loading ? <Loading /> : <CategoryShow />}
                {loading ? <Loading /> : <ShowProducts />}

            </div> */}
        </div>
    )
}

export default ViewCategoryProduct;