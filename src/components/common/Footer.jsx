import React from "react"
import { socialI, socialT, socialF } from "../data/dummydata"

const Footer = () => {
  return (
    <>
      <footer>
        {socialF.map((item) => (
          <a href="/">
            <i data-aos='zoom-in'>{item.icon}</i>
          </a>
        ))}
        {socialT.map((item) => (
          <a href="/">
            <i data-aos='zoom-in'>{item.icon}</i>
          </a>
        ))}
        {socialI.map((item) => (
          <a href="/">
            <i data-aos='zoom-in'>{item.icon}</i>
          </a>
        ))}
        <p data-aos='zoom-in'>All Right Resceved 2023</p>
      </footer>
    </>
  )
}

export default Footer
