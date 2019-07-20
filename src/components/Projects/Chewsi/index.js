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
  <div className="project pl5-l">
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
        everyone, giving customers another reason to smile. During two months, I
        worked with their team to design a ground up marketplace and search tool
        for dental patients. Providing a dentist and procedure search engine
        designed to increase coverage selection and conversion rates, while
        reducing&nbsp;attrition.
      </p>
      <div className="flex">
        <div>
          <p className="f6 fw4 monospace p-break light-gray">Role</p>
          <ul className="f5 fw4 lh-copy">
            <li>Product Design</li>
            <li>UI / UX Design</li>
            <li>Information Architecture</li>
            <li>Prototyping & Concepts</li>
            <li>Interaction Design</li>
            <li>Experience Design</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="block wrap-single">
      <ImageQuery>
        {({ imageFive }) => [
          <Image
            key="Chewsi Mock"
            image={imageFive.childImageSharp}
            type="fluid"
            alt="Chewsi screens"
          />,
        ]}
      </ImageQuery>
      <div className="pr-asset pr-video-wrap ba bw4 b--white overflow-hidden relative">
        <video
          src="/chewsi-flow.mp4"
          className="pr-video"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <ImageQuery>
        {({ imageThree, imageFour }) => [
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
