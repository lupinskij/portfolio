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

const UnderArmour = () => (
  <div className="project pl5-l">
    <ImageQuery>
      {({ imageOne }) => [
        <Image
          key="UA Hero"
          image={imageOne.childImageSharp}
          type="fluid"
          className="banner-wrap"
          alt="Under Armour web screens"
        />,
      ]}
    </ImageQuery>
    <div className="wrap-pres">
      <h6 className="f5 fw5 tracked p-break">
        004 &nbsp; &nbsp; &nbsp; Under Armour
      </h6>
      <p>
        Under Armour partnered with us to redesign their B2B platform to meet
        rising demand for their products domestically and internationally. The
        active lifestyle brand aimed to enhance product discovery, browsing, and
        purchasing experiences for customers, local retailers, and wholesale
        partners across global markets.
      </p>
      <p>
        Leading the design, we executed a comprehensive redesign of the platform
        and implemented key elements of the performance brand, ensuring a
        cohesive digital experience across all markets.
      </p>
      <div className="flex">
        <div className="mr4 mr6-l">
          <p className="f7 fw5 p-break ttu tracked">Role</p>
          <ul className="f6 fw5 lh-double tracked">
            <li>Visual Design</li>
            <li>UI / UX Design</li>
            <li>Research</li>
            <li>User Testing</li>
            <li>Information Architecture</li>
            <li>Prototyping &amp; Concepts</li>
            <li>UI Development</li>
          </ul>
        </div>
        <div>
          <p className="f7 fw5 p-break ttu tracked">Collaborators</p>
          <ul className="f6 fw5 lh-double tracked">
            <li>Amy Rubino</li>
            <li>Matt Rossi</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="block wrap-single">
      <ImageQuery>
        {({ imageTwo, imageThree, imageFour, imageFive }) => [
          <Image
            key="UA Mast"
            image={imageTwo.childImageSharp}
            type="fluid"
            className="img-wrap"
            alt="Under Armour web screens"
          />,
          <StyledImage
            key="UA Users"
            image={imageThree.childImageSharp}
            type="fluid"
            className="img-wrap"
            alt="Under Armour web screens"
          />,
          <StyledImage
            key="UA Wires"
            image={imageFive.childImageSharp}
            type="fluid"
            className="img-wrap"
            alt="Under Armour web screens"
          />,
          <StyledImage
            key="UA Web"
            image={imageFour.childImageSharp}
            type="fluid"
            className="img-wrap"
            alt="Under Armour web screens"
          />,
        ]}
      </ImageQuery>
    </div>
  </div>
)

export default UnderArmour
