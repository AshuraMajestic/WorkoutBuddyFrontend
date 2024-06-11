import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'
import {
    GlobalStyles,
    Head,
    Text,
    Link,
    Input,
    Form,
    Container,
    FormContainer,
    Button,
    OverlayContainer,
    OverlayPanel,
    Overlay
} from "../styles/login.style";

export default function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginemail, setLoginEmail] = useState("");
    const [loginpassword, setLoginPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [panelActive, setPanelActive] = useState(false);

    const SignUp = async () => {
        try {
            let result = await fetch(`https://workoutbuddyservice.onrender.com/register`, {
                // let result = await fetch(`http://localhost:5000/register`, {
                method: 'POST',
                body: JSON.stringify({ name, email, password }),
                headers: { 'Content-Type': 'application/json' },
            });
            result = await result.json();
            if (result.error) {
                setError(result.error);
                return;
            }
            localStorage.setItem('user', JSON.stringify(result.result));
            localStorage.setItem('token', result.token);
            navigate("/");
        } catch (error) {
            setError("Sign up failed. Please try again.");
        }
    }

    const LoginIn = async () => {
        try {
            let result = await fetch(`https://workoutbuddyservice.onrender.com/login`, {
                // let result = await fetch(`http://localhost:5000/login`, {
                method: 'POST',
                body: JSON.stringify({ email: loginemail, password: loginpassword }),
                headers: { 'Content-Type': 'application/json' }
            });
            result = await result.json();
            if (result.error) {
                setError("Login failed. Please check your email and password.");
                return;
            }
            if (result.token) {
                localStorage.setItem('user', JSON.stringify(result.user));
                localStorage.setItem('token', result.token);
                navigate('/');
            } else {
                setError("Login failed. Please try again.");
            }
        } catch (error) {
            setError("Login failed. Please try again.");
        }
    }

    const onSignUpEvent = () => setPanelActive(true);
    const onSignInEvent = () => setPanelActive(false);

    return (
        <div className='center mt-5 mb-5'>
            <Fragment>
                <GlobalStyles />
                <Container id="container" className={`${panelActive ? "right-panel-active" : ""} container-fluid`}>
                    <FormContainer className="sign-up-container">
                        <Form onSubmit={e => e.preventDefault()}>
                            <Head>Create Account</Head>
                            <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            {error && <p className="error">{error}</p>}
                            <Button onClick={SignUp}>Sign Up</Button>
                        </Form>
                    </FormContainer>
                    <FormContainer className="sign-in-container">
                        <Form onSubmit={e => e.preventDefault()}>
                            <Head>Sign In</Head>
                            <Input type="email" placeholder="Email" value={loginemail} onChange={(e) => setLoginEmail(e.target.value)} />
                            <Input type="password" placeholder="Password" value={loginpassword} onChange={(e) => setLoginPassword(e.target.value)} />
                            {error && <p className="error">{error}</p>}
                            <Link href="#">Forgot your password?</Link>
                            <Button onClick={LoginIn}>Sign In</Button>
                        </Form>
                    </FormContainer>
                    <OverlayContainer>
                        <Overlay>
                            <OverlayPanel className="overlay-left">
                                <Head>Welcome Back!</Head>
                                <Text>To keep connected with us please login with your personal info</Text>
                                <Button className="ghost" onClick={onSignInEvent}>Sign In</Button>
                            </OverlayPanel>
                            <OverlayPanel className="overlay-right">
                                <Head>Hello, Friend!</Head>
                                <Text>Enter your personal details and start journey with us</Text>
                                <Button className="ghost" onClick={onSignUpEvent}>Sign Up</Button>
                            </OverlayPanel>
                        </Overlay>
                    </OverlayContainer>
                </Container>
            </Fragment>
        </div>
    )
}
