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

const Peddle = () => (
  <div className="project pl5-l">
    <ImageQuery>
      {({ imageOne }) => [
        <Image
          key="Peddle Hero"
          image={imageOne.childImageSharp}
          type="fluid"
          className="banner-wrap"
          alt="Peddle hero screens"
        />,
      ]}
    </ImageQuery>
    <div className="wrap-pres">
      <h6 className="f5 fw5 tracked p-break">
        004 &nbsp; &nbsp; &nbsp; Peddle
      </h6>
      <p>
        The junkier, the better—Peddle recognizes the value in the most broken
        down and busted cars. The largest automotive recycler in the United
        States, Peddle processes 70,000 to 90,000 vehicles per month. Their
        innovative approach enables customers to sell their used cars and get
        paid immediately. I helped with the product redesign and developed a
        design system that could be used across Peddle’s various business areas.
      </p>
      <div className="flex">
        <div className="mr4 mr6-l">
          <p className="f7 fw5 p-break ttu tracked">Role</p>
          <ul className="f6 fw5 lh-double tracked">
            <li>Product Design</li>
            <li>Visual Design</li>
            <li>UI / UX Design</li>
            <li>Prototyping & Concepts</li>
            <li>Experience Design</li>
            <li>Interaction Design</li>
            <li>Design System</li>
          </ul>
        </div>
        <div>
          <p className="f7 fw5 p-break ttu tracked">Collaborators</p>
          <ul className="f6 fw5 lh-double tracked">
            <li>Steven Hanley</li>
            <li>Ivan Alonso</li>
            <li>Celine Thibault</li>
            <li>Dave Knöph</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="block wrap-single">
      <div className="pr-video-wrap overflow-hidden relative">
        <video
          src="/peddle-desktop.mp4"
          className="pr-video"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <div className="pr-asset pr-video-wrap overflow-hidden relative">
        <video
          src="/peddle-screens.mp4"
          className="pr-video"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <ImageQuery>
        {({ imageFour, imageFive, imageSix, imageSeven }) => [
          <StyledImage
            key="Peddle Mobile"
            image={imageFour.childImageSharp}
            type="fluid"
            className="img-wrap"
            alt="Peddle mobile screens"
          />,
          <StyledImage
            key="Peddle Device"
            image={imageFive.childImageSharp}
            type="fluid"
            className="img-wrap"
            alt="Peddle mobile pickup screen"
          />,
          <StyledImage
            key="Peddle Library"
            image={imageSix.childImageSharp}
            type="fluid"
            className="img-wrap"
            alt="Peddle design library"
          />,
          <StyledImage
            key="Peddle System"
            image={imageSeven.childImageSharp}
            type="fluid"
            className="img-wrap"
            alt="Peddle design system"
          />,
        ]}
      </ImageQuery>
    </div>
  </div>
)

export default Peddle
