// import {Box} from '@mui/material'
// import {styled} from '@mui/system'

// const FlexBetween=styled(Box)(
//     {
//         display:"flex",
//         justifyContent:"space-between",
//         alignItems:"center",
//     }
// );

// export default FlexBetween

// import { useState,useEffect } from "react";
// import {useLocation,useNavigate} from 'react-router-dom'
// import FlexBetween from './FlexBetween'


// import { Link } from "react-router-dom";
// import {
//   Typography,
//   Box,
//   Drawer,
//   IconButton,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText
// } from "@mui/material"

// import {
//   SettingsOutlined,
//   ChevronLeft,
//   ChevronRightOutlined,
//   HomeOutlined,
//   ShoppingCartOutlined,
//   Groups2Outlined,
//   ReceiptLongOutlined,
//   PublicOutlined,
//   PointOfSaleOutlined,
//   TodayOutlined,
//   CalendarMonthOutlined,
//   AdminPanelSettingsOutlined,
//   TrendingUpOutlined,
//   PieChartOutlined,

// }
// from '@mui/icons-material'


// const navItems=[
//   {
//     text:"Dashboard",
//     icon:<SettingsOutlined/>
//   },
//   {
//     text:"Products",
//     icon:<SettingsOutlined/>
//   },
//   {
//     text:"All Products",
//     icon:<SettingsOutlined/>
//   }
//   ,
//   {
//     text:"Create Products",
//     icon:<SettingsOutlined/>
//   }
  

// ]

// const AdminNav=()=>{

//     const [isProductMenuOpen,setIsProductMenuOpen]=useState(false);
//     const [isCategoryMenuOpen,setIsCategoryMenuOpen]=useState(false);
   
//     const [isSubCategoryMenuOpen,setIsSubCategoryMenuOpen]=useState(false);

//     const toggleProductMenu=()=>{
//         setIsProductMenuOpen(!isProductMenuOpen)
//     }
//     const toggleCategoryMenu=()=>{
//         setIsCategoryMenuOpen(!isCategoryMenuOpen)
//     }
//     const toggleSubCategoryMenu=()=>{
//         setIsSubCategoryMenuOpen(!isCategoryMenuOpen)
//     }
//     return (
    
//     <nav>
//         <ul className='nav flex-column'>
//         <li className="nav-item">
//                 <Link to="/admin/dashboard" className='nav-link'>Dashboard</Link>
//             </li>
//             <li className="nav-item">
//             <button 
//             onClick={toggleProductMenu} 
//             className="nav-link flex justify-between w-full"
//           >
//             Products
//             <span>{isProductMenuOpen ? "-" : "+"}</span>
//           </button>
//           {isProductMenuOpen && (
//             <ul className="ml-4">
//               <li className="nav-item">
//                 <Link to="admin/products" className="nav-link">All Products</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/admin/products/createproduct" className="nav-link">Create Product</Link>
//               </li>
              
//             </ul>
//           )}
//             </li>

           

//             <li className="nav-item">
//             <button 
//             onClick={toggleCategoryMenu} 
//             className="nav-link flex justify-between w-full"
//           >
//             Category
//             <span>{isCategoryMenuOpen ? "-" : "+"}</span>
//           </button>
//           {isCategoryMenuOpen && (
//             <ul className="ml-4">
//               <li className="nav-item">
//                 <Link to="/admin/category/categoryList" className="nav-link">All Category</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/admin/category/createcategory" className="nav-link">Create Category</Link>
//               </li>
             
//             </ul>
//           )}
              
//             </li>

//             <li className="nav-item">
//             <button 
//             onClick={toggleSubCategoryMenu} 
//             className="nav-link flex justify-between w-full"
//           >
//             Sub-Category
//             <span>{isSubCategoryMenuOpen ? "-" : "+"}</span>
//           </button>
//           {isSubCategoryMenuOpen && (
//             <ul className="ml-4">
//               <li className="nav-item">
//                 <Link to="/admin/products" className="nav-link">All Sub Category</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/admin/product/create" className="nav-link">Create Parent Category</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/admin/product/types" className="nav-link">Product Types</Link>
//               </li>
//             </ul>
//           )}
//             </li>

//             <li className="nav-item">
//             <button 
//             onClick={toggleSubCategoryMenu} 
//             className="nav-link flex justify-between w-full"
//           >
//             Admin Carousel
//             <span>{isSubCategoryMenuOpen ? "-" : "+"}</span>
//           </button>
//           {isSubCategoryMenuOpen && (
//             <ul className="ml-4">
//               <li className="nav-item">
//                 <Link to="/admin/carousel" className="nav-link">Carousel</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/admin/product/create" className="nav-link">Create Parent Category</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/admin/product/types" className="nav-link">Product Types</Link>
//               </li>

