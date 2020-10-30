import React from 'react'
import Accordion from '../components/accordion'
import faqsData from '../fixtures/faqs.json'

export default function FaqsContainer(){
    return (
        <Accordion>
            <Accordion.Title>Câu hỏi thường gặp</Accordion.Title>
                {faqsData.map(item =>(
                      <Accordion.Item key={item.id}>
                          <Accordion.Header>{item.header}</Accordion.Header>
                          <Accordion.Body>{item.body}</Accordion.Body>
                      </Accordion.Item>
                ))}
            <Accordion.Item>

            </Accordion.Item>
        </Accordion>
    )
}