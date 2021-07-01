import React from 'react';
import {Inner, Container, Item, Pane, Title, SubTitle, Image, Slide, SlideWrapper, SlideImg, SlideContent, SlideSubContent, SlideGifContent} from './styles/jumbotron'

export default function Jumbotron({children ,direction ='row', ...restProps}){
    return (
       <Item  {...restProps}>
           <Inner direction ={direction}>
           {children}
           </Inner>
       </Item>
    )
}

Jumbotron.Container = function JumbotronContainer({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>;
}

Jumbotron.Pane = function JumbotronPane({children, ...restProps}){
    return <Pane {...restProps}>{children}</Pane>;
}

Jumbotron.Title = function JumbotronTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>;
}

Jumbotron.SubTitle = function JumbotronSubTitle({children, ...restProps}){
    return <SubTitle {...restProps}>{children}</SubTitle>;
}

Jumbotron.Slide = function JumbotronSlide({children, ...restProps}){
    return <Slide {...restProps}>{children}</Slide>
}

Jumbotron.SlideWrapper = function JumbotronWrapper({children, ...restProps}){
    return <SlideWrapper {...restProps}>{children}</SlideWrapper>
}

Jumbotron.SlideImg = function JumbotronImg({children, ...restProps}){
    return <SlideImg {...restProps}>{children}</SlideImg>
}

Jumbotron.SlideContent = function JumbotronContent({children, ...restProps}){
    return <SlideContent {...restProps}>{children}</SlideContent>
}
Jumbotron.SlideSubContent = function JumbotronSubContent({children, ...restProps}){
    return <SlideSubContent {...restProps}>{children}</SlideSubContent>
}

Jumbotron.SlideGifContent = function JumbotronGifContent({srcGif}){
    return <SlideGifContent srcGif={srcGif}/>
}

Jumbotron.Image = function JumbotronImage({...restProps}){
    return <Image {...restProps}/>
}
