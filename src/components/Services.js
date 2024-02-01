import { data } from "../data/services_data";

const Services = () => {
    
    return ( 
        
        <>
        <h2 className="font-bold text-3xl md:text-4xl mt-4 underline text-center ">SERVICES I OFFER</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-8 mt-8 mb-6 ">
        {data.map((item)=>{
            return(
                <div key={item.id} className="border  rounded-md py-8 px-2 text-center ">
                        <span>{item.point}</span>
                    <p className="font-semibold text-center">{item.services}  </p>
                    <p className="mt-4">{item.icon}</p>
                 
                </div>
            )
        }
        )}
        </div>
        </>
     );
}
 
export default Services;