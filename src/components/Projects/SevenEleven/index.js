import React from 'react'
import styled from 'styled-components'
import { Image } from 'components'
import ImageQuery from './ImageQuery'

import Lottie from 'react-lottie'
import heroData from './lotties/heroyellow'
import robotData from './lotties/robot'
import launcherData from './lotties/launcher'

const StyledImage = styled(props => <Image {...props} />)`
  margin: 11vw 0 0;

  @media (max-width: 767px) {
    margin: 50px 0 0;
  }
`

const heroOptions = {
  loop: true,
  autoplay: true,
  animationData: heroData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const robotOptions = {
  loop: true,
  autoplay: true,
  animationData: robotData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const launcherOptions = {
  loop: true,
  autoplay: true,
  animationData: launcherData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const SevenEleven = () => (
  <div className="project pl5-l">
    <div className="banner-wrap">
      <Lottie options={heroOptions} />
    </div>
    <div className="wrap-pres">
      <h6 className="f5 fw5 tracked p-break">
        002 &nbsp; &nbsp; &nbsp; <span className="nowrap">7-Eleven</span>
      </h6>
      <p>
        As the world’s first convenience store,{' '}
        <span className="nowrap">7-Eleven</span> has long been the leader in
        customer convenience. In recent years, they created an ecosystem of
        products designed to deliver fast, personalized convenience. They
        partnered with Raw Materials to design a unified platform that
        streamlined their diverse services into a one-stop solution for
        customers.
      </p>
      <p>
        The result was a new, cohesive experience with a fresh orderly look and
        feel, offering users a highly contextualized, seamless
        experience—anytime, anywhere.
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
            <li>Lee Simpson</li>
            <li>Ivan Alonso</li>
            <li>Anton Kolisynk</li>
            <li>Danny White</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="block wrap-single">
      <ImageQuery>
        {({ imageTwo }) => [
          <Image
            key="SevenEleven Mast"
            image={imageTwo.childImageSharp}
            type="fluid"
            className="img-wrap"
            alt="7-Eleven mobile application screens"
          />,
        ]}
      </ImageQuery>
      <div className="flex pr-asset">
        <div className="img-wrap flex-auto mr3-ns mr4-l w-50-ns">
          <Lottie options={launcherOptions} />
        </div>
        <div className="img-wrap flex-auto ml3-ns ml4-l w-50-ns">
          <ImageQuery>
            {({ imageSeven }) => [
              <Image
                key="SevenEleven TV"
                image={imageSeven.childImageSharp}
                type="fluid"
                alt="7-Eleven mobile rewards screen"
              />,
            ]}
          </ImageQuery>
        </div>
      </div>
      <div className="pr-asset pr-video-wrap overflow-hidden relative">
        <video
          src="/seven.mp4"
          className="pr-video"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <div className="relative">
        <ImageQuery>
          {({ imageThree }) => [
            <StyledImage
              key="SevenEleven TV"
              image={imageThree.childImageSharp}
              type="fluid"
              className="img-wrap"
              alt="7-Eleven mobile application screens"
            />,
          ]}
        </ImageQuery>
        <div className="seveneleven-robot">
          <Lottie options={robotOptions} />
        </div>
      </div>
      <ImageQuery>
        {({ imageOne }) => [
          <StyledImage
            key="SevenEleven Mock"
            image={imageOne.childImageSharp}
            type="fluid"
            className="img-wrap"
            alt="7-Eleven mobile design system"
          />,
        ]}
      </ImageQuery>
      <ImageQuery>
        {({ imageFive }) => [
          <StyledImage
            key="SevenEleven Mock"
            image={imageFive.childImageSharp}
            type="fluid"
            className="img-wrap"
            alt="7-Eleven mobile design system"
          />,
        ]}
      </ImageQuery>
    </div>
  </div>
)

export default SevenEleven
