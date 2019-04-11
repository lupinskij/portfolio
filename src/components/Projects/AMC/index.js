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

const AMC = () => (
  <div className="project begin-pres">
    <ImageQuery>
      {({ imageOne }) => [
        <Image
          key="AMC Hero"
          image={imageOne.childImageSharp}
          type="fluid"
          alt="AMC web screens"
        />,
      ]}
    </ImageQuery>
    <div className="wrap-pres">
      <p>
        While working with the team at Handsome, a holistic experience design
        agency, I had the opportunity to help lead the design for AMC Network
        Entertainment’s OTT streaming platform. We partnered with AMC to help
        implement and carry designs across OTT platforms including AppleTV,
        Roku, FireTV, and XBOX. In addition, we got to work on their iOS
        platforms for mobile and tablet.
      </p>
      <div className="flex">
        <div className="mr4 mr6-l">
          <p className="f6 monospace p-break">Role</p>
          <ul className="f5 lh-copy">
            <li>Visual Design</li>
            <li>Product Design</li>
            <li>Prototyping</li>
            <li>Interaction Design</li>
            <li>Experience Design</li>
          </ul>
        </div>
        <div>
          <p className="f6 monospace p-break">Collaborators</p>
          <ul className="f5 lh-copy">
            <li>Sam Thibault</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="block wrap-single">
      <ImageQuery>
        {({ imageTwo, imageThree, imageFour }) => [
          <Image
            key="AMC Mast"
            image={imageTwo.childImageSharp}
            type="fluid"
            alt="AMC OTT screens"
          />,
          <StyledImage
            key="AMC TV"
            image={imageThree.childImageSharp}
            type="fluid"
            alt="AMC OTT screens"
          />,
          <StyledImage
            key="AMC Mobile"
            image={imageFour.childImageSharp}
            type="fluid"
            alt="AMC mobile screens"
          />,
        ]}
      </ImageQuery>
    </div>
  </div>
)

export default AMC
