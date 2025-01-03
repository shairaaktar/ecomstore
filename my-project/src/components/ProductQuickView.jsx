import { Dialog, DialogBackdrop, DialogPanel, Radio, RadioGroup } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { formattedPrice } from '../utils'
import { Link } from 'react-router-dom'
import { addItem } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'


const ProductQuickView=({isOpen,product,onClose,classNames})=>{

      const dispatch=useDispatch();

    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[2])
    if(!isOpen) return null;
   console.log('product',product)




   const addToCart = (event) => {
    event.preventDefault(); // Prevent form submission
    if (!product) return;
  
    
  
    const currentDate = new Date();
    const discountStartDate = new Date(product.discountStartDate);
    const discountEndDate = new Date(product.discountEndDate);
  
    const finalPrice =
      currentDate >= discountStartDate && currentDate <= discountEndDate
        ? product.discountPrice
        : product.price;
  
    const cartProduct = {
      cartID: `${product._id}-${selectedColor}-${selectedSize}`,
      productID: product._id,
      image: product.images[0]?.url,
      title: product.title,
      price: finalPrice,
      company: product.company,
      productColor: selectedColor,
      productSize: selectedSize,
      amount: 1, // Assuming you're adding one item per click
      quantity: product.quantity,
    };
  
    dispatch(addItem({ product: cartProduct }));
  };
  


    return(
        <Dialog  open={isOpen} onClose={onClose}
        //  className='fixed inset-0 z-10 flex justify-center items-center bg-gray-500/75'
        className="relative z-10  "
         >
            {/* <div className='bg-white p-8 rounded-lg shadow-2xl'> */}
            <DialogBackdrop
    transition
    className="fixed    inset-0 hidden bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:block"
  />
        <div className="fixed inset-0 z-10  w-screen overflow-y-auto">
        <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4 mt-16">
        <DialogPanel
        transition
        className="flex w-full transform text-left text-base transition data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:my-8 md:max-w-2xl md:px-4 data-[closed]:md:translate-y-0 data-[closed]:md:scale-95 lg:max-w-4xl"
      >
        <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button 
                onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
              >
                    <span className='sr-only'>Close</span>
                  
                    <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
                <div 
               className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8"
                >
                    <img src={product.images[0].url} alt={product.title} 
                  className="aspect-[2/3] w-full rounded-lg bg-gray-100 object-cover sm:col-span-4 lg:col-span-5"
                    />
                    <div
                    className="sm:col-span-8 lg:col-span-7"
                    >
                        <h1 className='text-xl font-bold'>{product.title}</h1>

                        <section aria-labelledby="information-heading" className='mt-2'>
                        <p>{product.description}</p>
                        <p>{formattedPrice(product.price)}</p>

                        <div>
                            <h4 className="sr-only">Reviews</h4>
                            <div className='flex items-center'>
                                <div className='flex items-center'>
                                {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          aria-hidden="true"
                          className={classNames(
                            product.averageRating > rating ? 'text-gray-900' : 'text-gray-200',
                            'size-5 shrink-0',
                          )}
                        />
                      ))}

                                </div>
                                <p className="sr-only">{product.rating} out of 5 stars</p>
                    <Link  to={`/products/${product._id}`} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      {product.reviewCount} reviews
                    </Link>


                            </div>
                        </div>
                        </section>

                        <section
                         aria-labelledby="options-heading" className="mt-10"
                        
                        >

<h3 id="options-heading" className="sr-only">
                  Product options
                </h3>

                <form>
                <fieldset aria-label="Choose a color">
                <legend className="text-sm font-medium text-gray-900">Color</legend>

               

<RadioGroup
value={selectedColor}
onChange={setSelectedColor}
className="mt-4 flex items-center space-x-3"
>
{product.colors.map((color) => (
<Radio
  key={color}
  value={color} // Directly use the color name as the value
  aria-label={color}
  className={classNames(
    'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1'
  )}
>
  <span
    aria-hidden="true"
    className={`w-8 h-8 rounded-full border border-black/10`}
    style={{ backgroundColor: color.toLowerCase() }} // Set background to color name
  />
  <span className="ml-2 text-sm text-black">{color}</span> {/* Display color name */}
</Radio>
))}
</RadioGroup>

                    </fieldset>

                    <fieldset aria-label="Choose a size" className="mt-10">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-gray-900">Size</div>
                      <Link to={ `/products/${product._id}`} className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                        Size guide
                      </Link>
                    </div>

                   

<RadioGroup
value={selectedSize}
onChange={setSelectedSize}
className="mt-4 grid grid-cols-4 gap-4"
>
{product.sizes.map((size) => (
<Radio
  key={size} // Use size as the key
  value={size} // Directly use the size value
  className={classNames(
    'cursor-pointer bg-white text-gray-900 shadow-sm',
    'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1'
  )}
>
  <span>{size}</span>
  <span
    aria-hidden="true"
    className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
  />
</Radio>
))}
</RadioGroup>

                  </fieldset>

                 

{product.quantity > 0 ? (
<button
type="button"
onClick={addToCart}
className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-800 px-8 py-3 text-base font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"

>
Add to Cart
</button>
) : (
<button
disabled
className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-400 px-8 py-3 text-base font-medium text-white"
>
Sold Out
</button>
)}


                </form>

                        </section>
                    </div>

                </div>
                </div>
                </DialogPanel>
                </div>

          </div>
          

        </Dialog>
    )
}

export default ProductQuickView


