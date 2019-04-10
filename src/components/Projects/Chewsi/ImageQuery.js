import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

function ImageQuery({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          imageOne: file(relativePath: { eq: "chewsi-hero.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imageTwo: file(relativePath: { eq: "chewsi-flows.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imageThree: file(relativePath: { eq: "chewsi-screens.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imageFour: file(relativePath: { eq: "chewsi-web.jpg" }) {
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
