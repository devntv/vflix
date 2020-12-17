import React, { useContext, useState, useEffect } from 'react';
import { SelectProfileContainer } from './profile';
import { FirebaseContext } from '../context/firebase';
import Loading from '../components/loading';
import Header from '../components/header';
import * as ROUTES from '../constants/routes'
import VfLIX from '../VinhFlix.png'

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
    {loading ? (
      <Loading src={user.photoURL} />
    ) : (<Loading.ReleaseBody />)}
      <Header.ChildHeader src="jk2">
            <Header.Frame>
                <Header.Logo to ={ROUTES.HOME} src={VfLIX} alt ="vinh-flix" />
                <Header.TextLink>Series</Header.TextLink>
                <Header.TextLink>Phim's</Header.TextLink>
            </Header.Frame>
        <Header.Feature>
        <Header.FeatureCallOut>
          Xem DareDevil tại VinhFlix
        </Header.FeatureCallOut>
          <Header.Text>Xây dựng dựa trên nhân vật nổi tiếng của Marvel, Matt Murdock, con trai một võ sĩ quyền Anh. Cha cậu trở thành nạn nhân của xã hội đen khi ông định đương đầu với chúng. Matt quyết tâm báo thù cho cha cho dù một tai nạn từ nhỏ đã cướp đi con mắt của cậu. Tuy nhiên, cái tai nạn ấy cũng mang đến cho cậu một khả năng ngoại cảm tuyệt vời, cậu có khả năng nhìn, nghe, cảm nhận hơn những người khác.</Header.Text>
        </Header.Feature>
      </Header.ChildHeader>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
