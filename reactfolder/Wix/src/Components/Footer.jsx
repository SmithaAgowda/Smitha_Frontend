import React from 'react'
import { FaPinterestP } from "react-icons/fa";
import { LiaFacebookF } from "react-icons/lia";
import { LiaTwitter } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <FaPinterestP className='icon-adj'/>
      <LiaFacebookF className='icon-adj'/>
      <LiaTwitter className='icon-adj'/>
      <FaInstagram className='icon-adj'/>
      <p>© 2035 by The Art of Food. Powered and secured by Wix</p>
    </footer>
  )
}

export default Footer