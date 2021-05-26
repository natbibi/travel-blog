import React from 'react'
import { AiTwotoneHome, AiFillGithub, AiOutlineTwitter, AiOutlineMail } from "react-icons/ai";

const SocialIcons = () => {

    return (
        <section style={{ fontSize: "30px" }}>
            <a href="https://nat-portfolio.netlify.app/" target="_blank"><AiTwotoneHome /></a>
            <a href="https://github.com/natbibi" target="_blank"><AiFillGithub /></a>
            <a href="https://twitter.com" target="_blank"><AiOutlineTwitter /></a>
            <a href="mailto: natalie.pang@me.com" target="_blank"><AiOutlineMail /></a>
        </section>
    )
}

export default SocialIcons;