import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

function ImageQuery({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          imageOne: file(relativePath: { eq: "seveneleven-hero.png" }) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imageTwo: file(relativePath: { eq: "seveneleven-grid.png" }) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 95) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imageThree: file(relativePath: { eq: "seveneleven-robot.png" }) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imageFour: file(relativePath: { eq: "seveneleven-interact.png" }) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imageFive: file(relativePath: { eq: "seveneleven-system.png" }) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imageSix: file(relativePath: { eq: "seveneleven-col1.png" }) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imageSeven: file(relativePath: { eq: "seveneleven-col2.png" }) {
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
