import { Button, Box, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { addToCart } from "../redux/actions/cartActions";


import {payUsingPaytm} from "../service/api"
import {post} from "../utils/paytm"

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding: '15px'
});

const StyledButton = styled(Button)`
    width: 44%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
`;


function Actionitem({ product }) {

    const { id } = product;

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        // navigate('/cart');
    }

    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 100, email: 'agrawalabhishek7414@gmail.com'});
        var information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response    
        }
        post(information);
    }



    return (
        <LeftContainer>
            <Box style={{ border: '1px solid #f0f0f0', width: '90%' }}>
                <Image src={product.detailUrl} /><br />
            </Box>
            <Link to={'/cart'} onClick={() => addItemToCart()} >
                <StyledButton style={{ marginRight: 10, background: '#ff9f00' }} variant="contained"><Cart />Add to Cart</StyledButton>
            </Link>

            <StyledButton onClick={() => buyNow()} style={{ background: '#fb641b' }} variant="contained"><Flash /> Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default Actionitem;