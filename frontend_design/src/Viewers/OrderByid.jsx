import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import "./Ordersingle.css"

const OrderByid = () => {

    const [order, setOrder] = useState([]);
    const params = useParams();

    const auth = sessionStorage.getItem('userid')?.replace(/['"]+/g, '');

    const navigate = useNavigate()
    useEffect(() => {
        getorder();
    }, [])

    const getorder = async () => {
        let result = await fetch(`/api/ViewOrderByid/${params.id}`);
        result = await result.json();
        if (result) {
            setOrder(result.result);
            console.log(result.result);
        }
    }

    return (
        <div className="bg-white rounded-lg shadow-sm" style={{ margin: "25px 30px 0 28px" }}>
            <div class="bg-indigo-50 p-8 rounded-t-xl" >
                <div class="row">
                    <div className="col">
                        <h1 class="font-bold font-serif text-2xl uppercase">Invoice</h1>
                    </div>
                    <div className="col" style={{ textAlign: "right" }}>
                        <h2 class="text-lg font-serif font-semibold mt-4 lg:mt-0 md:mt-0">Grocery Store</h2>
                        <p class="text-sm text-gray-500">Uka Tarsadia University Maliba Campus , Gopal Vidyanagar , Bardoli-Mahuva Road , Tarsadi - 394 350. Tal: Mahuva Dist: Surat Gujarat, INDIA.</p>
                    </div>
                </div>

            </div>
            <div class="overflow-hidden lg:overflow-visible px-8 my-10">
                <table class="table-auto min-w-full border border-gray-100 divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr class="bg-gray-100">
                            <th scope="col" class="text-left text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider">SR.</th>
                            <th scope="col" class="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider">IMAGE</th>
                            <th scope="col" class="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider">PRODUCT NAME</th>
                            <th scope="col" class="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider">QUANTITY</th>
                            <th scope="col" class="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider">ITEM PRICE</th>
                            <th scope="col" class="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider">AMOUNT</th>
                            {/* <th scope="col" class="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider">Action</th> */}
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        {
                            order.length > 0 ? order.map((item, index) => (
                                <tr key={item._id}>
                                    <td class="px-5 py-3 leading-6 whitespace-nowrap">
                                        <span class="uppercase text-sm font-medium">{index + 1}</span>
                                    </td>
                                    <td class="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                        <img src={`http://localhost:8000/${item.Pid[0].pimg}`} alt="loading" width={90} height={90} />
                                    </td>
                                    <td class="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                        <span class="text-sm">{item.Pid[0].pname}</span>
                                    </td>
                                    <td class="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                        <span class="text-sm">{item.qty}</span>
                                    </td>
                                    <td class="px-5 py-3 leading-6 text-center whitespace-nowrap font-medium text-sm">
                                        <span class="text-orange-500">{`Rs. ${item.Pid[0].price}`}</span>
                                    </td>
                                    <td class="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                        <span class="text-sm font-bold">{`Rs. ${item.Pid[0].price * parseInt(item.qty)}`}</span>
                                    </td>
                                    {/* <td class="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                        <span class="text-sm font-bold">Details</span>
                                    </td> */}
                                </tr>
                            ))
                                :
                                <tr> <td colSpan="5" style={{ textAlign: "center" }}><strong>No Records Founds!</strong></td></tr>
                        }
                    </tbody>
                </table>
                {/* <h1 class="font-bold font-serif text-2xl uppercase">Invoice</h1> */}
            </div>
            <div class="border-t border-b border-gray-100 p-10 bg-emerald-50">
                <div class="row">
                    <div className="cols">
                        <h5 class="mb-1 font-bold font-serif text-sm uppercase text-gray-600 block">PAYMENT METHOD</h5>
                        <span class="text-lg text-gray-500 font-semibold font-serif block">COD</span>
                    </div>
                    <div className="cols">
                        <h5 class="mb-1 font-bold font-serif text-sm uppercase text-gray-600 block">SHIPPING COST</h5>
                        <span class="text-lg text-gray-500 font-semibold font-serif block">RS.20</span>
                    </div>
                    <div className="cols">
                        <h5 class="mb-1 font-bold font-serif text-sm uppercase text-gray-600 block">DISCOUNT</h5>
                        <span class="text-lg text-gray-500 font-semibold font-serif block">RS.0.0</span>
                    </div>
                    <div className="cols">
                        <h5 class="mb-1 font-bold font-serif text-sm uppercase text-gray-600 block">TOTAL AMOUNT</h5>
                        <span class="text-2xl font-serif font-bold text-red-500 block">{`Rs. ${order.FinalPrice}`}</span>
                    </div>
                </div>
                {/* <h1 class="font-bold font-serif text-2xl uppercase">Invoice</h1> */}
            </div>
            <div class="overflow-hidden lg:overflow-visible px-8 my-10" style={{ textAlign: "right" }}>
                <button class="items-center justify-center bg-emerald-500  text-white transition-all font-serif text-sm font-semibold h-10 py-2 px-5 rounded-md" style={{ marginBottom: "10px", padding: "20px" }}>
                    Download
                </button>
            </div>
        </div>
    )
}

export default OrderByid