import Card from "./Card";
import React from 'react'
import { useState } from 'react';

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);

    let allCourses = [];

    const getCourses = () => {
        if(category === "All"){
            Object.values(courses).forEach( (courseCategory) => {
                courseCategory.forEach( (course) => {
                    allCourses.push(course);
                })
            });
            return allCourses;
        }
        else{
            return courses[category];
        }
    }

  return (
    <div className="flex flex-wrap justify-center gap-8 mb-4">
        {
            getCourses().map( (course) => {
                    return <Card key={course.id} likedCourses={likedCourses}
                     course={course} setLikedCourses={setLikedCourses} />
            })
        }
    </div>
  )
}

export default Cards