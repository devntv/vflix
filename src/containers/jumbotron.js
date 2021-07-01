import React from 'react';
import Jumbotron from '../components/jumbotron';
import jumboData from '../fixtures/jumbo.json'
import '../globalstyles.css'


export default function JumbotronContainer() {
  return (
    <Jumbotron.Container >
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction} className="BottomBody" >

          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>

          <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt} />
            {item.slide ? <Jumbotron.Slide>
                <Jumbotron.SlideImg src={item.slideImg}/> 
                <Jumbotron.SlideWrapper>
                  <Jumbotron.SlideContent >{item.slideContent}</Jumbotron.SlideContent >
                  <Jumbotron.SlideSubContent >{item.slideSubContent}</Jumbotron.SlideSubContent >
                </Jumbotron.SlideWrapper>
                <Jumbotron.SlideGifContent srcGif = {item.slideGif}/>
            </Jumbotron.Slide> : null}
          </Jumbotron.Pane>
          
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}


