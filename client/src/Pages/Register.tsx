// Create User + Send to the DataBase
// Create API service and use the Router function in the backend
// CSS

import { useForm } from 'react-hook-form';
import './Register.scss';
import {useState} from 'react';
import React, { FunctionComponent } from 'react';
import { createUser } from '../ApiService/serverApiService'; 
import {
    Link
} from "react-router-dom";






// const link = <Link to='/registerBookInfo'> <button className="submitButton" type="submit">Submit</button></Link>


const Register = () => {
    const { register, handleSubmit, errors } = useForm();
    const [formInput, setFormInput] = useState({});
    const [formState, setFormState] = useState(false);
    const [bookData, setBookData] = useState({});

    const onSubmit = (data: {Name: string; Username: string; NewPassword: string; ConfirmPassword: string}) => {
        console.log(data, 'REGISTER');
        if(data.NewPassword === data.ConfirmPassword){
            setFormInput(data);
            setFormState(true)
        } else {
            alert('Passwords Do Not Match!')
        }
    };

    const onSubmitTwo = (bookdata: {booklist: string[]; yearlyTarget: number}) => {
        setBookData(bookdata);
        console.log(bookData);
    }


    

    return (
        <div className="form-wrapper">
            {!formState && <div>
            <h2>Register:</h2>
            <form className="submit-form" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Name" name="Name" ref={register({ required: true })} />
                <input type="text" placeholder="Username" name="Username" ref={register({ required: true })} />
                <input type="password" placeholder="New Password" name="NewPassword" ref={register({ required: true })} />
                <input type="password" placeholder="Confirm Password" name="ConfirmPassword" ref={register({ required: true })} />
                {/* {link}     */}
                    <button className="submitButton" type="submit">Submit</button>
            </form>
            </div>}
            {formState && <div>
                <h2>Enter Favourite Books:</h2>
                <form className="submit-form" onSubmit={handleSubmit(onSubmitTwo)}>
                    <input type="text" placeholder="Yearly Target" name="Yearly Target" ref={register({ required: true })} />
                    <button type="submit">Submit</button>
                </form>
            </div>}
        </div>
    
        )
}//


export default Register;
