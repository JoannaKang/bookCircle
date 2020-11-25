import React, { useState, FunctionComponent } from 'react';
import { useForm } from "react-hook-form";
import './Welcome.scss'
import { Link, useHistory } from 'react-router-dom';
import { getUser } from '../ApiService/serverApiService'

type welcomeProps = {
    setUserLoggedIn: Function,
    getUserData: Function,
}

const Welcome: FunctionComponent<welcomeProps> = ({ setUserLoggedIn, getUserData }) => {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const onSubmit = (async (data: {name: string; password: string}) => {
        if(!data.password || !data.name){
            alert("Please Enter Your Password and Username!")
        }
        console.log(data.name, 'DATA')
        const response = await getUserData(data.name);
        console.log(response, 'RESPONSE')
        history.push('/dashboard');
    });

    return (
        <div className="wrapper">
            <h2 className="title">Welcome to BookCircle</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" required placeholder="Name" name="name" ref={register({ required: true })} />
                <input type="password" required placeholder="Password" name="password" ref={register({ required: true })} />
                <button className="submitButton" type="submit">Sign In</button>
            </form>
            <div className="alignButton">
            <Link to="/register">
                <button className="registerButton">Register</button>
            </Link>
            </div>
        </div>
    )

}

export default Welcome;



