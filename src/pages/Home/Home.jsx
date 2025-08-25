import React from 'react'
import Banner from '../../components/Banner/Banner'
import Count from '../../components/Count/Count'
import ImageSlides from '../../components/ImageSlides/ImageSlides'
import ToDoList from '../../components/ToDoList/ToDoList'
import LiveTime from '../../components/LiveTime/LiveTime'
import Clock from '../Clock/Clock'



export default function Home() {
  return (
    <div>
      <Banner />
      <LiveTime />
      <Count />
      <ImageSlides />
      <ToDoList />
    </div>
  )
}
