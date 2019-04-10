import React from 'react'
import styled from 'styled-components'
import { Image } from 'components'
import ImageQuery from './ImageQuery'

const StyledImage = styled(props => <Image {...props} />)`
  margin: 11vw 0 0;

  @media (max-width: 767px) {
    margin: 50px 0 0;
  }
`

const Chewsi = () => (
  <div className="project">
    <ImageQuery>
      {({ imageOne }) => [
        <Image
          key="Chewsi Hero"
          image={imageOne.childImageSharp}
          type="fluid"
          alt="Delta Dental Chewsi mobile screens"
        />,
      ]}
    </ImageQuery>
    <div className="wrap-pres">
      <p>
        Delta Dental’s goal is to make affordable dental care available to
        everyone, giving customers another reason to smile. As a result, I
        worked with their team to design a ground up marketplace and discovery
        for dental patients. Providing a dentist and procedure search engine
        designed to increase coverage selection and conversion rates, while
        reducing attrition.
      </p>
      <p className="f6 monospace">Role</p>
      <ul className="f5 lh-copy">
        <li>Product Design</li>
        <li>UI / UX Design</li>
        <li>Information Architecture</li>
        <li>Prototyping & Concepts</li>
        <li>Interaction Design</li>
        <li>Experience Design</li>
      </ul>
    </div>
    <div className="block wrap-single">
      <ImageQuery>
        {({ imageTwo, imageThree, imageFour }) => [
          <Image
            key="Chewsi Flow"
            image={imageTwo.childImageSharp}
            type="fluid"
            alt="Delta Dental Chewsi flows"
          />,
          <StyledImage
            key="Chewsi Mobile"
            image={imageThree.childImageSharp}
            type="fluid"
            alt="Delta Dental Chewsi mobile screens"
          />,
          <StyledImage
            key="Chewsi Web"
            image={imageFour.childImageSharp}
            type="fluid"
            alt="Delta Dental Chewsi website screen"
          />,
        ]}
      </ImageQuery>
    </div>
  </div>
)

export default Chewsi
