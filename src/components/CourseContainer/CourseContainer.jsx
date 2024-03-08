import { useState } from "react";
import CourseCart from "../CourseCart/CourseCart";
import Courses from "../Courses/Courses";

const CourseContainer = () => {
    const [cart,setCart]=useState([]);


    const handleCart = (course)=>{
        const newCart =[...cart,course];
        setCart(newCart);
    }
    return (
        <div className="md:flex mx-6">
            <Courses handleCart={handleCart}></Courses>
            <CourseCart
            cart={cart}
            ></CourseCart>      
        </div>
    );
};

export default CourseContainer;