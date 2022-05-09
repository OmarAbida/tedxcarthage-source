import * as React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import indexStyle from './Styles/index.module.scss'

const SpeakersMemo: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {

    // const [activeSpeaker, setActiveSpeaker] = React.useState<Speaker>(Speakers[0])


    // React.useEffect(() => {
    //     let inter = setInterval(() => {
    //         let active = -1
    //         Speakers.map(speaker => {
    //             if (speaker.name === activeSpeaker.name) active = Speakers.indexOf(speaker)
    //         })
    //         if (active + 1 < Speakers.length)
    //             setActiveSpeaker(Speakers[active + 1])
    //         else
    //             setActiveSpeaker(Speakers[0])
    //     }, 5000)

    //     return () => {
    //         clearInterval(inter)
    //     }
    // }, [activeSpeaker])


    return (
        <div {...props}>

            <Row className='mb-5'>
                <Col xs={12}>
                    <h2 className='h2 text-white'>Our Speaker</h2>
                    <hr className='w-100' style={{ color: '#ff2b06', opacity: 1 }} />
                </Col>
            </Row>

            <Row className='d-flex' style={{ marginBottom: '5rem' }}>

                <Col xs={2}>
                    <div role='button' className={indexStyle.speakerButton}>
                        It
                    </div>
                </Col>

                <Col xs={2}>
                    <div role='button' className={indexStyle.speakerButton}>
                        Aerospace
                    </div>
                </Col>

                <Col xs={2}>
                    <div role='button' className={indexStyle.speakerButton}>
                        Medical
                    </div>
                </Col>

                <Col xs={2}>
                    <div role='button' className={indexStyle.speakerButton}>
                        Law
                    </div>
                </Col>

                <Col xs={2}>
                    <div role='button' className={indexStyle.speakerButton}>
                        Finance
                    </div>
                </Col>

            </Row>


            <Row style={{ marginBottom: '5rem' }}>
                <Col xs={9} className='ms-auto'>
                    <div className={`${indexStyle.speakerContainer}`}>
                        <Row className='h-100 p-2'>
                            <Col xs={4} className='d-flex'>
                                <img
                                    className='h-100 w-100'
                                    src={require('/src/images/elon.jpg')}
                                    style={{
                                        objectFit: 'cover'
                                    }}
                                />
                            </Col>
                            <Col xs={8} className='p-2'>
                                <h4 className='fw-bold h3 text-white'>Elon Musk</h4>
                                <p className='text-white fs-5'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia sit reiciendis placeat harum excepturi hic dicta, odit in eveniet ad repellendus dignissimos quae incidunt. Beatae quaerat optio minus praesentium officia?
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>


            <Row className='d-flex' style={{
                marginBottom: '7.5rem',
                justifyContent: 'right'
            }}>

                <Col xs={2}>
                    <div role='button' className={indexStyle.speakerButton}>
                        Education
                    </div>
                </Col>

                <Col xs={2}>
                    <div role='button' className={indexStyle.speakerButton}>
                        Cinema
                    </div>
                </Col>

                <Col xs={2}>
                    <div role='button' className={indexStyle.speakerButton}>
                        Modeling
                    </div>
                </Col>

                <Col xs={3}>
                    <div role='button' className={indexStyle.speakerButton}>
                        Social Media
                    </div>
                </Col>

            </Row>


        </div>
    )
}

export const Speakers = React.memo(SpeakersMemo)