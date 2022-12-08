import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../Viewers/Viewer.css"

const ViewProducts = () => {

  const params = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [subid, setSubid] = useState('');

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      // return console.log(params.id);
      let result = await fetch(`/api/productselectbyid/${params.id}`);
      result = await result.json()
      // console.log(result.result);
      setProduct(result.result);
      setLoading(false);
      setSubid(result.result.subid[0].sname)
    }
    getProduct();

  }, [])

  const Loading = () => {
    return (
      <>
        Loading...
      </>
    )
  }

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 rowsty">
          <img src={product.pimg} alt={product.pname} height="400px" width='400px' />
        </div>
        <div className="col-md-6">
          <h4 className='text-uppercase text-black-50'>
            Category : {subid}
          </h4>
          <h1 className='display-5'>{product.pname}</h1>
          <h3 className="display-6 fw-bold my-4">
            Rs.{product.price}
          </h3>
          <p className="lead">
            {product.descripation}
          </p>
          <button className="btn btn-outline-dark px-4 py-2">Add to Cart</button>
          <Link className="btn btn-dark ms-2 px-3 py-2">Go to Cart</Link>
        </div>
        {/* <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
          <li class="group">
            <div class="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <div class="flex items-center">
                <div>
                  <span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;">
                    <span style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;">
                      <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2735%27%20height=%2735%27/%3e" style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;" />
                    </span>
                    <img alt="Fish &amp; Meat" src="/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fy0zXYj5%2Fcarp-fish.png&amp;w=96&amp;q=75" decoding="async" data-nimg="intrinsic" srcset="/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fy0zXYj5%2Fcarp-fish.png&amp;w=48&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fi.ibb.co%2Fy0zXYj5%2Fcarp-fish.png&amp;w=96&amp;q=75 2x"
                      style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;" />
                    <noscript></noscript>
                  </span>
                </div>
                <div class="pl-4">
                  <h3 class="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                    Fish &amp; Meat</h3>
                  <ul class="pt-1 mt-1">
                    <li class="pt-1">
                      <a class="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer" href="/search?category=fish">
                        <span class="text-xs text-gray-400 hover:text-emerald-600">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="M184 112l144 144-144 144"></path>
                          </svg>
                        </span>Fish
                      </a>
                    </li>
                    <li class="pt-1">
                      <a class="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer" href="/search?category=meat">
                        <span class="text-xs text-gray-400 hover:text-emerald-600">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="M184 112l144 144-144 144"></path>
                          </svg>
                        </span>Meat
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul> */}
      </>
    )
  }

  return (
    <>
      <div className="container stys">
        <div className="row">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </>
  )
}

export default ViewProducts