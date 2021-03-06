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
  <div className="project pl5-l">
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
        Entertainment’s Premiere streaming platform. Partnering with AMC, we
        created a seamless experience across multiple OTT streaming devices.
        Helping design the network’s very first direct-to-consumer content
        platform.
      </p>

      <p>
        We produced, evolved, and implemented system-wide designs for AppleTV,
        FireTV, Roku, and XBOX. In addition, we designed for iOS on both mobile
        and&nbsp;tablet.
      </p>
      <div className="flex">
        <div className="mr4 mr6-l">
          <p className="f6 fw4 monospace p-break light-gray">Role</p>
          <ul className="f5 fw4 lh-copy">
            <li>Visual Design</li>
            <li>Product Design</li>
            <li>Prototyping</li>
            <li>Interaction Design</li>
            <li>Experience Design</li>
          </ul>
        </div>
        <div>
          <p className="f6 fw4 monospace p-break light-gray">Collaborators</p>
          <ul className="f5 fw4 lh-copy">
            <li>Sam Thibault</li>
            <li>Adam Deutsch</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="block wrap-single">
      <ImageQuery>
        {({ imageTwo, imageThree, imageFour, imageFive }) => [
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
            key="AMC Mock"
            image={imageFive.childImageSharp}
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
