import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cfmPassword, setcfmPassword] = useState("");

    const createUser = (e) => {
        setFirstName("");
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, cfmPassword };
        console.log("Welcome", newUser);
    };

    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} /><br></br>
                    <span className="error">{firstName.length >0 && firstName.length <2 ? "must be 2 long": ""}</span>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} vlaue={lastName} /><br></br>
                    <span className="error">{lastName.length >0 && lastName.length <2 ? "must be 2 long": ""}</span>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} /><br></br>
                    <span className="error">{email.length >0 && email.length <5 ? "must be 5 long": ""}</span>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} /><br></br>
                    <span className="error">{password.length >0 && password.length <8 ? "must be 8 long": ""}</span><br></br>
                    <span className="error">{password != cfmPassword ? "passwords must match":""}</span>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={(e) => setcfmPassword(e.target.value)} value={cfmPassword} /><br></br>
                    <span className="error">{cfmPassword.length >0 && cfmPassword.length <8 ? "must be 8 long ": ""}</span><br></br>
                    <span className="error">{password != cfmPassword ? "passwords must match":""}</span>
                </div>
                <input type="submit" value="Create User" />
            </form>
            <h3>Your Form Data</h3>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {cfmPassword}</p>
        </div>
    );
};

export default UserForm;