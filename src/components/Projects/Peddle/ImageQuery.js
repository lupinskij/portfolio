import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

function ImageQuery({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          imageOne: file(relativePath: { eq: "peddle-hero-toy.png" }) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imageTwo: file(relativePath: { eq: "peddle-screens.png" }) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imageThree: file(relativePath: { eq: "peddle-web.png" }) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imageFour: file(relativePath: { eq: "peddle-mobile.png" }) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imageFive: file(relativePath: { eq: "peddle-pickup.png" }) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imageSix: file(relativePath: { eq: "peddle-library.png" }) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 91) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imageSeven: file(relativePath: { eq: "peddle-system.png" }) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => children(data)}
    />
  )
}

ImageQuery.propTypes = {
  children: PropTypes.func.isRequired,
}

ImageQuery.defaultProps = {}

export default ImageQuery
