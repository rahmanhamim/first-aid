import React from 'react'
import CartBox from 'components/cart/CartBox'
import Head from 'next/head'

const cart = () => {
    return (
        <>
            <Head>
                <title>Cart</title>
                <link rel="shortcut icon" href="carticon.ico"></link>
            </Head>
            <CartBox />
        </>
    )
}

export default cart