//             </ul>
//           )}
//           <li>
//            {navItems.map(({text})=>{
//             return(
//               <Typography>
//                 {text}
//               </Typography>
//             )

//            })}
//           </li>
//             </li>

//         </ul>
//     </nav>
//     )
// }

// export default AdminNav


// import { useState,useEffect } from "react";
// import {useLocation,useNavigate} from 'react-router-dom'
// import FlexBetween from './FlexBetween'


// import { Link } from "react-router-dom";
// import {
//   Typography,
//   Box,
//   Drawer,
//   IconButton,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Divider
// } from "@mui/material"

// import {
//   SettingsOutlined,
//   ChevronLeft,
//   ChevronRightOutlined,
//   HomeOutlined,
//   ShoppingCartOutlined,
//   Groups2Outlined,
//   ReceiptLongOutlined,
//   PublicOutlined,
//   PointOfSaleOutlined,
//   TodayOutlined,
//   CalendarMonthOutlined,
//   AdminPanelSettingsOutlined,
//   TrendingUpOutlined,
//   PieChartOutlined,

// }
// from '@mui/icons-material'


// const navItems=[
//   // {
//   //   text:"Dashboard",
//   //   icon:<SettingsOutlined/>
//   // },
//   {
//     text:"Products",
//     icon:<SettingsOutlined/>
  
//   },
//   {
//     text:"AllProducts",
   
//   }
//   ,
//   {
//     text:"CreateProducts",
    
//   },
//   {
//     text:"BestSellingProducts",
   
//   },
  
  
//   {
//     text:"Orders",
//     icon:<SettingsOutlined/>
   
//   },
  
//   {
//     text:"AllOrders",
   
//   },
  


  
//   {
//     text:"ParentCategory",
//     icon:<SettingsOutlined/>
   
//   },
//   {
//     text:"CreateParentCategory",
   
//   },
//   {
//     text:"AllParentCategory",
    
//   },
//   {
//     text:"Category",
//     icon:<SettingsOutlined/>
    
//   },
//   {
//     text:"AllCategory",
   
//   },
//   {
//     text:"CreateCategory",
    
//   },
//   {
//     text:"Carousel",
    

    
//   },

//   {
//     text:"Customers",
//     icon:<SettingsOutlined/>
    

    
//   },
//   {
//     text:"AllCustomers",
    

    
//   },
//   {
//     text:"Reviews",
    
   

    
//   },

  

// ]

// const AdminNav=()=>{

//     const [isProductMenuOpen,setIsProductMenuOpen]=useState(false);
//     const [isCategoryMenuOpen,setIsCategoryMenuOpen]=useState(false);
   
//     const [isSubCategoryMenuOpen,setIsSubCategoryMenuOpen]=useState(false);

//     const toggleProductMenu=()=>{
//         setIsProductMenuOpen(!isProductMenuOpen)
//     }
//     const toggleCategoryMenu=()=>{
//         setIsCategoryMenuOpen(!isCategoryMenuOpen)
//     }
//     const toggleSubCategoryMenu=()=>{
//         setIsSubCategoryMenuOpen(!isCategoryMenuOpen)
//     }

//     const [active ,setActive]=useState("");
//     const navigate=useNavigate();
//     const {pathname}=useLocation();
//     return (
    
    
//     <Box width='100' 
   

//      //sx={{ maxHeight: '80vh', overflowY: 'auto', width: '300px' }}
//      sx={{
//       maxHeight: '80vh',  // Adjust as needed
//       overflowY: 'auto',
//       width: '300px',
//       // border: '1px solid #ddd',
//       display: 'flex',
//       flexDirection: 'column',
//       padding: '0',  // Remove any padding
//     }}

//     // sx={{
//     //   maxHeight: '80vh',  // Adjust as needed
//     //   overflowY: 'auto',
//     //   width: '310px',
//     //   // border: '1px solid #ddd',
//     //   display: 'flex',
//     //   flexDirection: 'column',
//     //   padding: '0',  // Remove any padding
//     // }}
//     >
//       {/* <Box width="100%"> */}
//         <Box m="1rem 2rem 1rem 3rem">
//           <FlexBetween>
//             <Box display="flex" alignItems="center" gap="0.5rem">
//               <Typography variant="h4" fontWeight="bold">
//                 Admin Dashboard
//               </Typography>

//             </Box>
//           </FlexBetween>

//          </Box> 
//         <List>
//           {navItems.map(({text,icon})=>{
//             if(icon){
//               return(
//                 <Typography key={text}
//                 //  sx={{m:"2rem 0 0rem 1rem"}}
//                 variant="body2"
//                 sx={{m:"0rem 1rem 1rem 1rem"}}
//                  >
//                   {text}
//                   <Divider/>
//                 </Typography>
//               )
//             }
            
