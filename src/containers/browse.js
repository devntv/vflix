import React, { useContext, useState, useEffect } from 'react';
import { SelectProfileContainer } from './profile';
import { FirebaseContext } from '../context/firebase';
import Loading from '../components/loading';
import Header from '../components/header';
import * as ROUTES from '../constants/routes'
import VfLIX from '../VinhFlix.png'
import Card from '../components/card';
import {FaPlayCircle} from 'react-icons/fa';

export function BrowseContainer({ slides }) {
  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [profile.displayName]);

  useEffect(()=>{
    setSlideRows(slides[category]);
  },[slides, category])

  return profile.displayName ? (
    <>
    {loading ? (
      <Loading src={user.photoURL} />
    ) : (<Loading.ReleaseBody />)}
      <Header.ChildHeader src="jk2" responsive>
            <Header.Frame>
                <Header.Group>
                <Header.Logo to ={ROUTES.HOME} src={VfLIX} alt ="vinh-flix"  />
                <Header.TextLink active={category === 'series' ? 'true' : 'false'} onClick={()=>setCategory('series')}>
                Phim
                </Header.TextLink>
                <Header.TextLink active={category === 'films' ? 'true' : 'false'}  onClick={()=>setCategory('films')}>Series</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                  <Header.Profile>
                    <Header.Picture src={user.photoURL}/>
                    <Header.Dropdown>
                      <Header.Group>
                        <Header.Picture src={user.photoURL}/>
                        <Header.TextLink>{user.displayName}</Header.TextLink>
                      </Header.Group>
                      <Header.Group>
                        <Header.TextLink onClick={()=>firebase.auth().signOut()}>Đăng xuất</Header.TextLink>
                      </Header.Group>
                    </Header.Dropdown>
                  </Header.Profile>
                </Header.Group>
            </Header.Frame>
        <Header.Feature>
        <Header.FeatureCallOut>
          Xem DareDevil tại VinhFlix
        </Header.FeatureCallOut>
          <Header.Text>Xây dựng dựa trên nhân vật nổi tiếng của Marvel, Matt Murdock, con trai một võ sĩ quyền Anh. Cha cậu trở thành nạn nhân của xã hội đen khi ông định đương đầu với chúng. Matt quyết tâm báo thù cho cha cho dù một tai nạn từ nhỏ đã cướp đi con mắt của cậu. Tuy nhiên, cái tai nạn ấy cũng mang đến cho cậu một khả năng ngoại cảm tuyệt vời, cậu có khả năng nhìn, nghe, cảm nhận hơn những người khác.</Header.Text>
          <Header.PlayButton>Xem<FaPlayCircle style={{marginLeft:'5px'}}/></Header.PlayButton>
        </Header.Feature>
      </Header.ChildHeader>
      {/* list card */}
      <Card.Group>
        {slideRows.map((slideItem)=>(
            <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
              <Card.Title>{slideItem.title}</Card.Title>
              <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}   
              </Card.Entities>
              <Card.Feature category={category}>
                <p>hello</p>
              </Card.Feature>
            </Card>
        ))}
      </Card.Group>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
