import React, { useState } from 'react'
import Container from './Container';
import feauter1 from "../assets/feauter1.png"
import feauter2 from "../assets/feauter2.png"
import feauter3 from "../assets/feauter3.png"
import feauter4 from "../assets/feauter4.png"
import lbot1 from "../assets/lbot1.png"
import letbot2 from "../assets/letbot2.png"
import letbot3 from "../assets/letbot3.png"


const Latest = () => {

    let [activetab, setActivetab] = useState("new");
        
          const taps = [
        
            { key: "new", label:"New Arrival" },
            { key: "best", label:"Best Seller" },
            { key: "feauter", label:"Featured" },
            { key: "special", label:"Special Offerl" },
        
          ];
        
          const sliderimg = {
            new: [feauter1, feauter1, feauter1],
            best: [feauter2, feauter2, feauter2],
            feauter: [feauter3, feauter3, feauter3],
            special: [feauter4, feauter4, feauter4]
          };

  return (
    <>
    
    <section>
           <Container>

               <div className="2xs:mt-[20px] xl:mt-[64px]">
                 <h2 className='2xs:text-[20px] sm:text-[36px] md:text-[56px] xl:text-[42px] text-[#151875] font-josefin font-bold text-center'>Leatest Products</h2>
               </div>

               <div className="2xs:text-center xl:flex justify-center gap-x-8 items-center 2xs:mt-[10px] xl:mt-[30px]">

                 {taps.map((tab)=>(
                 <div className="">
                   <h2
                   key={tab.key}
                   onClick={()=>setActivetab(tab.key)}
                    className={`2xs:text-[14px] sm:text-[16px] md:text-[36px] xl:text-[18px] text-[#151875] font-Lato font-bold cursor-pointer ${activetab === tab.key ? "text-[red]": "text-[#151875]" }`}>{tab.label}</h2>
                 </div>
                 ))}
               </div>

               <div className="2xs:my-[30px] xl:my-[64px] flex justify-between">
                 {sliderimg[activetab].map((img, index)=>(
                 <div className="bg-[purple] w-[30%] 2xs:p-2 2xs:h-[100px] sm:h-[200px] md:p-4 md:h-[300px] xl:h-[400px] xl:p-8">
                   <img className='w-full' src={img} alt={`img ${index}`} />
                 </div>
                 ))}
               </div>
           </Container>
       </section>


                 <section className='my-[64px]'>
                   <Container>
                     

                       <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                       
                         <div>
                           <img className="w-full" src={lbot1} alt="bot1" />
                         </div>

                       
                         <div>
                           <img className="w-full" src={letbot2} alt="bot2" />
                         </div>

                       
                         <div className="lg:col-span-2 lg:flex lg:justify-center xl:col-span-1">
                           <img className="w-full xl:w-full lg:w-1/2" src={letbot3} alt="bot3" />
                         </div>
                       </div>
                   </Container>
                 </section>
   
    </>
  )
}

export default Latest