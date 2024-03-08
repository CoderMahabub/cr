import { useEffect } from "react";
import PropTypes from 'prop-types';
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleCart}) => {
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('/public/courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])

    return (
        <div className="md:w-5/6 grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">
            {courses.map(course=><Course 
            key={course.id} 
            course={course}
            handleCart={handleCart}
            ></Course>)}
        </div>
    );
};
Courses.propTypes ={
    handleCart:PropTypes.func
}
export default Courses;