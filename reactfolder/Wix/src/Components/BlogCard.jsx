import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Image from 'react-bootstrap/esm/Image'
import { LuUserCircle2 } from "react-icons/lu";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";

const BlogCard = (props) => {
  return (
    <Container>
        <Row className='blog-ajs'>
            <Col className='col-md-1'></Col>
                <Col className='col-md-5 blogimg'>
                    <Image src={props.image}/>
                </Col>
                <Col className='col-md-5 blog-left'>

                    <Row>
                    <Col className='col-md-6 blog-left-admin'>
                        <LuUserCircle2 className='blogicon-adj' />
                        <p>Admin</p>
                        <span>May 23, 2023  1 min</span>
                    </Col>
                    <Col className='col-md-6'>
                        <PiDotsThreeVerticalBold  className='float-end'/>
                    </Col>

                    <Col className='col-md-12 blog-title'>
                        <h4>{props.title}</h4>
                    </Col>

                    <Col className='col-md-12 blog-para'>
                        <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                    </Col>

                    <Col className='col-md-12 blog-divider'></Col>

                    <Col className='col-md-6 blog-footer-para'>
                        <p>0 views &nbsp;&nbsp;&nbsp;&nbsp;0 comments</p>
                    </Col>
                    <Col className='col-md-6'>
                        <CiHeart  className='float-end foot-icon-adj'/>
                    </Col>

                    </Row>
                    
                </Col>
            <Col className='col-md-1'></Col>
        </Row>
    </Container>
  )
}

export default BlogCard