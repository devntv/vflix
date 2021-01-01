import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
// import FooterContainer from '../containers/footer';
import HeaderContainer from '../containers/header';
import Form from '../components/form';
import '../globalstyles.css';
import * as ROUTES from '../constants/routes';
import { useHistory } from 'react-router-dom';

export default function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInValid = firstName === '' || password === '' || emailAddress === '';

  const handleSignup = (event) => {
    event.preventDefault();

    // fire base do
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.trunc(Math.random() * 5) +1,
          }).then(()=>{
            history.push(ROUTES.BROWSE)
          })
      ).catch((error) =>{
        setFirstName('');
        setEmailAddress('');
        setPassword();
        setError(error.message);
      })
  };

  return <HeaderContainer>
            <Form className="Form">
                <Form.Title>Đăng ký</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSignup} method ="POST">
                    <Form.Input placeholder ='Họ tên' value={firstName} onChange ={({target}) => setFirstName(target.value)}/>
                    <Form.Input placeholder ='Email' value={emailAddress} onChange={({target}) => setEmailAddress(target.value)}/>
                    <Form.Input type="password" value ={password} autoComplete="off" placeholder ='Mật khẩu' onChange={({target}) => setPassword(target.value)}/>
                    <Form.Submit disabled = {isInValid} type ="submit" > Đăng ký </Form.Submit>
                    <Form.Text>
                        Bạn đã có tài khoản? <Form.Link to="/sign-in"> đăng nhập ngay</Form.Link>
                    </Form.Text>
                    {/* <Form.Text>Trang này được bảo vệ bởi google reCAPTCHA để đảm bảo bạn không phải là bot. Tìm hiểu thêm</Form.Text> */}
                </Form.Base>
            </Form>
        </HeaderContainer>;
   
        
}
