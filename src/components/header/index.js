import React, {useState} from 'react'
import {Link as ReactRouterLink} from 'react-router-dom'
import Profiles from '../profiles';
import {
    Background,
    ButtonLink, 
    Container, 
    Logo, 
    Group, 
    Profile, 
    Dropdown, 
    Picture, 
    Feature, 
    Text, 
    ChildHeader, 
    FeatureCallOut, 
    Link,
    Search,
    SearchIcon,
    SearchInput,
    PlayButton,
   
} from './styles/header'

export default function Header({background= true, children, ...restProps}){

    return background ? <Background {...restProps}>{children}</Background> : children;

}

Header.Feature = function HeaderFeature({children, ...restProps}){
    return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({children, ...restProps}){
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Picture = function HeaderPicture({src, ...restProps}){
    return <Picture {...restProps} src={`/images/users/${src}.png`} />
}

Header.Search = function HeaderSearch({searchTerm, setSearchTerm, ...restProps}){
    const [searchActive, setSearchActive] = useState(false);

    return (
        <Search {...restProps}>
            <SearchIcon onClick={()=> setSearchActive(searchActive => !searchActive)}>
                <img src="/images/icons/search.png" alt="search" />
            </SearchIcon>

            <SearchInput value={searchTerm} onChange={({target}) =>setSearchTerm(target.value)}
                placeholder=" tìm kiếm theo phim"
                active={searchActive}
            />
        </Search>
    )
}

Header.Profile = function HeaderProfile({children, ...restProps}){
    return <Profile {...restProps}>{children}</Profile>
}

Header.Text = function HeaderText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

Header.ChildHeader = function HeaderChildHeader({children, ...restProps}){
    return <ChildHeader {...restProps}>{children}</ChildHeader>
}

Header.Dropdown = function HeaderDropdown({children, ...restProps}){
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.TextLink = function HeaderTextLink({children, ...restProps}){
    return <Link {...restProps}>{children}</Link>
}

Header.PlayButton = function HeaderPlayButton({children, ...restProps}){
    return <PlayButton {...restProps}>{children}</PlayButton>
}


Header.Frame = function HeaderFrame ({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Header.Group = function HeaderGroup ({children, ...restProps}){
    return <Group {...restProps}>{children}</Group>
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