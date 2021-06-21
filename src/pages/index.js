// import * as React from 'react'
// import Layout from '../components/layout'
// import { StaticImage } from 'gatsby-plugin-image'

// const IndexPage = () => {
//   return (
//     <Layout pageTitle="Home Page">
//       <section class="hero is-primary">
//         <div class="hero-body">
//           <p class="title">
//             Hero title
//           </p>
//           <p class="subtitle">
//             Hero subtitle
//           </p>
//         </div>
//       </section>
//       <p>I'm making this by following the Gatsby Tutorial.</p>
//       <StaticImage
//         alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
//         src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
//       />
//     </Layout>
//   )
// }

// export default IndexPage


import React from "react"
import Layout from '../components/layout'

// import "../styles/bulma-custom.scss"

const IndexPage = () => {
  return (
    <Layout>

      <div className="container">
        <div className="columns">
          <div className="column">
            <h2 className="title is-2">Level 2 heading</h2>
            <p className="content">Cool content. Using Bulma!</p>
          </div>

          <div className="column is-four-fifths">
            <h2 className="title is-2">Level 2 heading</h2>
            <p className="content">This column is cool too!</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage