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
  <div className="project">
    <ImageQuery>
      {({ imageOne }) => [
        <Image
          key="UA Hero"
          image={imageOne.childImageSharp}
          type="fluid"
          alt="Under Armour web screens"
        />,
      ]}
    </ImageQuery>
    <div className="wrap-pres">
      <p>
        In 2017, I had the pleasure to work with the amazing team at Under
        Armour to redesign their B2B platform. The $5 billion dollar lifestyle
        brand was looking to increase its wholesale velocity domestically and
        abroad. We began the year long engagement with two months of research
        and development. The result was a redesign of their B2B portal with an
        elevated experience that also supported internationalization.
      </p>
      <p>
        I led the team to completely redesign their platform, while helping
        create and implement their performance brand.
      </p>
      <p className="f6 monospace">Role</p>
      <ul className="f5 lh-copy">
        <li>Visual Design</li>
        <li>UI / UX Design</li>
        <li>Research</li>
        <li>User Testing</li>
        <li>Information Architecture</li>
        <li>Prototyping &amp; Concepts</li>
        <li>Front-end Development</li>
      </ul>
    </div>
    <div className="block wrap-single">
      <ImageQuery>
        {({ imageTwo, imageThree, imageFour, imageFive, imageSix }) => [
          <Image
            key="UA Mast"
            image={imageTwo.childImageSharp}
            type="fluid"
            alt="Under Armour web screens"
          />,
          <StyledImage
            key="UA Users"
            image={imageThree.childImageSharp}
            type="fluid"
            alt="Under Armour web screens"
          />,
          <StyledImage
            key="UA Wires"
            image={imageFive.childImageSharp}
            type="fluid"
            alt="Under Armour web screens"
          />,
          <StyledImage
            key="UA Web"
            image={imageFour.childImageSharp}
            type="fluid"
            alt="Under Armour web screens"
          />,
          <StyledImage
            key="UA Pages"
            image={imageSix.childImageSharp}
            type="fluid"
            alt="Under Armour web screens"
          />,
        ]}
      </ImageQuery>
    </div>
  </div>
)

export default UnderArmour