// import React,{useState} from "react";
// import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
// import { Link } from "react-router-dom";
// import { useLocation,useNavigate } from "react-router-dom";
// import { Typography ,
//     Box,

// } from "@mui/material";

// import { ExpandMore,ExpandLess } from "@mui/icons-material";

// import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
// import CropOriginalOutlinedIcon from '@mui/icons-material/CropOriginalOutlined';
// import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
// import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
// import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
// import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';

// const navItems = [
//   {
//     section: "Products",
//     icon: <AddShoppingCartOutlinedIcon />,
//     items: [
//       { text: "All Products" },
//       { text: "Create Products" },
//       { text: "Best Selling Products" },
//     ],
//   },
//   {
//     section: "Orders",
//     icon: <ShoppingBagOutlinedIcon />,
//     items: [{ text: "All Orders" }],
//   },
//   {
//     section: "Categories",
//     icon: <CategoryOutlinedIcon />,
//     items: [
//       { text: "Parent Category" },
//       { text: "Create Parent Category" },
//       { text: "All Parent Categories" },
//       { text: "Subcategories" },
//       { text: "Create Category" },
//       { text: "All Categories" },
//     ],
//   },
//   {
//     section: "Carousel",
//     icon: <CropOriginalOutlinedIcon/>,
//     items: [{ text: "Manage Carousel" }],
//   },
//   {
//     section: "Customers",
//     icon: <EmojiPeopleOutlinedIcon/>,
//     items: [{ text: "All Customers" }],
//   },
//   {
//     section: "Reviews",
//     icon: <MarkUnreadChatAltOutlinedIcon />,
//     items: [{ text: "Manage Reviews" }],
//   },
// ];


// const AdminDash = () => {
//   return (
//     <Box display="flex" height="100vh" overflow="hidden" sx={{ backgroundColor: "#f4f5f7" }}>
//       {/* Sidebar */}
//       <Box
//         width="250px"
//         sx={{
//           backgroundColor: "#ffffff",
//           borderRight: "1px solid #ddd",
//           padding: "2rem",
//         }}
//       >
//         <Typography variant="h5" fontWeight="bold" mb={2}>
//           My Account
//         </Typography>
//         <Box>
          
//           <Typography variant="body1" sx={{ cursor: "pointer", mb: 2 }}>
//             Orders
//           </Typography>
//           <Typography variant="body1" sx={{ cursor: "pointer", mb: 2 }}>
//            <Link to={`/wishlist`}>
//            WishList
//            </Link>
//           </Typography>
//           <Typography variant="body1" sx={{ cursor: "pointer", mb: 2 }}>
//             Products
//           </Typography>
//           <Typography variant="body1" sx={{ cursor: "pointer", mb: 2 }}>
//            <Link >
//            Account Details
//            </Link>
//           </Typography>
//         </Box>
//       </Box>

//       {/* Main Dashboard */}
//       <Box flexGrow={1} p={3}>
//         <Typography variant="h4" fontWeight="bold" mb={3}>
//           Dashboard
//         </Typography>

