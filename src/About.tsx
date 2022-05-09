import * as React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const AboutMemo: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
    return (
        <div className='py-5' style={{ marginBottom: '10rem' }} {...props}>

            <Col xs={12}>
                <h2 className='h2 text-white'>About</h2>
                <hr className='w-100' style={{ color: '#ff2b06', opacity: 1 }} />
            </Col>

            <Row style={{ marginBottom: '7.25rem', marginTop: '3.25rem' }}>
                <Col xs={6} style={{ margin: 'auto' }}>
                    <img className='w-100' src={require('./images/tedx.png')} />
                </Col>
            </Row>

            <Container className='mb-5'>
                <h3 className='fw-bold text-white mb-3'>
                    About TEDx, x = independently organized event
                </h3>
                <p className='text-white' style={{ lineHeight: '1.5rem' }}>
                    In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussionand connection. These local, self-organized events are branded TEDx, where x = independently organized TED event.
                </p>
            </Container>

            <Container>
                <h3 className='fw-bold text-white mb-3'>
                    About TED
                </h3>
                <p className='text-white' style={{ lineHeight: '1.5rem' }}>
                    TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world’s leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.
                </p>
            </Container>
        </div>
    )
}

export const About = React.memo(AboutMemo)