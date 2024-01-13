import React from 'react'
import { JourneyContainer, SubTitle, Title } from './JourneyStyle'
import { HiPlay } from "react-icons/hi";

const Journey = () => {
  return (
    <div>
      <JourneyContainer>
        <Title>Explore Our Journey</Title>
        <SubTitle>Immerse your self in our journey, achievements, and client stories</SubTitle>
        <HiPlay style={{ color: "white", fontSize: "100px"}} />
      </JourneyContainer>
    </div>
  )
}

export default Journey
