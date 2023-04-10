import React, { useState, useEffect } from "react";
import "./Myaccount.css"
import { AiOutlineDashboard, AiOutlineUnorderedList, AiOutlineSetting, AiOutlineUnlock, AiOutlineLogout, AiOutlineShoppingCart, AiOutlineCheck } from "react-icons/ai"
import { FiRefreshCw } from "react-icons/fi"
import { MdOutlineLocalShipping } from "react-icons/md"
import { useNavigate } from "react-router-dom";
const Myaccount = () => {

    const [order, setOrder] = useState([]);
    const auth = sessionStorage.getItem('userid')?.replace(/['"]+/g, '');
    const navigate = useNavigate()

    useEffect(() => {
        getorder();
    }, [])

    const getorder = async () => {
        let result = await fetch(`api/viewpersonorder/${auth}`);
        result = await result.json();
        if (result) {
            setOrder(result.result);
            console.log(result.result);
        }
    }
    const logout = () => {
        sessionStorage.clear();
        navigate("/Login");
    }

    return (
        <div className='bg-gray-50' >
            <div className='mx-auto max-w-screen-2xl px-3 sm:px-10'>
                <div className="flex flex-row">

                    <div className='bg-white p-4 sm:p-5 lg:p-8 rounded-md sticky top-32' style={{ margin: "30px 40px 45px 40px", width: "270px", height: "220px" }}> {/* margin: top right bottom left */}
                        <div className="flex flex-col" style={{ justifyContent: 'center' }}>
                            <a className="p-2 my-2 flex font-serif items-center rounded-md hover:bg-gray-50 hover:text-emerald-600" href="/MyAccount">
                                <span><AiOutlineDashboard style={{ padding: 0, fontSize: 16, marginLeft: "10px" }} /></span>
                                <span className="ml-2 text-xl font-medium">Dashboard</span>
                            </a>
                            <a className="p-2 my-2 flex font-serif items-center rounded-md hover:bg-gray-50 hover:text-emerald-600" href="MyOrder">
                                <span><AiOutlineUnorderedList style={{ padding: 0, fontSize: 16, marginLeft: "10px" }} /></span>
                                <span className="ml-2 text-xl font-medium">My Order</span>
                            </a>
                            <a className="p-2 my-2 flex font-serif items-center rounded-md hover:bg-gray-50 hover:text-emerald-600">
                                <span><AiOutlineSetting style={{ padding: 0, fontSize: 16, marginLeft: "10px" }} /></span>
                                <span className="ml-2 text-xl font-medium">Update Profile</span>
                            </a>
                            <a className="p-2 my-2 flex font-serif items-center rounded-md hover:bg-gray-50 hover:text-emerald-600" href="/Changepassword">
                                <span><AiOutlineUnlock style={{ padding: 0, fontSize: 16, marginLeft: "10px" }} /></span>
                                <span className="ml-2 text-xl font-medium">Change Password</span>
                            </a>
                            <a className="p-2 my-2 flex font-serif items-center rounded-md hover:bg-gray-50 hover:text-emerald-600" onClick={logout} >
                                <span><AiOutlineLogout style={{ padding: 0, fontSize: 16, marginLeft: "10px" }} /></span>
                                <span className="ml-2 text-xl font-medium">Logout</span>
                            </a>
                        </div>
                    </div>


                    <div className='col w-full bg-white mt-5 p-4 sm:p-5 lg:p-8 rounded-md overflow-hidden' style={{ margin: "40px 30px 45px 0" }}>
                        <div className='overflow-hidden' >
                            <h2 className='text-xl font-serif font-semibold mb-5' style={{ fontSize: "15px" }}>Dashboard</h2>
                            <div className="grid gap-4 mb-8 md:grid-cols-2 xl:grid-cols-4">
                                <div className="flex h-full">
                                    <div className="flex items-center border border-gray-200 w-full rounded-lg p-4">
                                        <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-xl text-center mr-4 text-red-600 bg-red-200">
                                            <AiOutlineShoppingCart />
                                        </div>
                                        <div>
                                            <h5 className="leading-none mb-2 text-base font-medium font-serif text-gray-700">
                                                Total Order
                                            </h5>
                                            <p className="text-xl font-bold font-serif leading-none text-gray-800">
                                                350
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex h-full">
                                    <div className="flex items-center border border-gray-200 w-full rounded-lg p-4">
                                        <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-xl text-center mr-4 text-red-600 bg-red-200">
                                            <FiRefreshCw />
                                        </div>
                                        <div>
                                            <h5 className="leading-none mb-2 text-base font-medium font-serif text-gray-700">
                                                Pending Order
                                            </h5>
                                            <p className="text-xl font-bold font-serif leading-none text-gray-800">
                                                350
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex h-full">
                                    <div className="flex items-center border border-gray-200 w-full rounded-lg p-4">
                                        <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-xl text-center mr-4 text-red-600 bg-red-200">
                                            {/* shipping icon  */}
                                            <MdOutlineLocalShipping />
                                        </div>
                                        <div>
                                            <h5 className="leading-none mb-2 text-base font-medium font-serif text-gray-700">
                                                Processing  Order
                                            </h5>
                                            <p className="text-xl font-bold font-serif leading-none text-gray-800">
                                                350
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex h-full">
                                    <div className="flex items-center border border-gray-200 w-full rounded-lg p-4">
                                        <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-xl text-center mr-4 text-red-600 bg-red-200">
                                            <AiOutlineCheck />
                                        </div>
                                        <div>
                                            <h5 className="leading-none mb-2 text-base font-medium font-serif text-gray-700">
                                                Complete  Order
                                            </h5>
                                            <p className="text-xl font-bold font-serif leading-none text-gray-800">
                                                350
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='max-w-screen-2xl mx-auto'>
                                <div className='rounded-md font-serif'>
                                    <div className='flex flex-col'>
                                        <h5 className="text-lg font-serif font-medium mb-5">Recent Order</h5>
                                        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                            <div class="align-middle inline-block border border-gray-100 rounded-md min-w-full pb-2 sm:px-6 lg:px-8">
                                                <div class="overflow-hidden border-b last:border-b-0 border-gray-100 rounded-md">
                                                    <table class="table-auto min-w-full border border-gray-100 divide-y divide-gray-200">
                                                        <thead class="bg-gray-50">
                                                            <tr class="bg-gray-100">
                                                                <th scope="col" class="text-left text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider">ID</th>
                                                                <th scope="col" class="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider">OrderTime</th>
                                                                <th scope="col" class="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider">Method</th>
                                                                <th scope="col" class="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider">Status</th>
                                                                <th scope="col" class="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider">Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody class="bg-white divide-y divide-gray-200">
                                                            {
                                                                order.length > 0 ? order.map((item, index) => (
                                                                    <tr key={item._id}>
                                                                        <td class="px-5 py-3 leading-6 whitespace-nowrap">
                                                                            <span class="uppercase text-sm font-medium">{item._id}</span>
                                                                        </td>
                                                                        <td class="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                                                            <span class="text-sm">{item.Odate}</span>
                                                                        </td>
                                                                        <td class="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                                                            <span class="text-sm">{item.payment_type}</span>
                                                                        </td>
                                                                        <td class="px-5 py-3 leading-6 text-center whitespace-nowrap font-medium text-sm">
                                                                            <span class="text-orange-500">{item.ostatus}</span>
                                                                        </td>
                                                                        <td class="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                                                            <span class="text-sm font-bold">{`Rs. ${item.Finalprice}`}</span>
                                                                        </td>
                                                                    </tr>
                                                                ))
                                                                    :
                                                                    <tr> <td colSpan="5" style={{ textAlign: "center" }}><strong>No Records Founds!</strong></td></tr>
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Myaccount

