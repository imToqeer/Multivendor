import React from 'react'
import Header from '../components/Layout/Header'
import EventCard from '../components/PopularEvents/EventCard'

const Events = () => {
  return (
    <div>
        <Header activeHeading={4} />
        <EventCard active={true}/>
        <EventCard active={true}/>
    </div>
  )
}

export default Events