import React, {useState,useEffect} from "react";
import { getProductsByCount,fetchProductsByFilter, getProductsFilters,getProductsCount,getGridProducts} from "../functions/products";
import { getCategories } from "../functions/category";
import { useSelector,useDispatch } from "react-redux";
import { FaHourglassEnd } from "react-icons/fa6";
import { formattedPrice } from "../utils";
import { Link, useSearchParams } from "react-router-dom";
import { Menu ,Slider,Checkbox,Radio, Button } from "antd";
import { DollarOutlined,DownSquareOutlined } from "@ant-design/icons";
import PaginationContainer from "./PaginationContainer";

import { useSpring,useSprings,animated,config } from "@react-spring/web";
const {SubMenu}=Menu
const PRODUCT_PER_PAGE=10

const ShopList=()=>{
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(false);
  const [price,setPrice]=useState([0,0])
  const [ok,setOk]=useState(false)
  const [categories,setCategories]=useState([]);
  const [categoryIds,setCategoryIds]=useState([])
  const [companies,setCompanies]=useState([]);
  const [colors,setColors]=useState([])
  const [company,setCompany]=useState('');
  const [color,setColor]=useState('')
  const [shipping,setShipping]=useState("")
  const [productsCount, setProductsCount] = useState(0);
  const [page, setPage] = useState(1);

  

  const search = useSelector((state) => state.searchState);
  const { text } = search;
  console.log('text',text)

let dispatch=useDispatch()


useEffect(()=>{
    loadAllProducts()

},[page])


  useEffect(()=>{
   
    getCategories().then((res)=>setCategories(res));
    getProductsFilters().then((res)=>{
        const {companies,colors}=res.data
        setCompanies(companies)
        setColors(colors)

    })
    // loadFilteredInfos();
    fetchProductsCount();
  },[]);

  console.log('categories',categories)

//   const loadAllProducts=()=>{
//     getProductsByCount(PRODUCT_PER_PAGE).then((p)=>{
//         setProducts(p);
//         setLoading(false);
//     })
//   };

const loadAllProducts = () => {
    const sort = "createdAt"; // Example sort criteria
    const order = "desc"; // Example order
    //  const page = 1; // Example page number

    setLoading(true);

    getGridProducts(sort, order, page).then((res) => {

       setProducts(prevProducts=>{
        const newProducts=res.data.products.filter(
            (newProduct)=>!prevProducts.some((prevProduct)=>prevProduct._id===newProduct._id)
        )
        return [...prevProducts,...newProducts]
       })
        setLoading(false);
    }).catch((error) => {
        console.error("Error loading products:", error);
        setLoading(false);
    });
};

  const fetchProductsCount = () => {
    getProductsCount().then((res) => {
        console.log('API RESPONSE',res);
        setProductsCount(res.total);
        console.log('Products Count', res.total);

    }).catch((error) => {
        console.error("Error fetching products count:", error);
    });
};


const springs=useSprings(
    products.length,
    products.map((product,index)=>({
        from:{opacity:0,transform:'translateY(20px)'},
        to:{opacity:1,transform:'translateY(0px)'},
        delay:index*100,

        config:{tension:200,friction:20}


    }))
)

const handleLoadMore=()=>{
    setPage(prevPage=>prevPage+1);
}



//   const loadFilteredInfos=async()=>{
//     try{
//         const {companies,colors}=await getProductsFilters();
//         console.log('companies,colors',companies,colors)
//         setCompanies(companies);
//         setColors(colors);

//     }catch(error){
//       console.error('Error loading filter:',error);
//     }
//   }
  console.log('companies--',companies)



  useEffect(()=>{
    const delayed=setTimeout(()=>{
        fetchProducts({query:text});
        if(!text){
            loadAllProducts()
        }
    },300)
    return ()=>clearTimeout(delayed)
       
  },[text])

  const fetchProducts=(arg)=>{
    fetchProductsByFilter(arg).then((res)=>{
        setProducts(res.data);
      })
  }

//   useEffect(()=>{
//     console.log('Ok to request');
//     fetchProducts({price});
//   },[ok]);

useEffect(() => {
    console.log("ok to request");
    fetchProducts({ price:price });
}, [ok]);

  const handleSlider=(value)=>{
    console.log('value',value)
    dispatch({
        type:"SEARCH_QUERY",
        payload:{text:""},
    });
    setCategoryIds([])
    setColor([])
    setCompany([])
    setPrice(value)
    setTimeout(()=>{
        setOk(!ok);
    },300);
    
  }

  const showCategories=()=>{
  return  categories.map((c)=>(
        <div key={c._id}>
            
            <Checkbox
            onChange={handleCheck}
            className="pb-2 pl-4 pr-4"
            value={c._id}
            name="category"
            checked={categoryIds.includes(c._id)}
            >
                {c.name}
               
            </Checkbox>
            

        </div>
    ))
  }

  const handleCheck=(e)=>{
    dispatch({
        type:"SEARCH_QUERY",
        payload:{text:""},
    });
    setPrice([0,0]);
    setColor([]);
    setCompany([])
    
    let inTheState=[...categoryIds];
   
    let justChecked=e.target.value;
  
    let foundInTheState=inTheState.indexOf(justChecked);
   
    if(foundInTheState===-1){
        inTheState.push(justChecked);
      
    }else{
        inTheState.splice(foundInTheState,1);

    }
    setCategoryIds(inTheState)
    fetchProducts({category:inTheState})
  }
   

//   const showCompany=()=>{
//   return  companies.map((c)=>(
//         <Radio
//         key={c}
//         value={c}
//         name={c}
//         checked={c===companies}
//         onChange={handleCompany}
//         className="pb-1 pl-4 pr-4"
//         >
//             {c}
//         </Radio>
//     ))
//   }

const showCompany = () => {
    return Array.isArray(companies) && companies.length > 0 ? (
        companies.map((c) => (
            <Radio
                key={c}
                value={c}
                name={c}
                checked={c === company}
                onChange={handleCompany}
                className="pb-1 pl-4 pr-4"
            >
                {c}
            </Radio>
        ))
    ) : (
        <p>No companies available</p>
    );
};


  const handleCompany=(e)=>{
    dispatch({
        type: "SEARCH_QUERY",
        payload: { text: "" },
    });
        setPrice([0, 0]);
        setCategoryIds([]);
        setCompany(e.target.value);
        fetchProducts({ company: e.target.value });
  }
  
  const showColors = () => {
    return Array.isArray(colors) && colors.length > 0 ? (
        colors.map((c) => (
            <Radio
                key={c}
                value={c}
                name={c}
                checked={c === color}
                onChange={handleColor}
                className="pb-1 pl-4 pr-4"
            >
                {c}
            </Radio>
        ))
    ) : (
        <p>No color available</p>
    );
};

const handleColor=(e)=>{
    dispatch({
        type: "SEARCH_QUERY",
        payload: { text: "" },
    });

    setPrice([0,0]);
    setCategoryIds([]);
   
    setColor(e.target.value);
    fetchProducts({color:e.target.value})
}

// const showShipping=()=>(
   
//         <>
//         <Checkbox
//         className="pb-2 pl-4 pr-4"
//         onChange={handleShippingChange}
//         value="No"
//         checked={shipping==="No"}
//         >
//           Yes
//         </Checkbox>
    
//         <Checkbox
//         className="pb-2 pl-4 pr-4"
//         onChange={handleShippingChange}
//         value="No"
//         checked={shipping==="No"}
//         >
//         No
//         </Checkbox>
//         </>
    
   
// )

const showShipping = () => (
    <>
        <Checkbox
            className="pb-2 pl-4 pr-4"
            onChange={handleShippingChange}
            value="Yes"
            checked={shipping === "Yes"}
        >
            Yes
        </Checkbox>

        <Checkbox
            className="pb-2 pl-4 pr-4"
            onChange={handleShippingChange}
            value="No"
            checked={shipping === "No"}
        >
            No
        </Checkbox>
    </>
);

const handleShippingChange=(e)=>{
    dispatch({
        type: "SEARCH_QUERY",
        payload: { text: "" },
    });
    setPrice([0, 0]);
    setCategoryIds([]);
   setCompany([])
   setColor([])
   setShipping(e.target.value);
   fetchProducts({shipping:e.target.value})
}

const handleReset=()=>{
    dispatch({
        type: "SEARCH_QUERY",
        payload: { text: "" },
    });
    setPrice([0, 0]);
    setCategoryIds([]);
    setCompany('');
    setColor('');
    setShipping('');
    loadAllProducts();
}



  return(
    <div>
    <div className="flex" >
        <div className="w-1/4 p-4" >
           
            <div >
           <h4 className="font-semibold text-lg mb-4">Search/Filter</h4>
            </div>
            <hr/>
            <Menu
            defaultOpenKeys={["1","2","3","4","5","6","7"]}
            mode="inline"
            >
                <SubMenu
                            key="1"
                            title={
                                <span className="h6">
                                    <DollarOutlined /> Price
                                </span>
                            }
                        >
                            <div>
                                <Slider
                                   className="ml-4 mr-4"
                                   tipFormatter={(v) => `$${v}`}
                                   range
                                   value={price}
                                   onChange={handleSlider}
                                   max="4999"
                                />
                            </div>
                        </SubMenu>
                        <SubMenu
                        key="2"
                        title={
                            <span className="h6">
                              <DownSquareOutlined/>  Categories
                                </span>
                        }
                        >
                            <div style={{marginTop:"-10px"}}>{showCategories()}</div>
                        </SubMenu>
                    <SubMenu
                    key="3"
                    title={
                        <span className="h6">
                            <DownSquareOutlined/> Companies

                        </span>
                    }
                    >
                        <div style={{ maringTop: "-10px" }} className="pr-5">
                            {showCompany()}

                        </div>

                    </SubMenu>
                    <SubMenu
                    key="4"
                    title={
                        <span className="h6">
                            <DownSquareOutlined/>Colors
                        </span>
                    }
                    >
                        <div style={{marginTop:"-10px"}} className="pr-5">
                            {showColors()}
                        </div>
                    </SubMenu>
                    <SubMenu
                            key="7"
                            title={
                                <span className="h6">
                                    <DownSquareOutlined /> Shipping
                                </span>
                            }
                        >
                            <div style={{ maringTop: "-10px" }} className="pr-5">
                                {showShipping()}
                            </div>
                        </SubMenu>
                       


            </Menu>
            <br/>         
           <Button onClick={handleReset} type="default" block>
            Reset

           </Button>

        </div>
        <div className="w-3/4 p-4" >
        <div className='mt-12 grid gap-y-8  '>
        {/* {products.map((product)=>{
                const {title,price,images,company,_id,quantity}=product
                const image=images[0]?.url;
                console.log('title,price,image,company,id',title,price,image,company)
                const dollarsAmount=formatPrice(price) */}

{springs.map((styles,index)=>{
                    const product=products[index];
                                     const {title,price,images,_id,quantity}=product
                                    const image=images[0]?.url;
                                    console.log('title,price,images,_id',title,price,images,_id)
                                //     const dollarsAmount=formatPrice(price)
                                // console.log(dollarsAmount)

                                const Price=formattedPrice(price)
                
                
                
                return(
                   <>
                   <animated.div key={_id} style={styles}>
                    <div>
                    <Link
                    key={_id}
                    to={`/products/${_id}`}
                    className='p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group'
                    
                    >
                        {/* <img
                        src={image}
                        alt={title}
                        className='h-24 w-60 rounded-lg sm:h-32 object-cover group-hover:scale-105 transition during-300'

                        /> */}
                        {image && (
              <img
                src={image}
                alt={title}
                // className='h-24 w-60  sm:h-32 object-cover group-hover:scale-105 transition duration-300'
                  className="w-40 h-40 object-cover rounded-md"
              />
            )}
                        <div className='ml-0 sm:ml-16'>
                            <h3 className='capatalize font-medium text-lg'>{title}</h3>
                            <h4 className='capatalize text-md text-neutral-content'>{company}</h4>

                        </div>
                        <p className='font-medium ml-0 sm:ml-auto text-lg'>{Price}</p>
                       
                       
                       <div className='ml-0 sm:ml-16'>
                       {quantity===0 &&(
                            <span className="text-red-500 font-bold">
                                Sold Out
                            </span>
                        )}

                        </div>
                        

                       
                       
                    </Link>
                    </div>
                    </animated.div>

                   
                   </>
                    
                )
            })}
            
        </div>
        {/* <PaginationContainer
                        current={page}
                        total={productsCount}
                        pageSize={PRODUCT_PER_PAGE}
                        onChange={(value) => setPage(value)}
                    /> */}

        {products.length<productsCount &&(
            <div className="flex justify-center mt-8">
            <button
            className="btn btn-primary"
            onClick={handleLoadMore}
            disabled={loading}
            >
                {loading ? "Loading..." :"Load More"}
            </button>
            </div>

        )}
        
        
      


        </div>

    

    </div>
    
    </div>
  )

}

export default ShopList;