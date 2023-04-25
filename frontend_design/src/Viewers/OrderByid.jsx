import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

import styled from "styled-components";
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
        <FormContainer>
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
                                <th scope="colo" class="text-left text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider">SR.</th>
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
                            <span class="text-2xl font-serif font-bold text-red-500 block">Rs. 167</span>
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
        </FormContainer>
    )
}

export default OrderByid;

const FormContainer = styled.div`{
    .shadow,
.shadow-sm {
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-sm {
    --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
}

.bg-white {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255/var(--tw-bg-opacity));
}

.rounded-lg {
    border-radius: 0.5rem;
}

.p-8 {
    padding: 2rem;
}

.bg-indigo-50 {
    --tw-bg-opacity: 1;
    background-color: rgb(238 242 255/var(--tw-bg-opacity));
}

.rounded-t-xl {
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
}

@media (min-width: 1024px) {
    .lg\:items-center {
        align-items: center;
    }
}

@media (min-width: 1024px) {
    .lg\:flex-row {
        flex-direction: row;
    }
}

@media (min-width: 768px) {
    .md\:flex-row {
        flex-direction: row;
    }
}

.pb-4 {
    padding-bottom: 1rem;
}

.border-gray-50 {
    --tw-border-opacity: 1;
    border-color: rgb(249 250 251/var(--tw-border-opacity));
}

.border-b {
    border-bottom-width: 1px;
}

.justify-between {
    justify-content: space-between;
}

.flex-col {
    flex-direction: column;
}

.flex {
    display: grid;
}

.uppercase {
    text-transform: uppercase;
}

.font-bold {
    font-weight: 700;
}

.text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
}

.font-serif {
    font-family: Inter, sans-serif;
}

blockquote,
dd,
dl,
figure,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
pre {
    margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: inherit;
    font-weight: inherit;
}

@media (min-width: 1024px) {
    .lg\:text-right {
        text-align: right;
    }
}

.text-left {
    text-align: left;
}

@media (min-width: 1024px) {
    .lg\:mt-0 {
        margin-top: 0;
    }
}

@media (min-width: 768px) {
    .md\:mt-0 {
        margin-top: 0;
    }
}

.font-semibold {
    font-weight: 600;
}

.text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
}

.mt-4 {
    margin-top: 1rem;
}


.cols {
    float: left;
    width: 25%;
    padding: 20px;
    height: 40%;
}

@media (min-width: 1024px) {
    .lg\:overflow-visible {
        overflow: visible;
    }
}

.px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
}

.overflow-hidden {
    overflow: hidden;
}

.my-10 {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
}

.overflow-x-auto {
    overflow-x: auto;
}

.-my-2 {
    margin-top: -0.5rem;
    margin-bottom: -0.5rem;
}

.border-gray-100 {
    --tw-border-opacity: 1;
    border-color: rgb(243 244 246/var(--tw-border-opacity));
}

.border {
    border-width: 1px;
}

.table-auto {
    table-layout: auto;
}

.min-w-full {
    min-width: 100%;
}

table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
}

.p-10 {
    padding: 2.5rem;
}

.bg-emerald-50 {
    --tw-bg-opacity: 1;
    background-color: rgb(236 253 245/var(--tw-bg-opacity));
}

.border-t {
    border-top-width: 1px;
}

.text-gray-600 {
    --tw-text-opacity: 1;
    color: rgb(75 85 99/var(--tw-text-opacity));
}

.font-bold {
    font-weight: 700;
}

.text-sm {
    font-size: .875rem;
    line-height: 1.25rem;
}

.block {
    display: block;
}

.mb-1 {
    margin-bottom: 0.25rem;
}

.text-gray-500 {
    --tw-text-opacity: 1;
    color: rgb(107 114 128/var(--tw-text-opacity));
}

.text-red-500 {
    --tw-text-opacity: 1;
    color: rgb(239 68 68/var(--tw-text-opacity));
}

.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(.4, 0, .2, 1);
    transition-duration: .15s;
}

.text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255/var(--tw-text-opacity));
}

.font-semibold {
    font-weight: 600;
}

.text-sm {
    font-size: .875rem;
    line-height: 1.25rem;
}

.font-serif {
    font-family: Inter, sans-serif;
}

.py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

.px-5 {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
}

.bg-emerald-500 {
    --tw-bg-opacity: 1;
    background-color: rgb(16 185 129/var(--tw-bg-opacity));
}

.rounded-md {
    border-radius: 0.375rem;
}

.justify-center {
    justify-content: center;
}

.items-center {
    align-items: center;
}

.h-10 {
    height: 2.5rem;
}

.flex {
    display: flex;
}

.mb-3 {
    margin-bottom: 0.75rem;
}

[role=button],
button {
    cursor: pointer;
}

[type=button],
[type=reset],
[type=submit],
button {
    background-color: transparent;
    background-image: none;
}

button,
select {
    text-transform: none;
}

button,
input,
optgroup,
select,
textarea {
    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
}
}`;