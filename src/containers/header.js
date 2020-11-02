import React from 'react'
import  Header  from '../components/header'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

export default function HeaderContainer({children}){
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to ={ROUTES.HOME} alt="VfLIX" src={logo}/>
                <Header.ButtonLink to ={ROUTES.SIGN_IN} >Đăng Nhập</Header.ButtonLink >      
            </Header.Frame>
            {children}
        </Header>
    )
}