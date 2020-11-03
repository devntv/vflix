import React, { createContext, useContext, useState } from 'react'
import {Title, Body, Item, Inner, Header, Container} from './styles/accordion'
import '../../globalstyles.css'


const ToogleContext = createContext();

export default function Accordinon({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordinon.Title = function AccordinonTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

// Accordinon.Frame = function AccordinonFrame({ children, ...restProps }) {
//     return <Frame {...restProps}>{children}</Frame>
// }

Accordinon.Item = function AccordinonItem({ children, ...restProps }) {

    const [toogleShow, setToogleShow] = useState(false);
    return (
        <ToogleContext.Provider value={{ toogleShow, setToogleShow }}>
            <Item {...restProps}>{children}</Item>
        </ToogleContext.Provider>
    )
}

Accordinon.Header = function AccordinonHeader({ children, ...restProps }) {
    const { toogleShow, setToogleShow } = useContext(ToogleContext)
    return (
        <Header  onClick={() => setToogleShow((toogleShow) => !toogleShow)} {...restProps}>
            {children}

        {/* <pre>{JSON.stringify(toogleShow, null ,2)}</pre> */}
            {toogleShow ? (
                <img src="/images/icons/close-cancel.png" alt="closecl"/>
            ):(
                <img src="/images/icons/addBtn.png" alt="add"/>
            )}
        </Header>
    )
}

Accordinon.Body = function AccordinonBody({ children, ...restProps }) {
    const { toogleShow } = useContext(ToogleContext)
    return toogleShow ? <Body className="transitionForm" {...restProps}>{children}</Body> : null;
}