//         <Grid container spacing={3}>
//           <Grid item xs={12} sm={6} md={4}>
//             <Card sx={{ backgroundColor: "#ffffff", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
//               <CardContent>
//                 <Typography variant="h6" fontWeight="bold">
//                   Orders
//                 </Typography>
//                 <Typography variant="body1" color="text.secondary">
//                   150 total orders
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Card sx={{ backgroundColor: "#ffffff", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
//               <CardContent>
//                 <Typography variant="h6" fontWeight="bold">
//                  <Link to={`/wishlist`}>
//                  WishList
//                  </Link>
//                 </Typography>
//                 <Typography variant="body1" color="text.secondary">
//                   75 items in wishlist
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Card sx={{ backgroundColor: "#ffffff", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
//               <CardContent>
//                 <Typography variant="h6" fontWeight="bold">
//                   Products
//                 </Typography>
//                 <Typography variant="body1" color="text.secondary">
//                   120 total products
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Card sx={{ backgroundColor: "#ffffff", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
//               <CardContent>
//                 <Typography variant="h6" fontWeight="bold">
//                 <Link>
//                 Account Details
//                 </Link>
//                 </Typography>
//                 <Typography variant="body1" color="text.secondary">
//                   200 customers
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default AdminDash;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Typography,
//   Box,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Divider,
// } from "@mui/material";
// import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
// import CropOriginalOutlinedIcon from "@mui/icons-material/CropOriginalOutlined";
// import EmojiPeopleOutlinedIcon from "@mui/icons-material/EmojiPeopleOutlined";
// import MarkUnreadChatAltOutlinedIcon from "@mui/icons-material/MarkUnreadChatAltOutlined";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";

// const navItems = [
//   {
//     section: "Products",
//     icon: <AddShoppingCartOutlinedIcon />,
//     items: [
//       { text: "All Products" },
//       { text: "Create Products" },
//       { text: "Best Selling Products" },
//     ],
//   },
//   {
//     section: "Orders",
//     icon: <ShoppingBagOutlinedIcon />,
//     items: [{ text: "All Orders" }],
//   },
//   {
//     section: "Categories",
//     icon: <CategoryOutlinedIcon />,
//     items: [
//       { text: "Parent Category" },
//       { text: "Create Parent Category" },
//       { text: "All Parent Categories" },
//       { text: "Subcategories" },
//       { text: "Create Category" },
//       { text: "All Categories" },
//     ],
//   },
//   {
//     section: "Carousel",
//     icon: <CropOriginalOutlinedIcon />,
//     items: [{ text: "Manage Carousel" }],
//   },
//   {
//     section: "Customers",
//     icon: <EmojiPeopleOutlinedIcon />,
//     items: [{ text: "All Customers" }],
//   },
//   {
//     section: "Reviews",
//     icon: <MarkUnreadChatAltOutlinedIcon />,
//     items: [{ text: "Manage Reviews" }],
//   },
// ];

// const AdminNav = () => {
//   const navigate = useNavigate();
//   const [active, setActive] = useState("");

//   return (
//     <Box
//       sx={{
//         width: "300px",
//         maxHeight: "80vh",
//         overflowY: "auto",
//         borderRight: "1px solid #ddd",
//         p: 2,
//         backgroundColor: "#f9f9f9",
//         "&::-webkit-scrollbar": {
//           width: "8px",
//         },
//         "&::-webkit-scrollbar-thumb": {
//           backgroundColor: "rgba(0, 0, 0, 0.3)",
//           borderRadius: "4px",
//         },
//         "&::-webkit-scrollbar-thumb:hover": {
//           backgroundColor: "rgba(0, 0, 0, 0.5)",
//         },
//       }}
//     >
//       <List>
//         {navItems.map(({ section, icon, items }) => (
//           <Box key={section}>
//             <ListItem disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>{icon}</ListItemIcon>
//                 <ListItemText
//                   primary={section}
//                   primaryTypographyProps={{
//                     variant: "body2",
//                     sx: { fontWeight: "bold", color: "rgba(0, 0, 0, 0.87)" },
//                   }}
//                 />
//               </ListItemButton>
//             </ListItem>
//             <List component="div" disablePadding>
//               {items.map(({ text }) => {
//                 const lcText = text.toLowerCase().replace(" ", "");
//                 return (
//                   <ListItem
//                     key={text}
//                     disablePadding
//                     sx={{
//                       pl: 4,
//                       backgroundColor: active === lcText ? "#e3f2fd" : "transparent",
//                       "&:hover": {
//                         backgroundColor: "#f1f1f1",
//                       },
//                     }}
//                   >
//                     <ListItemButton
//                       onClick={() => {
//                         navigate(`/${lcText}`);
//                         setActive(lcText);
//                       }}
//                     >
//                       <ListItemText
//                         primary={text}
//                         primaryTypographyProps={{
//                           variant: "body2",
//                           sx: { color: "rgba(0, 0, 0, 0.87)" },
//                         }}
//                       />
//                     </ListItemButton>
//                   </ListItem>
//                 );
//               })}
//             </List>
//             <Divider />
//           </Box>
//         ))}
//       </List>
//     </Box>
//   );
// };

// export default AdminNav;


// 

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Button,
  Grid,
  Card,
  CardContent,
  Drawer,
  useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import CropOriginalOutlinedIcon from "@mui/icons-material/CropOriginalOutlined";
import EmojiPeopleOutlinedIcon from "@mui/icons-material/EmojiPeopleOutlined";
import MarkUnreadChatAltOutlinedIcon from "@mui/icons-material/MarkUnreadChatAltOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import { EveryDaySales, MonthlySalesGraph, SalesByPie,TotalSalesByMonth,NewCustomersByMonth,EveryDaysOrders, EveryDaysOrdersNumber } from "../../components";
import BASE_URL from "../../config";

const navItems = [
  {
    section: "Products",
    icon: <AddShoppingCartOutlinedIcon />,
    items: [

      { text: "All Products", description: "View the entire product catalog." },
      { text: "Create Products", description: "Add new products to your store." },
      { text: "Best Selling Products", description: "See the top-selling products." },
       
    ],
  },
  {
    section: "Orders",
    icon: <ShoppingBagOutlinedIcon />,
    items: [
        { text: "All Orders", description: "Manage customer orders." }
       
    ],
  },
  {
    section: "Categories",
    icon: <CategoryOutlinedIcon />,
    items: [
      //   { text: "Parent Category", description: "View all parent categories." },
      // { text: "Create Parent Category", description: "Add a new parent category." },
      // { text: "All Parent Categories", description: "Manage parent categories." },
      // { text: "Subcategories", description: "View all subcategories." },
      { text: "Create Category", description: "Add a new category." },
      { text: "All Categories", description: "Manage all categories." },
    ],
  },
  // {
  //   section: "Carousel",
  //   icon: <CropOriginalOutlinedIcon />,
  //   items: [
  //       { text: "Manage Carousel", description: "Customize the homepage carousel." },
  //   ],
  // },
  {
    section: "Customers",
    icon: <EmojiPeopleOutlinedIcon />,
    items: [
        { text: "All Customers", description: "Manage customer information." }
    ],
  },
  {
    section: "Reviews",
    icon: <MarkUnreadChatAltOutlinedIcon />,
    items: [
        { text: "Manage Reviews", description: "View and moderate customer reviews." },
    ],
  },
];

const AdminNav = () => {
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState({});
  const [active,setActive]=useState("")
  const [detailedView,setDetailedView]=useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleDrawer = (open) => setMobileOpen(open);

  const drawerContent = (
    <Box sx={{ width: 300, p: 2 }}>
      <Button
        variant="outlined"
        onClick={() => setDetailedView((prev) => !prev)}
        sx={{ mb: 2, width: "100%", textTransform: "none" }}
      >
        {detailedView ? "Explain Less" : "Explain More"}
      </Button>
      <List>
        {navItems.map(({ section, icon, items }) => (
          <Box key={section}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => toggleSection(section)}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={section} sx={{ fontWeight: "bold" }} />
              </ListItemButton>
              <IconButton onClick={() => toggleSection(section)}>
                {expandedSections[section] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </ListItem>
            {expandedSections[section] && (
              <List component="div" disablePadding>
                {items.map(({ text, description }) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton onClick={() => navigate(`/${text.toLowerCase().replace(/\s+/g, "")}`)}>
                      <ListItemText primary={text} secondary={detailedView ? description : null} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            )}
            <Divider />
          </Box>
        ))}
      </List>
    </Box>
  );


  return (
    
<Box display="flex" height="120vh">
      {isMobile ? (
        <>
        <Box
        sx={{
          // position:"fixed",
          bottom:492,
        
        left:1,
          zIndex:400,
        }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => toggleDrawer(true)}
            sx={{ m: 2 }}
          >
            <MenuIcon />
          </IconButton>
          </Box>
          <Drawer
            anchor="left"
            open={mobileOpen}
            onClose={() => toggleDrawer(false)}
            ModalProps={{ keepMounted: true }}
          >
            {drawerContent}
          </Drawer>
        </>
      ) : (
        <Box sx={{ width: "300px", borderRight: "1px solid #ddd" }}>{drawerContent}</Box>
      )}
     {/* Main Dashboard */}
     <Box flexGrow={1}
    p={3}
    sx={{
      maxHeight: "calc(120vh - 64px)", // Adjust height based on header or other fixed elements
      overflowY: "auto", // Make the content area scrollable
    }}
     
     >
        <Typography variant="h4" fontWeight="bold" mb={3}>
          Dashboard
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={8}>
           
          <Card sx={{ backgroundColor: "#ffffff", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
               <Link to={`everydaysorders`}>
              <EveryDaysOrdersNumber/>
               </Link>
                </Typography>
                {/* <Typography variant="body1" color="text.secondary">
                  120 total products
                </Typography> */}
              </CardContent>
            </Card>
          </Grid>
         
          <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: "#ffffff", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
              <CardContent>
                <Typography variant="h6" fontWeight="semibold">
                 <Link to={`/totalsalesbymonth`}>
                <TotalSalesByMonth/>
                 </Link>
                </Typography>
                {/* <Typography variant="body1" color="text.secondary">
                  75 items in wishlist
                </Typography> */}
              </CardContent>
            </Card>
            <Card sx={{ backgroundColor: "#ffffff", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
               <Link to={`newcustomer`}>
               <NewCustomersByMonth/>
               </Link>
                </Typography>
                {/* <Typography variant="body1" color="text.secondary">
                  120 total products
                </Typography> */}
              </CardContent>
            </Card>
            
          </Grid>
         
          <Grid item xs={12} sm={12} md={6}>
            <Card sx={{ backgroundColor: "#ffffff",
          
               boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
               width:"100%",
              }}
               >
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                <Link to={`/monthysalesgraph`}>
                <MonthlySalesGraph/>
              
                </Link>
                </Typography>
                
              </CardContent>
              


            </Card>
             
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Card sx={{ backgroundColor: "#ffffff",
          
               boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
               width:"100%",
              }}
               >
              <CardContent>
                <Typography variant="h6" fontWeight="normal">
                <Link to={`/monthysalesbypie`}>
                <SalesByPie/>
              
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

export default AdminNav;
