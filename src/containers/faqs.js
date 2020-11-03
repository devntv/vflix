import React from 'react'
import Accordion from '../components/accordion'
import OptForm from '../components/formmail'
import faqsData from '../fixtures/faqs.json'
import '../globalstyles.css'

export default function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Câu hỏi thường gặp</Accordion.Title>
            {faqsData.map(item => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header className="transitionForm">{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
            <Accordion.Item>
            </Accordion.Item>

            <OptForm>
                <OptForm.Text>Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.</OptForm.Text>
                <OptForm.Break />
                <OptForm.Input placeholder="Nhập địa chỉ Email" />
                <OptForm.Button>dùng thử miễn phí</OptForm.Button>
            </OptForm>
        </Accordion>
    )
}