//             const lcText=text.toLowerCase();
//             return(
//               <ListItem sx={{m:"-1rem"}}>
//                 <ListItemButton
//                 onClick={()=>{
//                  navigate(`/${lcText}`);
//                  setActive(lcText);
//                 }}
//                 >
//                   <ListItemIcon
//                   // sx={{
//                   //   ml:"1rem"
//                   // }}
//                   >
//                     {icon}
//                   </ListItemIcon>
//                   <ListItemText
//                    primary={text}
//                    primaryTypographyProps={{ variant: "body2",
//                     // sx: { color: "text.primary" }

//                     // sx: { color: "rgba(255, 255, 255, 0.7)" }, 
//                    }} 
//                    />
//                     {active===lcText &&(
//                       <ChevronRightOutlined sx={{ml:"auto"}}/>
//                     )}

                 
                  
//                 </ListItemButton>
//               </ListItem>
//             )
//           })}
//         </List>

//       </Box>
      

//     // </Box>
//     )
// }

// export default AdminNav

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Collapse,
} from "@mui/material";
 import {
 
   ExpandMore,
  ExpandLess,
//   HomeOutlined,
//   ShoppingCartOutlined,
//   ReceiptLongOutlined,
//   CategoryOutlined,
//   LocalOfferOutlined,
//   AccountCircleOutlined,
//   ReviewOutlined,
  ChevronRightOutlined,
 } from "@mui/icons-material";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import CropOriginalOutlinedIcon from '@mui/icons-material/CropOriginalOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';

const navItems = [
  {
    section: "Products",
    icon: <AddShoppingCartOutlinedIcon />,
    items: [
      { text: "All Products" },
      { text: "Create Products" },
      { text: "Best Selling Products" },
    ],
  },
  {
    section: "Orders",
    icon: <ShoppingBagOutlinedIcon />,
    items: [{ text: "All Orders" }],
  },
  {
    section: "Categories",
    icon: <CategoryOutlinedIcon />,
    items: [
      { text: "Parent Category" },
      { text: "Create Parent Category" },
      { text: "All Parent Categories" },
      { text: "Subcategories" },
      { text: "Create Category" },
      { text: "All Categories" },
    ],
  },
  {
    section: "Carousel",
    icon: <CropOriginalOutlinedIcon/>,
    items: [{ text: "Manage Carousel" }],
  },
  {
    section: "Customers",
    icon: <EmojiPeopleOutlinedIcon/>,
    items: [{ text: "All Customers" }],
  },
  {
    section: "Reviews",
    icon: <MarkUnreadChatAltOutlinedIcon />,
    items: [{ text: "Manage Reviews" }],
  },
];

const AdminNav = () => {
  const [openSections, setOpenSections] = useState({});
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleToggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <Box
      sx={{
        width: "300px",
        maxHeight: "80vh",
        overflowY: "auto",
        borderRight: "1px solid #ddd",
        p: 2,
        backgroundColor: "#f9f9f9",
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <List>
        {navItems.map(({ section, icon, items }) => (
          <Box key={section}>
            <ListItem
              disablePadding
              sx={{
                backgroundColor: active.includes(section.toLowerCase())
                  ? "#e0f7fa"
                  : "transparent",
                borderRadius: "4px",
                mb: 1,
              }}
            >
              <ListItemButton onClick={() => handleToggleSection(section)}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText
                  primary={section}
                  primaryTypographyProps={{
                    variant: "body2",
                    sx: { color: "rgba(0, 0, 0, 0.87)" },
                  }}
                />
                {openSections[section] ? (
                  <ExpandLess sx={{ color: "rgba(0, 0, 0, 0.87)" }} />
                ) : (
                  <ExpandMore sx={{ color: "rgba(0, 0, 0, 0.87)" }} />
                )}
              </ListItemButton>
            </ListItem>
            <Collapse in={openSections[section]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {items.map(({ text }) => {
                  const lcText = text.toLowerCase().replace(" ", "");
                  return (
                    <ListItem
                      key={text}
                      disablePadding
                      sx={{
                        pl: 4,
                        backgroundColor: active === lcText ? "#e3f2fd" : "transparent",
                        "&:hover": {
                          backgroundColor: "#f1f1f1",
                        },
                      }}
                    >
                      <ListItemButton
                        onClick={() => {
                          navigate(`/${lcText}`);
                          setActive(lcText);
                        }}
                      >
                        <ListItemText
                          primary={text}
                          primaryTypographyProps={{
                            variant: "body2",
                            sx: { color: "rgba(0, 0, 0, 0.87)" },
                          }}
                        />
                        {active === lcText && <ChevronRightOutlined />}
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Collapse>
            <Divider />
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default AdminNav;
