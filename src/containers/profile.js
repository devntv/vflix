import React from 'react';
import * as ROUTES from '../constants/routes'
import VfLIX from '../VinhFlix.png'
import Header from '../components/header';
import Profiles from '../components/profiles';
import { ImNotification } from 'react-icons/im';

export function SelectProfileContainer({user, setProfile}){
    
    return <>
        <Header background={false}>
            <Header.Frame>
                <Header.Logo to ={ROUTES.HOME} src={VfLIX} alt ="vinh-flix" />
            </Header.Frame>
        </Header>

        <Profiles>
            <Profiles.Title>ai đang xem ?</Profiles.Title>
            <Profiles.List>
                <Profiles.User onClick={()=>setProfile({displayName: user.displayName, photoURL: user.photoURL})} >
                    <Profiles.Picture  src={user.photoURL} />
                    <Profiles.Name>{user.displayName}</Profiles.Name>
                </Profiles.User>
            </Profiles.List>
            <Profiles.Warning><ImNotification style={{marginRight:'5px', color: 'yellow'}}/>Lần đầu đăng nhập, khi click vào avatar nếu website hiển thị sai nguyên nhân có thể do trình duyệt. Vui lòng nhấn F5 để nội dung hiển thị lại tốt nhất.</Profiles.Warning>
        </Profiles>
    </>
    
}