// import React from "react"
// import { socialI, socialT, socialF } from "../data/dummydata"

// const Footer = () => {
//   return (
//     <>
//       <footer>
//         {socialF.map((item) => (
//           <a href="/">
//             <i data-aos='zoom-in'>{item.icon}</i>
//           </a>
//         ))}
//         {socialT.map((item) => (
//           <a href="/">
//             <i data-aos='zoom-in'>{item.icon}</i>
//           </a>
//         ))}
//         {socialI.map((item) => (
//           <a href="/">
//             <i data-aos='zoom-in'>{item.icon}</i>
//           </a>
//         ))}
//         <p>All Right Reserved 2024</p>
//       </footer>
//     </>
//   )
// }

// export default Footer

import React from "react"
import { Link } from "react-router-dom"
import { socialI, socialT, socialF } from "../data/dummydata"

const Footer = () => {
  return (
    <>
      <footer>
        {socialF.map((item, index) => (
          <Link to="/" key={index}>
            <i data-aos='zoom-in'>{item.icon}</i>
          </Link>
        ))}
        {socialT.map((item, index) => (
          <Link to="/" key={index}>
            <i data-aos='zoom-in'>{item.icon}</i>
          </Link>
        ))}
        {socialI.map((item, index) => (
          <Link to="/" key={index}>
            <i data-aos='zoom-in'>{item.icon}</i>
          </Link>
        ))}
        <p>All Right Reserved 2024</p>
      </footer>
    </>
  )
}

export default Footer
