import PropTypes from 'prop-types';

const CartItem = ({cartItem}) => {
    return (
        <>
            <li type='1'>{cartItem.course_name}</li>
        </>
    );
};

CartItem.propTypes={
    cartItem:PropTypes.object.isRequired
}
export default CartItem;