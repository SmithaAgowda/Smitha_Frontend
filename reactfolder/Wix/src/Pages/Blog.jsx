import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { CiSearch } from "react-icons/ci";
import BlogCard from '../Components/BlogCard';
import img1 from '../assets/image/bl1.webp';
import img2 from '../assets/image/bl2.webp';
import img3 from '../assets/image/bl3.webp';
import img4 from '../assets/image/bl4.webp';
import img5 from '../assets/image/bl5.webp';
import img6 from '../assets/image/bl6.webp';

const Blog = () => {
  return (

    <>
       <section className='blog'>
        <h2>MY BLOG</h2>

        <Container className='blog-inner'>
            <Row>
              <Col className='col-md-1'></Col>
              <Col className='col-md-5'>
                <p className='allpost'>All Posts</p>
              </Col>
              <Col className='col-md-5'>
                <CiSearch className='float-end mt-2'/>
              </Col>
              <Col className='col-md-1'></Col>
            </Row>

            <Row>
              <Col className='col-md-12'>
                <BlogCard image={img1} title="The holiday special"/>
              </Col>
              <Col className='col-md-12'>
                <BlogCard image={img2}  title="Simple backdrops for food shots"/>
              </Col>
              <Col className='col-md-12'>
                <BlogCard image={img3} title="Before the drip"/>
              </Col>
              <Col className='col-md-12'>
                <BlogCard image={img4} title="Styling your shots"/>
              </Col>
              <Col className='col-md-12'>
                <BlogCard image={img5} title="The perfect sizzle"/>
              </Col>
              <Col className='col-md-12'>
                <BlogCard image={img6} title="Eating with your eyes first"/>
              </Col>
          </Row>
        </Container>

      </section> 
    </>
   
  )
}

export default Blog