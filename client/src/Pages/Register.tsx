// Create User + Send to the DataBase
// Create API service and use the Router function in the backend
// CSS

import { useForm } from 'react-hook-form';
import './Register.scss';
import {useState} from 'react';
import React, { FunctionComponent } from 'react';
import { createUser } from '../ApiService/serverApiService'; 
import Search from './Search';


const Register = () => {
    const { register, handleSubmit, errors } = useForm();
    const [formInput, setFormInput] = useState({});
    const [formState, setFormState] = useState(false);
    const [searchState, setSearchState] = useState(false);
    const [userData, setUserData] = useState({})

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

    const onSubmitTwo =  (bookdata: {booklist?: string[]; yearlyTarget?: number}) => {
        const target = bookdata.yearlyTarget;
        const response = createUser({ ...formInput, yearlyTarget: target });
        setUserData(response);
        setSearchState(true);
    };



    

    return (
        <div className="form-wrapper">
            {!formState && <div>
            <h2>Register : </h2>
            <form className="submit-form" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Name" name="name" ref={register({ required: true })} />
                <input type="text" placeholder="Username" name="username" ref={register({ required: true })} />
                <input type="password" placeholder="New Password" name="NewPassword" ref={register({ required: true, min: 8 })} />
                <input type="password" placeholder="Confirm Password" name="ConfirmPassword" ref={register({ required: true, min: 8 })} />
                {/* {link}     */}
                    <button className="submitButton" type="submit">Submit</button>
            </form>
            </div>}
            {formState && !searchState && <div>
                <h2>Enter Favourite Books :</h2>
                <form className="submit-form" onSubmit={handleSubmit(onSubmitTwo)}>
                    <input type="number" placeholder="Yearly Target" name="yearlyTarget" ref={register({ required: true, min: 1 })} />
                    <button className="submitButton" type="submit">Submit</button>
                </form>
            </div>}
            {/* {searchState &&
                <div>
                    <Search ></Search>
                </div>
            } */}
        </div>
    
        )
}//


export default Register;
