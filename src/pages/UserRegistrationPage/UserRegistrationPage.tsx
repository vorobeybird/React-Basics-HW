import * as React from 'react';
import { IRegistrationForm } from '../../types/Auth';
import './style.css';


const UserRegistrationPage = () => {

    const [formData, setFormData] = React.useState<IRegistrationForm>({
        email: '',
        name: '',
        surname: '',
        password: '',
    });

    const [isFormValid, setFormValid] = React.useState<boolean>(false);

    const { name, password } = formData;

    const validateForm = (form: IRegistrationForm) => {
        const validationResult = Object.values(form).every(value => value.length <= 15 && value.length > 4);
        setFormValid(validationResult);
    }

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value });
        validateForm(formData);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.dir(formData);
    }

    console.log(isFormValid);

    return (
        <div>
            <form className='registration__container' onSubmit={handleSubmit}>
                <input type='text' onInput={handleInputChange} name='email' />
                <input type='text' onInput={handleInputChange} name='name' />
                <input type='text' onInput={handleInputChange} name='surname' />
                <input type='text' onInput={handleInputChange} name='password' />
                <button type='submit' value='Register' disabled={!isFormValid} className='button__submit' > Register </button>
            </form>
        </div>);
}

export default UserRegistrationPage;