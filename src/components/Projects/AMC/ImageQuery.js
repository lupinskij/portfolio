import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

function ImageQuery({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          imageOne: file(relativePath: { eq: "amc-television.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 75) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imageTwo: file(relativePath: { eq: "amc-screens.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imageThree: file(relativePath: { eq: "amc-tv.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 95) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imageFour: file(relativePath: { eq: "amc-mobile.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imageFive: file(relativePath: { eq: "amc-mock.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2000) {
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
