import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { MonthlySalesGraph } from "../components";

const UserDashboard = () => {
  return (
    <Box display="flex" height="100vh" overflow="auto" sx={{ backgroundColor: "#f4f5f7" }}>
      {/* Sidebar */}
      <Box
        width="250px"
        sx={{
          backgroundColor: "#ffffff",
          borderRight: "1px solid #ddd",
          padding: "2rem",
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={2}>
          My Account
        </Typography>
        <Box>
          
          <Typography variant="body1" sx={{ cursor: "pointer", mb: 2 }}>
          <Link to={`/orders`}>
           Orders
           </Link>
          </Typography>
          <Typography variant="body1" sx={{ cursor: "pointer", mb: 2 }}>
           <Link to={`/wishlist`}>
           WishList
           </Link>
          </Typography>
          
          <Typography variant="body1" sx={{ cursor: "pointer", mb: 2 }}>
           <Link >
           Account Details
           </Link>
          </Typography>
        </Box>
      </Box>

      {/* Main Dashboard */}
      <Box flexGrow={1} p={3}>
        <Typography variant="h4" fontWeight="bold" mb={3}>
          Dashboard
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: "#ffffff", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                <Link to={`/orders`}>
           Orders
           </Link>
                </Typography>
                {/* <Typography variant="body1" color="text.secondary">
                  150 total orders
                </Typography> */}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: "#ffffff", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                 <Link to={`/wishlist`}>
                 WishList
                 </Link>
                </Typography>
                {/* <Typography variant="body1" color="text.secondary">
                  75 items in wishlist
                </Typography> */}
              </CardContent>
            </Card>
          </Grid>
         
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: "#ffffff", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                <Link>
                Account Details
                </Link>
                </Typography>
               
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default UserDashboard;
