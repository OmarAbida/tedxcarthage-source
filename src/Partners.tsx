import * as React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const PartnersMemo: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {

    return (
        <div {...props}>

            <Row className='mb-5'>
                <Col xs={12}>
                    <h2 className='h2 text-white'>Our Partners</h2>
                    <hr className='w-100' style={{ color: '#ff2b06', opacity: 1 }} />
                </Col>
            </Row>

            <Row style={{ marginBottom: '7.5rem' }}>
                <Col xs={3} style={{ margin: 'auto' }}>
                    <img className='w-100' src={require('./images/lepro.png')} />
                </Col>
                <Col xs={3} style={{ margin: 'auto' }}>
                    <img className='w-100' src={require('./images/ifm.png')} />
                </Col>
            </Row>
        </div>
    )
}


export const Partners = React.memo(PartnersMemo)