import {
  Alert,
 Box,
 Button,
 Container,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 TextField,
 Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {
 addSubTotal,
 addVat,
 addTotal,
 calculateDiscount,
 addCupon,
 increaseQuantity,
 decreaseQuantity,
 removeFromCart,
} from "../../Redux/actions/cartAction";
import Link from "next/link";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Swal from "sweetalert2";

const CartBox = () => {
 const state = useSelector((state) => state.cart);
 const dispatch = useDispatch();

 const { cart, subTotal, totalVat, totalPrice, discountPrice, cuponUsed } =
  state;
 const vat = 0.15;

 const [cupon, setCupon] = useState("");
  const[error,setError]=useState('')
 // console.log(discount)
 let total = 0;

 let finalTotal = 0;
 useEffect(() => {
  cart?.forEach((element) => {
   total =
    total +
    element.quantity *
     parseFloat(element.regularPrice - element.regularPrice * 0.75);
   dispatch(addSubTotal(total));
   dispatch(addVat(subTotal * vat));
   finalTotal = total + totalVat;
   dispatch(addTotal(finalTotal));
  });
  if (!cart?.length) {
   dispatch(addSubTotal(0));
   dispatch(addVat(0));
   dispatch(addTotal(0));
  }
 }, [total, finalTotal, cart, totalVat, totalPrice]);

 const deleteItem = (item) => {
  dispatch(removeFromCart(item.id));
 };

 const handleCuponChange = (e) => {
  setCupon(e.target.value);
 };

 const handleDiscount = () => {
  if (cupon === "discount") {
   dispatch(calculateDiscount(totalPrice / 2));
   dispatch(addCupon(true));
   Swal.fire({
    position: "middle",
    icon: "success",
    title: "50% discount applied",
    showConfirmButton: false,
    timer: 1500,
   });
  } else if (cupon === "") {
    setError("Enter a cupon code");
  } else {
    setError("Wrong Code");
  }
 };

 const handleQuantity = (item, type) => {
  if (type === "increase") {
   dispatch(increaseQuantity(item.id));
   dispatch(addCupon(false));
  } else {
   dispatch(decreaseQuantity(item.id));
   dispatch(addCupon(false));
  }
 };
 setTimeout(() => {
  setError("");
 },[3000])
 return (
  <Box sx={{ backgroundColor: "#EDF5FF", py: "50px", minHeight: "70vh" }}>
   
    {
     error && <Container sx={{mb:2}}> <Alert severity="error">{error}</Alert> </Container>
   }
   
   <Container
    maxWidth="xl"
    sx={{ display: "flex", justifyContent: "space-evenly",flexDirection:{
      xs:"column",
      sm:"column",
      md:"row",
    } }}
   >
    <Box
     sx={{
      background: "#FFFFFF",
      borderRadius: "10px",
      width: { xs: "100%", sm: "50%", md: "770" },
      p: 3,
     }}
    >
     <Typography variant="h4">Shopping Cart</Typography>
     <TableContainer>
      <Table sx={{ width: 600 }} aria-label="simple table">
       <TableHead>
        <TableRow>
         <TableCell sx={{ fontWeight: "bold" }}>Course Name</TableCell>
         <TableCell align="center" sx={{ fontWeight: "bold" }}>
          Price
         </TableCell>
         <TableCell align="center" sx={{ fontWeight: "bold" }}>
          Quantity
         </TableCell>
         <TableCell align="center" sx={{ fontWeight: "bold" }}>
          Total
         </TableCell>
         <TableCell align="center" sx={{ fontWeight: "bold" }}></TableCell>
        </TableRow>
       </TableHead>
       <TableBody>
        {cart.map((item) => (
         // eslint-disable-next-line react/jsx-key
         <TableRow
          item={item.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
         >
          <TableCell
           align="left"
           sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "16px",
            fontFamily: "Inter",
            fontWeight: "500",
            fontStyle: "normal",
           }}
          >
           {" "}
           <img
            style={{
             width: "60px",
             height: "60px",
             borderRadius: "6px",
             marginRight: "20px",
            }}
            src={item.coverImage}
            alt=""
           />{" "}
           {item.title}
          </TableCell>
          <TableCell
           align="center"
           sx={{
            fontSize: "16px",
            fontFamily: "Inter",
            fontWeight: "500",
            fontStyle: "normal",
           }}
          >
           $ {item.regularPrice}
          </TableCell>
          <TableCell
           align="center"
           sx={{
            fontSize: "16px",
            fontFamily: "Inter",
            fontWeight: "500",
            fontStyle: "normal",
           }}
          >
           <Box
            sx={{
             display: "flex",
             alignItems: "center",
             justifyContent: "space-around",
             border: "1px solid #9D9D9D",
             borderRadius: "10px",
            }}
           >
            <RemoveIcon
             sx={{ cursor: "pointer" }}
             onClick={() => handleQuantity(item, "decrease")}
            ></RemoveIcon>
            {item.quantity}
            <AddIcon
             sx={{ cursor: "pointer" }}
             onClick={() => handleQuantity(item, "increase")}
            ></AddIcon>
           </Box>
          </TableCell>
          <TableCell
           align="center"
           sx={{
            fontSize: "16px",
            fontFamily: "Inter",
            fontWeight: "500",
            fontStyle: "normal",
           }}
          >
           ${" "}
           {parseFloat(item.regularPrice - item.regularPrice * 0.75) *
            item.quantity}
          </TableCell>
          <TableCell
           align="center"
           sx={{
            fontSize: "16px",
            fontFamily: "Inter",
            fontWeight: "500",
            fontStyle: "normal",
           }}
          >
           <ClearIcon
            sx={{ cursor: "pointer" }}
            onClick={() => deleteItem(item)}
           ></ClearIcon>
          </TableCell>
         </TableRow>
        ))}
       </TableBody>
      </Table>
     </TableContainer>
    </Box>

    <Box
     sx={{
      p: 2,
      background: "#ED3B45",
      borderRadius: "10px",
      position: "relative",
      width: { xs: "100%", sm: "50%", md: "400px" },
      mt: { xs: "20px", sm: "0", md: "0" },
     }}
    >
     <Typography
      variant="h4"
      sx={{ color: "#ffffff", fontWeight: "bold", mb: 1 }}
     >
      Busket Total
     </Typography>
     <TextField
      variant="outlined"
      placeholder="Coupon Code"
      sx={{ width: "100%", background: "#fff", borderRadius: "10px" }}
      onBlur={handleCuponChange}
     />

     <Button
      variant="contained"
      onClick={handleDiscount}
      disabled={cuponUsed}
      sx={{
       position: "absolute",
       right: "20px",
       height: "51px",
       width: "116px",
       marginTop: "2px",
       borderRadius: "8px",
      }}
     >
      Apply
     </Button>
     {cuponUsed && (
      <Typography
       sx={{ color: "white", display: "flex", alignItems: "center" }}
      >
       {cupon} <ClearIcon onClick={() => dispatch(addCupon(false))} />
      </Typography>
     )}
     <Box
      sx={{
       display: "flex",
       justifyContent: "space-between",
       color: "#fff",
       mt: 2,
       p: 2,
       borderBottom: "1px solid #fff",
      }}
     >
      <Typography>Subtotal</Typography>
      <Typography>${subTotal}</Typography>
     </Box>
     <Box
      sx={{
       display: "flex",
       justifyContent: "space-between",
       color: "#fff",
       mt: 1,
       p: 2,
       borderBottom: "1px solid #fff",
      }}
     >
      <Typography>Vat</Typography>
      <Typography>${totalVat}</Typography>
     </Box>
     <Box
      sx={{
       display: "flex",
       justifyContent: "space-between",
       color: "#fff",
       p: 2,
      }}
     >
      <Typography>Total</Typography>
      <Typography>${!cuponUsed ? totalPrice : discountPrice}</Typography>
      {/* <Typography>${totalPrice}</Typography> */}
     </Box>
     <Link href="/payment">
      <a>
       <Button variant="contained" sx={{ width: "100%" }}>
        Proceed To Checkout
       </Button>
      </a>
     </Link>
    </Box>
   </Container>
  </Box>
 );
};

export default CartBox;
