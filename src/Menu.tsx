import * as React from 'react'
import { Col, Container, Offcanvas, Row } from "react-bootstrap"
import menuStyle from "./Styles/menu.module.scss"

export const WebMenu: React.FC = () => {
    return (
        <Container fluid className={menuStyle.menuContainer}>
            <Row className='ms-auto'>
                <Col xs='auto' className={`${menuStyle.menuBtn} ${menuStyle.animatedUnderline}`}>
                    <a href="#about">
                        About
                    </a>
                </Col>

                {/* <Col xs='auto' className={`${menuStyle.menuBtn} ${menuStyle.animatedUnderline}`}>
                    <a href="#speakers">
                        Team
                    </a>
                </Col> */}

                <Col xs='auto' className={`${menuStyle.menuBtn} ${menuStyle.animatedUnderline}`}>
                    <a href="#speakers">
                        Speakers
                    </a>
                </Col>

                <Col xs='auto' className={`${menuStyle.menuBtn} ${menuStyle.animatedUnderline}`}>
                    <a href="#partners">
                        Partners
                    </a>
                </Col>
                <Col xs='auto' className={`${menuStyle.menuBtn} ${menuStyle.animatedUnderline}`}>
                    <a href="#programme">
                        Program
                    </a>
                </Col>
                <Col xs='auto' className={`${menuStyle.menuBtn} ${menuStyle.animatedUnderline}`}>
                    <a href="#contacts">
                        Contact
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export const MobileMenu: React.FC = () => {

    const [show, setShow] = React.useState(false)

    return (
        <>
            <button className="bg-danger rounded-circle text-white position-fixed p-2"
                onClick={() => setShow(!show)}
                style={{
                    top: '15px',
                    right: '15px',
                    zIndex: 1024
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>

            <Offcanvas
                show={show}
                onHide={() => setShow(!show)}
                placement='end'
                className='border-start border-white'
                style={{
                    background: 'linear-gradient(180deg, #000000c9 50%, #000000ab)',
                    WebkitBackdropFilter: 'blur(4px)',
                    backdropFilter: 'blur(4px)'
                }}
            >

                <Offcanvas.Header closeButton closeVariant='white'>
                    <Offcanvas.Title>
                        <Row>
                            <Col style={{ width: '33.33%' }} className='pe-0'>
                                <img className='w-100' src={require('./images/tedx-logo.png')} />
                            </Col>

                            <Col xs='auto' className='d-flex align-self-end'>
                                <span className='fw-bold text-white'>
                                    UniversityOfCarthage
                                </span>
                            </Col>
                        </Row>
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <Row className='h-100'>
                        <Col xs={12} className={`align-self-center ${menuStyle.menuBtn} ${menuStyle.animatedUnderline} fw-bold fs-2`}>Présentation</Col>
                        <Col xs={12} className={`align-self-center ${menuStyle.menuBtn} ${menuStyle.animatedUnderline} fw-bold fs-2`}>Intervenants</Col>

                        <Col xs={12} className={`align-self-center ${menuStyle.menuBtn} ${menuStyle.animatedUnderline} fw-bold fs-2`}>
                            <a href="#programme">
                                Programme
                            </a>
                        </Col>

                        <Col xs={12} className={`align-self-center ${menuStyle.menuBtn} ${menuStyle.animatedUnderline} fw-bold fs-2`}>Partenaires</Col>
                        <Col xs={12} className={`align-self-center ${menuStyle.menuBtn} ${menuStyle.animatedUnderline} fw-bold fs-2`}>
                            <a href="#sponsors">
                                Sponsors
                            </a>
                        </Col>
                        <Col xs={12} className={`align-self-center ${menuStyle.menuBtn} ${menuStyle.animatedUnderline} fw-bold fs-2`}>
                            <a href="#contacts">
                                Contact
                            </a>
                        </Col>
                    </Row>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}