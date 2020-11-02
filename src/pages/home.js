import React from 'react'
import Feature from '../components/feature'
import OptForm from '../components/formmail'
import FaqsContainer from '../containers/faqs'
import FooterContainer from '../containers/footer'
import HeaderContainer from '../containers/header'
import JumbotronContainer from '../containers/jumbotron'


export default function Home() {
    return (
        <>
            <HeaderContainer>
            <Feature>
                    <Feature.Title>
                    Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác.
                    </Feature.Title>
                    <Feature.SubTitle>
                    Xem ở mọi nơi. Hủy bất kỳ lúc nào.
                    </Feature.SubTitle>
                </Feature>
                
            <OptForm>
                <OptForm.Text>Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.</OptForm.Text>
                <OptForm.Break />
                <OptForm.Input placeholder="Nhập địa chỉ Email" />
                <OptForm.Button>dùng thử miễn phí</OptForm.Button>  
            </OptForm>
             <OptForm.Text>Chỉ các thành viên mới mới đủ điều kiện nhận được ưu đãi này.</OptForm.Text>
            </HeaderContainer>

            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
           
        </>
    )
}

 {/* <OptForm.Text>Chỉ các thành viên mới mới đủ điều kiện nhận được ưu đãi này.</OptForm.Text> */}