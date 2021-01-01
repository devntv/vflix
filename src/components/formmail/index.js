import React, {useState} from 'react'
import {Container, Input, Button, Text, Break} from "../formmail/styles/otp-form"
import Loader from 'react-loader-spinner'

export default function OptForm ({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({...restProps}){
    return <Input {...restProps} />
}

OptForm.Button = function OptFormButton({children, ...restProps}){
    const [btnLoading, setBtnLoading] = useState(false);
    const handleBtnLoading = ()=>{
        setBtnLoading(true);

        setTimeout(()=>{
            setBtnLoading(false);

        },3000)
    }
    return (
        <Button {...restProps} onClick={handleBtnLoading} disabled={btnLoading}>
            {btnLoading && (<Loader type="TailSpin" color="orange"  height={40}  width={60}/>)}
            {btnLoading && <span style={{color:"orange"}}>VinhFlix hiện đang bảo trì...</span>}
            {!btnLoading && <span> {children} <img src="/images/icons/toggle-right.png" alt="try it now"/></span> }      
        </Button>
    )
}

OptForm.Text = function OptFormText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

OptForm.Break = function OptFormBreak({...restProps}){
    return <Break {...restProps}/>
}