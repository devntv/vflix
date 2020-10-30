import React from 'react'
import Footer from '../components/footer'
import '../globalstyles.css'
import { RiNetflixFill} from "react-icons/ri";

export default function FooterContainer(){
    return (
        <Footer>
            <Footer.Title>Bạn có câu hỏi? Liên hệ với Vinh đẹp trai.</Footer.Title>
            {/* <Footer.Break /> */}
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">Câu hỏi thường gặp</Footer.Link>
                    <Footer.Link href="#">Quan hệ với nhà đầu tư</Footer.Link>
                    <Footer.Link href="#">Quyền riêng tư</Footer.Link>
                    <Footer.Link href="#">Kiểm tra tốc độ</Footer.Link>
                    {/* <Footer.Link href="#">Netflix Original</Footer.Link> */}
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Trung tâm trợ giúp</Footer.Link>
                    <Footer.Link href="#">Việc làm</Footer.Link>
                    <Footer.Link href="#">Tùy chọn cookie</Footer.Link>
                    <Footer.Link href="#">Thông báo pháp lý</Footer.Link>
                    {/* <Footer.Link href="#">Netflix Original</Footer.Link> */}
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Tài khoản</Footer.Link>
                    <Footer.Link href="#">Các cách xem</Footer.Link>
                    <Footer.Link href="#">Thông tin doanh nghiệp</Footer.Link>
                    <Footer.Link href="#">Tác phẩm của Netflix</Footer.Link>
                    {/* <Footer.Link href="#">Netflix Original</Footer.Link> */}
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Trung tâm đa phương tiện</Footer.Link>
                    <Footer.Link href="#">Điều khoản sử dụng</Footer.Link>
                    <Footer.Link href="#">Liên hệ với chúng tôi</Footer.Link>
                    {/* <Footer.Link href="#">Tác phẩm của Netflix</Footer.Link> */}
                    {/* <Footer.Link href="#">Netflix Original</Footer.Link> */}
                </Footer.Column>
            </Footer.Row>
            <Footer.Break />
            <RiNetflixFill className="iconNetflix"/>
            <Footer.Text><span style={{color:"red"}}>Netflix</span> <span style={{fontSize:"17px"}}>Việt Nam</span></Footer.Text>
        </Footer>
    )
}