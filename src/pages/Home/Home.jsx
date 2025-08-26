import React from 'react'
import Banner from '../../components/Banner/Banner'
import Count from '../../components/Count/Count'
import ImageSlides from '../../components/ImageSlides/ImageSlides'
import ToDoList from '../../components/ToDoList/ToDoList'
import Users from '../../components/Users/Users'



export default function Home() {
  return (
    <div>
      <Banner />
      <Users />
      <Count />
      <ImageSlides />
      <ToDoList />
    </div>
  )
}
