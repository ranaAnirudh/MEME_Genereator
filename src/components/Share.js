import React from 'react'
import {FacebookShareButton,WhatsappShareButton} from "react-share"
import {FacebookIcon,WhatsappIcon} from "react-share"
function Share({url}) {
  return (
    <>
        <FacebookShareButton
            url={url}
            quote={"Checkout This MEME!!!"}
            hashtag='#React'
        >
            <FacebookIcon logoFillColor='white' round={true} />
        </FacebookShareButton>
      <WhatsappShareButton 
        url={url}
        title="Checkout This MEME !!!"
      >
        <WhatsappIcon logoFillColor='white' round={true} />   
      </WhatsappShareButton>
      
    </>
  )
}

export default Share
