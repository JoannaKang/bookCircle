// Create User + Send to the DataBase
// Create API service and use the Router function in the backend
// CSS

import { useForm } from 'react-hook-form';
import './Register.scss';
import React, { useState, FunctionComponent, useEffect } from 'react'
import { createUser } from '../ApiService/serverApiService'; 
import Search from './Search';
import { Link, useHistory } from 'react-router-dom';
import {
    getUser,
} from '../ApiService/serverApiService'

type registerProps = {
    setUserLoggedIn: Function,
    getUserData: Function,
}

const Register: FunctionComponent<registerProps> = ({ setUserLoggedIn, getUserData }) => {
    const { register, handleSubmit, errors } = useForm();
    const [formInput, setFormInput] = useState({});
    const [formState, setFormState] = useState(false);
    const history = useHistory();
    // const [searchState, setSearchState] = useState(false);

    const onSubmit = (data: {name: string; username?: string; NewPassword?: string; ConfirmPassword?: string; password?: string}) => {
        console.log(data, 'REGISTER');
        if(data.NewPassword === data.ConfirmPassword){
            data.password = data.NewPassword;
            delete data.NewPassword;
            delete data.ConfirmPassword;
            delete data.username;
            console.log(data, 'FINAL DATA');
            setFormInput(data);
            setFormState(true);
        } else {
            alert('Passwords Do Not Match!')
        }
    };

    const onSubmitTwo = async (bookdata: {booklist?: string[]; yearlyTarget?: number}) => {
        const target = bookdata.yearlyTarget;
        const response = await createUser({ ...formInput, yearlyTarget: target });
        console.log(response.name, 'HAPPY')
        await setUserLoggedIn(response);
        await getUserData(response.name);
        history.push('/search');
    };



    

    return (
        <div className="form-wrapper">
            {!formState && <div>
            <h2>Register : </h2>
            <form className="submit-form" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" required placeholder="Name" name="name" ref={register({ required: true })} />
                <input type="text" required placeholder="Username" name="username" ref={register({ required: true })} />
                <input type="password" required placeholder="New Password" name="NewPassword" ref={register({ required: true, min: 8 })} />
                <input type="password" required placeholder="Confirm Password" name="ConfirmPassword" ref={register({ required: true })} />
                {/* {link}     */}
                    <button className="submitButton" type="submit">Submit</button>
            </form>
            </div>}
            {formState && <div>
                <h2>Enter Favourite Books :</h2>
                <form className="submit-form" onSubmit={handleSubmit(onSubmitTwo)}>
                    <input type="number" placeholder="Yearly Target" name="yearlyTarget" ref={register({ required: true, min: 1 })} />
                    <button className="submitButton" type="submit">Submit</button>
                </form>
            </div>}
        </div>
    
        )
}//


export default Register;
