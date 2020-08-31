import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import Slide from '../assets/images/slide.jpg';

export default function Home() {
    return (
        <div className="hero-banner">
            <Row>
                <Col lg={4}>
                    <div className="slide">
                        <img src={Slide} alt="" className="mw-100" />
                    </div>
                </Col>
                <Col lg={8}>
                    <div className="info">
                        <h2>HI THERE !</h2>
                        <h1>I'm <span>Misbah Hussain</span></h1>
                        <p>Having been working in the tech industry for more than 2 years, I have acquired a repertoire of skills spanning
                            across web design, application design, front-end development, WordPress theming, web optimization, developer
                            support and beyond. I am selective about the projects I choose to work on, because if it's something I don't
                            believe in and wouldn't build for myself, I can't be expected to build it for you with the passion required to do it
                            justice. In addition to my skills I believe to work done in fast-pace maintaining quality, client satisfaction and
                            meeting project deadline.</p>
                        <Button color="primary">More About Me</Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
