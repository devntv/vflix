import React from 'react'
import { Container, Title, Picture, List, Item, Name, Warning } from './styles/profile'

export default function Profiles ({children, ...restProps}){

    return <Container {...restProps}>{children}</Container>
}

Profiles.Title = function ProfilesTitle ({children, ...restProps}){

    return <Title {...restProps}>{children}</Title>
}

Profiles.List = function ProfilesList ({children, ...restProps}){

    return <List {...restProps}>{children}</List>
}

Profiles.User = function ProfilesUser ({children, ...restProps}){

    return <Item {...restProps}>{children}</Item>
}

Profiles.Picture = function ProfilesPicture ({src, ...restProps}){

    return <Picture {...restProps} src={src ? `/images/users/${src}.png` : `/images/misc/loadingxx.gif`} />
}
Profiles.Name = function ProfilesName ({children, ...restProps}){

    return <Name {...restProps}>{children}</Name>
}

Profiles.Warning = function ProfilesWarning ({children, ...restProps}){
    return <Warning {...restProps}>{children}</Warning>
}