import paymentBg from '../../Images/paymentbackground.png';

import { Box, Button, Container, FormControl, Grid, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import { useElements, useStripe, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';






const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Styles = {
    paymentBg: {
        backgroundImage: `url(${paymentBg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
    }
}

const Payment = () => {
    const { cart, subTotal, totalVat, totalPrice, cuponUsed, discountPrice } = useSelector(state => state.cart);
    const vat = 0.15;

    console.log(cart);


    const [country, setCountry] = React.useState('');

    const handleChange = (event) => {
        setCountry(event.target.value);
    };


    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }


        const card = elements.getElement(CardNumberElement);

        if (card == null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            Swal.fire({
                position: 'middle',
                icon: 'success',
                title: 'Payment SuccessFull',
                showConfirmButton: false,
                timer: 1500
            })
            console.log('[PaymentMethod]', paymentMethod);
        }
    };

    return (
        <>
            <Box sx={Styles.paymentBg}>
                <Container maxWidth='xl'>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ width: '1170px', backgroundColor: 'white', marginTop: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px' }}>
                            <Box sx={{ flexGrow: 1, padding: '42px 50px' }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} xl={6}>
                                        <Item sx={{ textAlign: 'left', boxShadow: 0 }}><Typography sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: '36px', marginBottom: '30px', color: '#201E1E' }}>
                                            Billing Details
                                        </Typography>
                                            <Typography >First Name</Typography>
                                            <TextField sx={{ marginBottom: '20px' }} fullWidth id="fullWidth" />
                                            <Typography>Address</Typography>
                                            <TextField sx={{ marginBottom: '20px' }} fullWidth id="fullWidth" />
                                            <Typography>Phone</Typography>
                                            <TextField fullWidth id="fullWidth" />
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12} xl={6}>
                                        <Item sx={{ textAlign: 'left', boxShadow: 0 }}>
                                            <Typography sx={{ marginTop: '85px' }}>Last Name</Typography>
                                            <TextField sx={{ marginBottom: '20px' }} fullWidth id="fullWidth" />
                                            <Typography>Country / Region</Typography>
                                            <FormControl fullWidth sx={{ marginBottom: '20px' }}>
                                                {/* <InputLabel id="demo-simple-select-label">Country</InputLabel> */}
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={country}
                                                    // label="Age"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>Bangladesh</MenuItem>
                                                    <MenuItem value={20}>United Kingdom</MenuItem>
                                                    <MenuItem value={30}>Canada</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <Typography>Email Address</Typography>
                                            <TextField fullWidth id="fullWidth" /></Item>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ width: { xl: '1170px', xs: '100%' }, height: '100%', backgroundColor: 'white', marginTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px' }}>
                            <Box sx={{ flexGrow: 1, padding: '42px 50px' }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} xl={12}>
                                        <Item sx={{ textAlign: 'left', boxShadow: 0 }}><Typography sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: '36px', marginBottom: '30px', color: '#201E1E' }}>
                                            Your Order
                                        </Typography>
                                            <Box>
                                                <TableContainer component={Paper}>
                                                    <Table sx={{ width: '100%' }} aria-label="spanning table">
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell align="left" colSpan={3}>
                                                                    Course Name
                                                                </TableCell>
                                                                <TableCell align="right">Subtotal</TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {cart.map((item) => (
                                                                <TableRow key={item.id}>
                                                                    <TableCell sx={{ display: 'flex', alignItems: 'center' }}><img style={{ width: '60px', height: '60px', borderRadius: '6px', marginRight: '20px' }} src={item.coverImage} alt="" /> {item.title}</TableCell>
                                                                    <TableCell align="right"></TableCell>
                                                                    <TableCell align="right"></TableCell>
                                                                    <TableCell align="right">$ {item.regularPrice}</TableCell>
                                                                </TableRow>
                                                            ))}

                                                            <TableRow>
                                                                <TableCell rowSpan={3} />
                                                                <TableCell colSpan={2}>Subtotal</TableCell>
                                                                <TableCell align="right">$ {subTotal}</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell>Vat</TableCell>
                                                                <TableCell align="right"></TableCell>
                                                                <TableCell align="right">$ {totalVat}</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell colSpan={2}>Total</TableCell>
                                                                <TableCell align="right">$ {!cuponUsed ? totalPrice : discountPrice}</TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </Box>
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ width: '1170px', height: '686px', backgroundColor: 'white', marginTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', marginBottom: '120px' }}>
                            <Box sx={{ flexGrow: 1, padding: '42px 50px' }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} xl={12}>
                                        <Typography sx={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: '36px', marginBottom: '30px', color: '#201E1E' }}>
                                            Payment Method
                                        </Typography>
                                        <Item sx={{ textAlign: 'left', boxShadow: 0, backgroundColor: '#FAFAFA', width: { xl: '1070px' }, height: '339px' }}>
                                            <form onSubmit={handleSubmit}>
                                                <label
                                                    htmlFor="cardNumber"
                                                    style={{
                                                        fontFamily: "Inter",
                                                        fontSize: "16px",
                                                        color: "#201E1E",
                                                        marginLeft: '10px'
                                                    }}
                                                >
                                                    Card Number
                                                </label>
                                                <Box
                                                    sx={{
                                                        background: "#FFFFFF",
                                                        border: "1px solid #CCCCCC ",
                                                        p: 2,
                                                        m: 1,
                                                        borderRadius: "6px",
                                                    }}
                                                >
                                                    <CardNumberElement
                                                        style={{ border: "1px solid #333" }}
                                                        id="cardNumber"
                                                        options={{
                                                            style: {
                                                                base: {
                                                                    fontSize: '16px',
                                                                    color: '#424770',
                                                                    '::placeholder': {
                                                                        color: '#aab7c4',
                                                                    },
                                                                },
                                                                invalid: {
                                                                    color: '#9e2146',
                                                                },
                                                            },
                                                        }}
                                                    />
                                                </Box>
                                                <label htmlFor="expiry" style={{
                                                    fontFamily: "Inter",
                                                    fontSize: "16px",
                                                    color: "#201E1E",
                                                    marginLeft: '10px'
                                                }}>Expiration</label>
                                                <Box
                                                    sx={{
                                                        background: "#FFFFFF",
                                                        border: "1px solid #CCCCCC ",
                                                        p: 2,
                                                        m: 1,
                                                        borderRadius: "6px",
                                                    }}
                                                >
                                                    <CardExpiryElement
                                                        style={{ width: "100%" }}
                                                        id="expiry"
                                                        options={{
                                                            style: {
                                                                base: {
                                                                    fontSize: '16px',
                                                                    color: '#424770',
                                                                    '::placeholder': {
                                                                        color: '#aab7c4',
                                                                    },
                                                                },
                                                                invalid: {
                                                                    color: '#9e2146',
                                                                },
                                                            },
                                                        }}
                                                    />{" "}
                                                </Box>
                                                <label htmlFor="cvc" style={{
                                                    fontFamily: "Inter",
                                                    fontSize: "16px",
                                                    color: "#201E1E",
                                                    marginLeft: '10px'
                                                }}>CVC</label>
                                                <Box
                                                    sx={{
                                                        background: "#FFFFFF",
                                                        border: "1px solid #CCCCCC ",
                                                        p: 2,
                                                        m: 1,
                                                        borderRadius: "6px",
                                                    }}
                                                >
                                                    <CardCvcElement id="cvc" options={{
                                                        style: {
                                                            base: {
                                                                fontSize: '16px',
                                                                color: '#424770',
                                                                '::placeholder': {
                                                                    color: '#aab7c4',
                                                                },
                                                            },
                                                            invalid: {
                                                                color: '#9e2146',
                                                            },
                                                        },
                                                    }} />
                                                </Box>
                                                <Button variant="contained" type="submit" disabled={!stripe} sx={{ textTransform: 'none', width: '224px', height: '51px', padding: '16px 35px', backgroundColor: '#009FE3', borderRadius: '8px', marginTop: { xl: '90px', xs: '90px' }, fontSize: '16px', fontWeight: 'bold', fontFamily: 'Inter', marginLeft: { xs: '10px', xl: '8px' } }}>
                                                    Place Order
                                                </Button>
                                            </form>
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
export default Payment;