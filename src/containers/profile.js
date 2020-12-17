import React from 'react';
import * as ROUTES from '../constants/routes'
import VfLIX from '../VinhFlix.png'
import Header from '../components/header';
import Profiles from '../components/profiles';

export function SelectProfileContainer({user, setProfile}){
    return <>
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo to ={ROUTES.HOME} src={VfLIX} alt ="vinh-flix" />
            </Header.Frame>
        </Header>

        <Profiles>
            <Profiles.Title>Ai đang xem ?</Profiles.Title>
            <Profiles.List>
                <Profiles.User onClick={()=>setProfile({displayName: user.displayName, photoURL: user.photoURL})} >
                    <Profiles.Picture  src={user.photoURL} />
                    <Profiles.Name>{user.displayName}</Profiles.Name>
                </Profiles.User>
            </Profiles.List>
        </Profiles>
    </>
    
}