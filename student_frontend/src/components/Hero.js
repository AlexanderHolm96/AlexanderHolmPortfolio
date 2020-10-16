import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid
import {
  HeroWrapper,
} from "../elements"

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  // console.log(data)

  return (
    <HeroWrapper>
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <h1>Jag heter Alex!</h1>
            <div className="underline"></div>
            <h4>Elev på TUC YH</h4>
            - 🔭 Jag jobbar med att skapa en portfolio site
            <br />
            - 🌱 Just nu lär jag mig React, Gatsby, GraphQL and Strapi
            <br />
            - 🤔 Jag är en aktiv supporter av AC Milan!
            <br />
            - 💬 Fråga mig om italiensk fotboll.
            <br />
            
            <Link to="/contact" className="btn">
              kontakta mig
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
    </HeroWrapper>
  )
}
export default Hero
