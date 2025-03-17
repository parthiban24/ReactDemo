import { useState } from "react";
import {
    signInWithGooglePopup,
    signAuthUserWithEmailAndPassowrd
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component'
import './sign-in-form.styles.scss'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

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
             await signAuthUserWithEmailAndPassowrd(
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
                    <Button buttonType={BUTTON_TYPE_CLASSES.inverted} type="submit">Sign In</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={logGoogleUser}>Google Sign IN</Button>
                </div>
            </form>
        </div>
    )
}
export default SignInForm;