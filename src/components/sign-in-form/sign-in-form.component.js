import { useState } from "react";
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signAuthUserWithEmailAndPassowrd
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component'
import './sign-in-form.styles.scss'
import Button from '../button/button.component';

const defaultFields = {
    email: '',
    password: ''
}
const SignInForm = () => {
    const [formfields, setFormfields] = useState(defaultFields);
    const { email, password } = formfields;

    const logGoogleUser = async () => {
        try {
            await signInWithGooglePopup();
        }
        catch (error) {
            console.log('logGoogleUser:', error);
        }
    }

    const clearAllFields = () => {
        setFormfields(defaultFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signAuthUserWithEmailAndPassowrd(
                email,
                password);
            clearAllFields();
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormfields({ ...formfields, [name]: value });
    }
    return (
        <div className="sign-up-container">
            <h2>Already have an account ?</h2>
            <span>Sign In with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label="Email"
                    required
                    type="email"
                    onChange={handleChange}
                    name="email"
                    value={email} />


                <FormInput
                    label="Password"
                    required
                    type="password"
                    onChange={handleChange}
                    name="password"
                    value={password} />

                <div className="buttons-container">
                    <Button buttonType='inverted' type="submit">Sign Up</Button>
                    <Button type="button" buttonType='google' onClick={logGoogleUser}>Google Sign IN</Button>
                </div>
            </form>
        </div>
    )
}
export default SignInForm;