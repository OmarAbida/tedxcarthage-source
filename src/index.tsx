import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { Col, Container, Row } from 'react-bootstrap'
import { MobileMenu, WebMenu } from './Menu'
import { Timeline } from './Timeline'
import { Speakers } from './Speakers'
import indexStyle from './Styles/index.module.scss'
import { Partners } from './Partners'
import { About } from './About'

const Page: React.FC = () => {

    const [scrolled, setScrolled] = React.useState(0)

    const scrollable = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        const link2 = document.createElement('link');
        link2.href = require('/src/Styles/general.scss');
        link2.rel = 'rel';
        document.getElementsByTagName('head')[0].appendChild(link2);
    }, [])

    const handleScroll = () => {
        if (!scrollable.current) return
        setScrolled(scrollable.current.scrollTop)
    }

    return (
        <Container fluid ref={scrollable} onScroll={handleScroll} className={`${indexStyle.scrollBar} p-0 overflow-auto h-100`}
            style={{
                overflow: 'overlay',
                scrollBehavior: 'smooth'
            }}>

            <Container fluid className='p-0'>

                <div className='d-none d-lg-block' style={{ position: 'absolute', top: 0, width: '100%' }}>
                    <WebMenu />
                </div>

                <Container className='position-relative py-5 px-0' fluid >


                    <div className='position-relative py-5' >

                        <div className='sticky-top d-flex' style={{ top: '60px', placeContent: 'center', minHeight: '100vh', zIndex: 1 }}>

                            <div className='position-absolute'>
                                <video className='w-100 vh-100' autoPlay muted loop style={{ objectFit: 'cover' }}>
                                    <source src={require('./videos/video.mp4')} type='video/mp4' />
                                </video>
                            </div>

                            <Container fluid className='position-absolute' style={{ right: 0 }}>
                                <Row>
                                    <Col xs={6} style={{ margin: 'auto' }}>
                                        <img className='w-100' src={require('./images/tedx.png')} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={10} style={{ display: 'flex', margin: 'auto', minHeight: '75vh' }}>
                                        <img
                                            style={{
                                                width: '100%',
                                                margin: 'auto',
                                                filter: 'opacity(.5)'
                                            }}
                                            src={require('./images/chapelle.png')}
                                        />
                                    </Col>
                                </Row>
                            </Container>
                        </div>

                        <div className='red-square open border-4 border-white border-top border-bottom bottom-0' style={{ zIndex: 3 }} />
                    </div>



                </Container>

                <Container>

                    <About id='about' />

                    <Speakers id='speakers' className='py-5' style={{ marginBottom: '15.5rem' }} />

                    <Partners id='partners' />

                </Container>



                <Timeline id='programme' scrolled={scrolled} />


                <Container id='contacts' className='border-4 border-top border-danger' fluid style={{ background: '#000' }}>
                    <Container className='py-3'>
                        <h3 className='fw-bold text-danger fs-1 border-bottom border-danger border-3 text-uppercase' style={{ width: 'fit-content' }}>
                            Contacts
                        </h3>
                    </Container>
                    <Container className='text-white pb-3'>
                        <Row>
                            <Col xs={12} md={6}>
                                <p>
                                    <span className='text-danger'>Téléphone:</span>&nbsp;+216 23 000 000
                                </p>
                                <p>
                                    <span className='text-danger'>Email:</span>&nbsp;contact@tedxunicar.com
                                </p>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className='ms-auto mapouter position-relative text-end w-100' >
                                    <div className='gmap_canvas'>
                                        <iframe
                                            className={`overflow-hidden ${indexStyle.rounded625} w-100`}
                                            id='gmap_canvas'
                                            src={`https://maps.google.com/maps?q=ihec%20carthage&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                            frameBorder={0}
                                            scrolling='no'
                                            marginHeight={0}
                                            marginWidth={0}
                                            style={{
                                                minHeight: '450px'
                                            }}
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container>
        </Container >
    )
}

const body = document.querySelector('#body')

const root = createRoot(body!)
root.render(<Page />)