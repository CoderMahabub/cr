import PropTypes from 'prop-types';
import { FiDollarSign} from "react-icons/fi";
import { IoMdBook } from "react-icons/io";
const Course = ({course,handleCart}) => {
    const {id,course_name,description,course_price,credit_hour,course_thumbnail}=course;
    return (
        <div className='bg-white p-4 rounded-lg space-y-3'>
            <img className='rounded-lg thumbnail' src={course_thumbnail} alt="" />
            <h2 className='text-2xl'>{course_name}</h2>
            <p className='text-gray-500 text-justify'>{description.slice(0,120)}</p>
            <div className='flex justify-between text-gray-400 font-semibold'>
                <p><FiDollarSign className='inline text-2xl text-black' /> Price: <span>{course_price}</span></p>
                <p><IoMdBook className='inline text-2xl text-black' /> Credit: <span>{credit_hour}</span>hr</p>
            </div>
            <button onClick={()=>handleCart(course)} className='bg-blue-500 w-full p-2 text-white font-bold'>Select</button>
        </div>
    );
};
Course.propTypes ={
    course:PropTypes.object,
    handleCart:PropTypes.func
}
export default Course;