import PropTypes from 'prop-types';
import CartItem from '../CartItem/CartItem';
const CourseCart = ({cart}) => {
    return (
        <div className="md:w-1/6 ml-2">
            <div className='bg-white p-2'>
            <h2 className='text-2xl text-center font-bold text-blue-600 border-b-2 border-gray-300'>Remaining Credit<span>7 hr</span></h2>
            <h4 className='text-1xl font-bold'>Courses Name:{cart.length}</h4>
                {
                    cart.map((cartItem,idx)=><CartItem key={idx} cartItem={cartItem}></CartItem>)
                }
            </div>
        </div>
    );
};

CourseCart.propTypes={
    cart:PropTypes.array.isRequired
}

export default CourseCart;