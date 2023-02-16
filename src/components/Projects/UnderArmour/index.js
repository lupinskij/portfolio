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
          alt="Under Armour web screens"
        />,
      ]}
    </ImageQuery>
    <div className="wrap-pres">
      <div className="f7 fw4 monospace p-break ttu tracked black-40">
        001-Under Armour
      </div>
      <p>
        In 2017, I had the pleasure of working with Under Armor’s team to
        redesign their B2B platform. The 5 billion dollar lifestyle brand wanted
        to increase its wholesale velocity domestically and abroad. We began the
        year-long engagement with two months of research and development. The
        result was a redesign of their B2B portal with an elevated experience
        supporting internationalization.
      </p>
      <p>
        I led the team through completely redesigning their platform while
        helping implement their performance brand.
      </p>
      <div className="flex">
        <div className="mr4 mr6-l">
          <p className="f7 monospace p-break fw4 ttu tracked black-40">Role</p>
          <ul className="f5 fw4 lh-copy">
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
          <p className="f7 monospace p-break fw4 ttu tracked black-40">
            Collaborators
          </p>
          <ul className="f5 fw4 lh-copy">
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
        ]}
      </ImageQuery>
    </div>
  </div>
)

export default UnderArmour
