import * as React from 'react'
import { Col, Container, Row } from "react-bootstrap"
import timelineStyle from './Styles/timeline.module.scss'

export const Timeline: React.FC<{ scrolled: number } & React.HTMLAttributes<HTMLDivElement>> = ({ scrolled, ...props }) => {

    const containerRef = React.useRef<HTMLDivElement>(null)
    const [show, setShow] = React.useState(false)
    const [showCursor, setShowCursor] = React.useState(false)


    const handleScroll = () => {
        if (!containerRef.current) return
        setShow((scrolled - containerRef.current?.offsetTop) / window.innerHeight > -.75)
    }

    React.useEffect(() => {
        handleScroll()
    }, [scrolled, containerRef])




    return (
        <Container fluid className='py-5 px-0' style={{
            background: `url(${require('./images/timeline-bg.jpg')})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}
            {...props}
        >

            <Disclamer scrolled={scrolled} parentOffset={containerRef.current?.offsetTop} />

            <Container ref={containerRef} className='overflow-hidden position-relative' fluid >

                <ProgressLine scrolled={scrolled} parentOffset={containerRef.current?.offsetTop} />

                <Row className='gy-3'>

                    <Col md={12}>
                        <TimeLineCard
                            position='right'
                            header='08:00 - 09:00'
                            body='Check in'
                            scrolled={scrolled}
                            parentOffset={containerRef.current?.offsetTop}
                        />
                    </Col>

                    <Col md={12}>
                        <TimeLineCard
                            position='left'
                            header='09:00 - 09:15'
                            body='Orchestra'
                            scrolled={scrolled}
                            parentOffset={containerRef.current?.offsetTop}
                        />
                    </Col>

                    <Col md={12}>
                        <TimeLineCard
                            position='right'
                            header='09:15 - 09:30'
                            body='Opening'
                            scrolled={scrolled}
                            parentOffset={containerRef.current?.offsetTop}
                        />
                    </Col>

                    <Col md={12}>
                        <TimeLineCard
                            position='left'
                            header='09:30 - 10:30'
                            body='3 Speakers'
                            scrolled={scrolled}
                            parentOffset={containerRef.current?.offsetTop}
                        />
                    </Col>

                    <Col md={12}>
                        <TimeLineCard
                            position='right'
                            header='10:30 - 10:45'
                            body='Musical Break'
                            scrolled={scrolled}
                            parentOffset={containerRef.current?.offsetTop}
                        />
                    </Col>

                    <Col md={12}>
                        <TimeLineCard
                            position='left'
                            header='12:15 - 12:30'
                            body='Musical break'
                            scrolled={scrolled}
                            parentOffset={containerRef.current?.offsetTop}
                        />
                    </Col>

                    <Col md={12}>
                        <TimeLineCard
                            position='right'
                            header='12:30 - 13:15'
                            body='Global Village'
                            scrolled={scrolled}
                            parentOffset={containerRef.current?.offsetTop}
                        />
                    </Col>

                    <Col md={12}>
                        <TimeLineCard
                            position='left'
                            header='13:15 - 14:15'
                            body='3 Speakers'
                            scrolled={scrolled}
                            parentOffset={containerRef.current?.offsetTop}
                        />
                    </Col>


                    <Col md={12}>
                        <TimeLineCard
                            position='right'
                            header='14:15 - 14:30'
                            body='Closing Ceremony'
                            scrolled={scrolled}
                            parentOffset={containerRef.current?.offsetTop}
                        />
                    </Col>

                </Row>


            </Container>

        </Container>
    )
}

interface TimeLineCardI {
    scrolled: number
    parentOffset: number | undefined
    position: 'left' | 'right'
    header: string
    body: string
}
const TimeLineCard: React.FC<TimeLineCardI> = ({ scrolled, header, body, position, parentOffset }) => {

    const elementRef = React.useRef<HTMLDivElement>(null)
    const [show, setShow] = React.useState(false)

    const handleScroll = () => {
        if (!elementRef.current || !parentOffset) return
        setShow((scrolled - (elementRef.current.offsetTop + parentOffset)) / window.innerHeight > -.75)
    }

    React.useEffect(() => {
        handleScroll()
    }, [scrolled, elementRef])


    const _className = show
        ? `${timelineStyle.timelineCard} ${timelineStyle[position]} ${timelineStyle.show}`
        : `${timelineStyle.timelineCard} ${timelineStyle[position]} ${timelineStyle.hide}`

    return (
        <Col ref={elementRef} xs={5} className={_className}>
            <h4 className="text-white">
                {header}
            </h4>
            <p className="text-danger m-0">
                {body}
            </p>
        </Col>
    )
}


const ProgressLine: React.FC<{ scrolled: number, parentOffset: number | undefined }> = ({ scrolled, parentOffset }) => {

    const elementRef = React.useRef<HTMLDivElement>(null)

    const [squares, setSquares] = React.useState<React.ReactElement[]>([])

    const handleScroll = () => {
        if (!elementRef.current || !parentOffset) return
        if (squares.length * 25 > elementRef.current.offsetHeight) return

        // Make sure to squares line will end at the last quarter of the screen
        else if ((scrolled - (elementRef.current.offsetTop + parentOffset)) / window.innerHeight < -.75) {
            setSquares([])
            return
        }

        else {
            const heightToFill = ((window.innerHeight - parentOffset) + scrolled) - window.innerHeight * .25

            // Prevent adding new squares if all the progress line if filled
            if (heightToFill + 25 > elementRef.current.offsetHeight) return

            let _newSquares: React.ReactElement[] = []

            while (_newSquares.length * 25 < heightToFill) {
                if (_newSquares.length % 2 === 0) _newSquares.push(<TSSquare key={_newSquares.length} />)
                else _newSquares.push(<TESquare key={_newSquares.length} />)
            }

            setSquares([..._newSquares])
        }
    }

    React.useEffect(() => {
        handleScroll()
    }, [scrolled, elementRef])

    return (
        <div ref={elementRef} className='position-absolute m-auto h-100' style={{
            inset: 0,
            width: '25px',
            opacity: 1,
            zIndex: 0,
            border: '2px  var(--bs-danger)',
        }}
        >
            {squares}
        </div>
    )
}


const TSSquare: React.FC = () => {
    return (
        <div className='border-danger border-3 border-top border-start' style={{ width: '25px', height: '25px' }} />
    )
}

const TESquare: React.FC = () => {
    return (
        <div className='border-danger border-3 border-top border-end' style={{ width: '25px', height: '25px' }} />
    )
}


/**
 * This the component that contains the animated text in the header of the timeline
 */
const Disclamer: React.FC<{ scrolled: number, parentOffset: undefined | number }> = ({ scrolled, parentOffset }) => {


    const elementRef = React.useRef<HTMLDivElement>(null)
    const [show, setShow] = React.useState(false)

    const handleScroll = () => {
        if (!elementRef.current || !parentOffset) return
        setShow((scrolled - (elementRef.current.offsetTop + parentOffset)) / window.innerHeight > -.75)
    }

    React.useEffect(() => {
        handleScroll()
    }, [scrolled, elementRef])


    const _className = show
        ? `text-white fw-bold mx-auto text-center ${timelineStyle.opacity} ${timelineStyle.show} ${timelineStyle.cssTyping}`
        : `text-white fw-bold mx-auto text-center ${timelineStyle.opacity} ${timelineStyle.hide} ${timelineStyle.cssTyping}`

    return (
        <Container className='my-4' style={{ filter: 'drop-shadow(2px 4px 6px black)' }}>
            <Col ref={elementRef} xs='auto' className={_className}>
                <p className='mx-auto my-0' style={{ fontSize: '3.5rem' }}>
                    An adventure
                </p>

                <p className='mx-auto my-0' style={{ fontSize: '2.15rem' }}>
                    is wating for you <span className='text-danger'>here.</span>
                </p>
            </Col>
        </Container>
    )
}

