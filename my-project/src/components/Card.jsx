import { Link } from "react-router-dom"

const Card=({text,to,carousalImages})=>{
    return(
        <div className="card glass bg-base-100 shadow-xl w-96">
            {/* <figure>
           <div className="hidden h-[10rem] lg:carousel carousel-center p-4 space-x-4 bg-meutral rounded-box">
           {carousalImages.map((image)=>{
                return(
                    <div key={image} className="carousel-item">
                        <img
                        src={image} alt="vintage"
                        className="rounded-box h-full w-120 object-cover"
                        
                        />

                    </div>
                )
             })}

           </div>

            </figure> */}
            <div className="card-body">
                <h2 className="card-title">{text}</h2>
                <div className="card-actions justify-end">
                  <Link to={to}>
                  <button className="btn btn-primary" >
                           Manage!
                    </button>
                  
                  </Link>
                </div>

            </div>
           
        </div>

    )

}

export default Card