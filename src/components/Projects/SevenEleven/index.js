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
      <h6 className="f6 fw4 monospace p-break ttu tracked black-40">
        001_<span className="black">7-Eleven</span>
      </h6>
      <p>
        As the world’s first convenience store, 7-Eleven is the leader in
        customer convenience. In recent years, they developed an ecosystem of
        products to deliver fast and personalized convenience for their
        customers. They engaged Raw Materials to create a unified platform. Our
        goal was to provide a one-stop shop for consumers by designing a
        simplified product that organized and united the many offerings of
        7-Eleven.
      </p>
      <p>
        The new experience came to life with an overhauled look and feel, giving
        users a highly contextualized experience—anytime, anywhere.
      </p>
      <div className="flex">
        <div className="mr4 mr6-l">
          <p className="f7 fw4 monospace p-break ttu tracked black-40">Role</p>
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
          <p className="f7 fw4 monospace p-break ttu tracked black-40">
            Collaborators
          </p>
          <ul className="f5 fw3 fw4-ns lh-copy">
            <li>Steven Hanley</li>
            <li>Lee Simpson</li>
            <li>Danny White</li>
            <li>Ivan Alonso</li>
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
            className="img-wrap br3 br0-m"
            alt="7-Eleven mobile application screens"
          />,
        ]}
      </ImageQuery>
      <ImageQuery>
        {({ imageFour }) => [
          <StyledImage
            key="SevenEleven Mobile"
            image={imageFour.childImageSharp}
            type="fluid"
            className="img-wrap br3 br0-m"
            alt="7-Eleven mobile application screens"
          />,
        ]}
      </ImageQuery>
      <div className="flex pr-asset">
        <div className="img-wrap br3 br0-m flex-auto mr3 mr4-ns w-50">
          <Lottie options={launcherOptions} />
        </div>
        <div className="img-wrap br3 br0-m flex-auto ml3 ml4-ns w-50">
          <ImageQuery>
            {({ imageSeven }) => [
              <Image
                key="SevenEleven TV"
                image={imageSeven.childImageSharp}
                type="fluid"
                alt="7-Eleven mobile application screens"
              />,
            ]}
          </ImageQuery>
        </div>
      </div>
      <div className="relative">
        <ImageQuery>
          {({ imageThree }) => [
            <StyledImage
              key="SevenEleven TV"
              image={imageThree.childImageSharp}
              type="fluid"
              className="img-wrap br3 br0-m"
              alt="7-Eleven mobile application screens"
            />,
          ]}
        </ImageQuery>
        <div className="seveneleven-robot">
          <Lottie options={robotOptions} />
        </div>
      </div>
      <ImageQuery>
        {({ imageFive }) => [
          <StyledImage
            key="SevenEleven Mock"
            image={imageFive.childImageSharp}
            type="fluid"
            className="img-wrap br3 br0-m"
            alt="7-Eleven mobile application screens"
          />,
        ]}
      </ImageQuery>
    </div>
  </div>
)

export default SevenEleven
