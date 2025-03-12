import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss'

const Authentication = () => {
    
    // const logGoogleRedirect = async () => {
    //     const { user } = await signInGoogleRedirect();
    //     console.log('logGoogleRedirect:', user);

    // }
    return (
        <div className='authentications-container'>
            <SignInForm />
            <SignUpForm />
            {/* <button onClick={logGoogleRedirect}>Sign in Redirect</button> */}
        </div>
    )
}
export default Authentication;