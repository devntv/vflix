import React, { useState , useContext} from 'react'
import {FirebaseContext} from '../context/firebase'
import FooterContainer from '../containers/footer'
import HeaderContainer from '../containers/header'
import Form from '../components/form'
import "../globalstyles.css"
import * as ROUTES from '../constants/routes'
import {useHistory} from 'react-router-dom'


export default function SignIn() {
    const history = useHistory();

    const {firebase} = useContext(FirebaseContext)

    const [addressEmail, setAddressEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // check form input , emai va passwword
    const isInValid = password ==='' || addressEmail === '';
    const handleSignin =(e)=>{
        e.preventDefault();
        // fire base back-end work in here
            firebase
            .auth()
            .signInWithEmailAndPassword(addressEmail, password)
            .then(()=>{
                //push
                history.push(ROUTES.BROWSE);
            })
            .catch((error)=>{
                setAddressEmail('');
                setPassword('');
                setError(error.message);
            })


    }

    return (
        <>
            <HeaderContainer  >
                <Form className="Form">
                    <Form.Title>Đăng Nhập</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input
                            placeholder="Địa chỉ Email"
                            value={addressEmail}
                            onChange={({ target }) => setAddressEmail(target.value)} //(e) =>setAddressEmai(e.target.value)
                        />

                        <Form.Input
                            type="password"
                            autoComplete= "off"
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)} //(e) =>setPassword(e.target.value)
                        />

                        <Form.Submit 
                        disabled={isInValid}
                        type="submit"> Đăng nhập </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        New to Vinh-Flix? <Form.Link to ="/sign-up"> Dang ky ngay!</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        this page is protected by google reCAPTCHA to ensure you are not a bot. Learn More
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}   