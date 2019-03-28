import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

export default class Image extends React.Component {
  render() {
    const { alt, image, type, ...rest } = this.props

    if (type === 'fixed' && image.fixed)
      return <Img critical alt={alt} fixed={image.fixed} {...rest} />
    else if (type === 'small' && image.small)
      return <Img critical alt={alt} fluid={image.small} {...rest} />
    else if (type === 'large' && image.large)
      return <Img critical alt={alt} fluid={image.large} {...rest} />
    else if (image.fluid) return <Img alt={alt} fluid={image.fluid} {...rest} />
    else return <img alt={alt} src={image} {...rest} />
  }
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  type: PropTypes.oneOf(['fixed', 'fluid', 'large', 'small']),
}

Image.defaultProps = {}
