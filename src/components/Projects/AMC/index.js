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
          className="banner-wrap"
          alt="AMC web screens"
        />,
      ]}
    </ImageQuery>
    <div className="wrap-pres">
      <h6 className="f7 fw4 monospace p-break ttu tracked black-40">
        [001] <span className="black">AMC Premiere</span>
      </h6>
      <p>
        While working with the team at Handsome, a holistic experience design
        agency, I helped lead the design for AMC Television Network’s Premiere
        streaming platform. Partnering with AMC, we created a seamless
        experience across multiple OTT streaming devices. Helping design the
        network’s very first direct-to-consumer content platform.
      </p>
      <p>
        We produced, evolved, and implemented system-wide designs for AppleTV,
        FireTV, Roku, and XBOX. In addition, we designed for iOS on both mobile
        and tablet.
      </p>
      <div className="flex">
        <div className="mr4 mr6-l">
          <p className="f7 fw4 monospace p-break ttu tracked black-40">Role</p>
          <ul className="f5 fw3 fw4-ns lh-double">
            <li>Visual Design</li>
            <li>Product Design</li>
            <li>Prototyping</li>
            <li>Interaction Design</li>
            <li>Experience Design</li>
          </ul>
        </div>
        <div>
          <p className="f7 fw4 monospace p-break ttu tracked black-40">
            Collaborators
          </p>
          <ul className="f5 fw3 fw4-ns lh-double">
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
            className="img-wrap br2 br0-m"
            alt="AMC OTT screens"
          />,
          <StyledImage
            key="AMC TV"
            image={imageThree.childImageSharp}
            type="fluid"
            className="img-wrap br2 br0-m"
            alt="AMC OTT screens"
          />,
          <StyledImage
            key="AMC Mobile"
            image={imageFour.childImageSharp}
            type="fluid"
            className="img-wrap br2 br0-m"
            alt="AMC mobile screens"
          />,
          <StyledImage
            key="AMC Mock"
            image={imageFive.childImageSharp}
            type="fluid"
            className="img-wrap br2 br0-m"
            alt="AMC OTT screens"
          />,
        ]}
      </ImageQuery>
    </div>
  </div>
)

export default AMC
