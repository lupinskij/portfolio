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
      <h6 className="f6 fw4 monospace p-break ttu tracked black-40">
        003_<span className="black">Peddle</span>
      </h6>
      <p>
        The junkier, the better — Peddle sees value in the most broken down and
        busted cars. Peddle is the largest automotive recycler in the United
        states, processing 70,000 to 90,000 vehicles per month Their innovative
        approach allows customers to sell their used cars and get paid
        immediately. I helped with the product redesign and creating a design
        system that could extend across Peddle’s various business lanes.
      </p>
      <div className="flex">
        <div className="mr4 mr6-l">
          <p className="f6 monospace p-break fw4 ttu tracked black-40">Role</p>
          <ul className="f5 fw3 fw4-ns lh-copy">
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
          <p className="f6 monospace p-break fw4 ttu tracked black-40">
            Collaborators
          </p>
          <ul className="f5 fw3 fw4-ns lh-copy">
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
          className="pr-video br3 br0-m"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <div className="pr-asset pr-video-wrap overflow-hidden relative">
        <video
          src="/peddle-screens.mp4"
          className="pr-video br3 br0-m"
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
            className="img-wrap br3 br0-m"
            alt="Peddle mobile screens"
          />,
          <StyledImage
            key="Peddle Device"
            image={imageFive.childImageSharp}
            type="fluid"
            className="img-wrap br3 br0-m"
            alt="Peddle mobile pickup screen"
          />,
          <StyledImage
            key="Peddle Library"
            image={imageSix.childImageSharp}
            type="fluid"
            className="img-wrap br3 br0-m"
            alt="Peddle design library"
          />,
          <StyledImage
            key="Peddle System"
            image={imageSeven.childImageSharp}
            type="fluid"
            className="img-wrap br3 br0-m"
            alt="Peddle design system"
          />,
        ]}
      </ImageQuery>
    </div>
  </div>
)

export default Peddle
