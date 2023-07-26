import React from 'react'
import Card from './Card'
import Web from '../assets/webdev.png'
import App from '../assets/app.jpg'
import CyberSecurity from '../assets/cc.png'
import DataAnalysis from '../assets/data-analysis.webp'
import ML from '../assets/ml.webp'
import Python from '../assets/python.png'
const Courses = () => {
  const courses = [
    {
      image : Web, title: "Web Development", description: "sample description for this course"
    },
    {
      image : App, title: "App Development", description: "sample description for this course"
    },
    {
      image : CyberSecurity, title: "Cyber Security", description: "sample description for this course"
    },
    {
      image : DataAnalysis, title: "Data Analysis", description: "sample description for this course"
    },
    {
      image : ML, title: "Machine Learning", description: "sample description for this course"
    },
    {
      image : Python, title: "Python Programming", description: "sample description for this course"
    }
  ]
  return (
    <div className='courses' id='courses'>
        <h2 className='courses-title'>Join our Courses</h2>
        <div className="courses-container">
        {
          courses.map((e)=>{
            return <div className="courses-main">
               <Card image = {e.image} title = {e.title} description = {e.description}></Card>
            </div>
          })
        }
        </div>
    </div>
  )
}

export default Courses