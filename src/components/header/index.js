import React from 'react'
import {Link as ReactRouterLink} from 'react-router-dom'
import {Background, ButtonLink, Container, Logo, Feature, Text, ChildHeader, FeatureCallOut, Link} from './styles/header'

export default function Header({background= true, children, ...restProps}){

    return background ? <Background {...restProps}>{children}</Background> : children;

}

Header.Feature = function HeaderFeature({children, ...restProps}){
    return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({children, ...restProps}){
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}


Header.ChildHeader = function HeaderChildHeader({children, ...restProps}){
    return <ChildHeader {...restProps}>{children}</ChildHeader>
}

Header.Text = function HeaderText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

Header.TextLink = function HeaderTextLink({children, ...restProps}){
    return <Link {...restProps}>{children}</Link>
}

Header.Frame = function HeaderFrame ({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Header.ButtonLink = function HeaderButtonLink ({children, ...restProps}){
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Logo = function HeaderLogo ({logoLink, ...restProps}){
    return (
        <ReactRouterLink to ={logoLink}>
            <Logo {...restProps} />
        </ReactRouterLink>
    )
}