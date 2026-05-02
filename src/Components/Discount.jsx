import React, { useState } from 'react'
import discount from "../assets/discount.png"
import mainbanner from "../assets/mainbanner.png"
import uniqdis from "../assets/uniqdis.png"
import Container from './Container'

const Discount = () => {

     let [Distabs, setDistabs] = useState("wood");
        
            let disTab = [
                
                { key: "wood", label: "Wood Chair"},
                { key: "plastic", label: "Plastic Chair"},
                { key: "sofa", label: "Sofa Colletion"}
        
            ];
        
            let disimg = {
        
                wood: [discount],
                plastic: [mainbanner],
                sofa: [uniqdis]
            }
        
            let handledistab = (but)=>{
                setDistabs(but.key);
                
            }

  return (
     <section>
            <Container>
                <div className="">
                <h2 className='2xs:text-[20px] xs:text-[28px] sm:text-[36px] md:text-[40px] lg:text-[42px] xl:text-[44px] font-bold font-josefin text-[#00009D] text-center xl:my-[64px]'>Discount Item</h2>
                </div>

                <div className="2xs:text-center xl:flex justify-center gap-x-8">
                    {disTab.map((but)=>(
                    <div className="">
                    <h2 key={but.key}
                    onClick={()=>handledistab(but)}
                     className={`2xs:text-[14px] sm:text-[16px] md:text-[30px] xl:text-[18px] text-[#151875] font-Lato font-bold cursor-pointer ${Distabs === but.key ? "text-[red]": "text-[#151875]"}`}>{but.label}</h2>
                    </div>
                    ))}
                </div>

                <div className="">
                    {disimg[Distabs].map((img, index)=>(
                    <div className="flex justify-center itmes-center my-[64px] xl:h-[600px]">
                        <img className='w-full px-2' src={img} alt={`img ${index}`} />
                    </div>
                    ))}
                </div>
            </Container>
        </section>
  )
}

export default Discount