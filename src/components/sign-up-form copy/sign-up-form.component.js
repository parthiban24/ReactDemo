import { useState } from "react";
import { createAuthUserWithEmailAndPassowrd, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component'
import './sign-up-form.styles.scss'
import Button from '../button/button.component';

const defaultFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignUpForm = () => {
    const [formfields, setFormfields] = useState(defaultFields);
    const { displayName, email, password, confirmPassword } = formfields;

    const clearAllFields = () => {
        setFormfields(defaultFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Password and ConfirmPassword not matched..!')
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassowrd(
                email,
                password
            );
            await createUserDocumentFromAuth(user, { displayName })
            clearAllFields();
        }
        catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            }
            console.log('User creation error:', error);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormfields({ ...formfields, [name]: value });
    }
    return (
        <div className="sign-up-container">
            <h2>Don't have an account ?</h2>
            <span>Sign Up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    required
                    type="text"
                    onChange={handleChange}
                    name="displayName"
                    value={displayName} />

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


                <FormInput
                    label="Conform Password"
                    required
                    type="password"
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword} />
                <Button buttonType='google' type="submit">Sign Up</Button>
            </form>
        </div>
    )
}
export default SignUpForm;