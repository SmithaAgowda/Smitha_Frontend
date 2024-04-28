import React from 'react'
import Footer from '../Components/Footer'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Image from 'react-bootstrap/esm/Image'
import img1 from '../assets/image/c1.jpg'
import img2 from '../assets/image/c2.jpg'
import img3 from '../assets/image/c3.jpg'

const ClientAlbum = () => {
  return (
    <>
      <section className='client'>
        <h2>CLIENT ALBUMS</h2>

        <Container>
          <Row>
            <Col className='col-md-4 gedi'>
              <Image src={img1}/>
              <h3>GREEN EDITORIAL</h3>
              <h5>Client : Herbal Magzine</h5>
            </Col>
            <Col className='col-md-4 bbr'>
              <Image src={img2}/>
              <h3>BREAD BAKING <br />RECEPIES</h3>
              <h5>Client : The Bake Blog</h5>
            </Col>
            <Col className='col-md-4 fc'>
              <Image src={img3}/>
              <h3>FRENCH COOKBOOK</h3>
              <h5>Client : La Peche</h5>
            </Col>
          </Row>
        </Container>

      </section>

      <Footer />
    </>
  )
}

export default ClientAlbum