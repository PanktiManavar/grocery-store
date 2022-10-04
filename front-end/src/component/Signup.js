import React, { useState } from "react";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const collectData = async () => {
        //return console.log(name, email, password);

        let usermodel = {
            name,
            email,
            password
        }
        //return console.log(usermodel);
        let result = await fetch('http://localhost:8000/api/user', {
            method: 'post',
            body: JSON.stringify({
                usermodel
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        //console.warn(await results.json());
        return console.log(result);

        if (result) {
            return console.log("hello");
        } else {
            return console.log("jamay");
        }
    }

    return (
        <div className="su-div">
            <h1> Sign Up</h1>
            <input className="inputbox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
            <input className="inputbox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            <input className="inputbox" type="Password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
            <button className="appbutton" type="button" onClick={collectData}>Signup</button>
        </div>
    )
}
export default Signup;