import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoGridSharp } from 'react-icons/io5'
import { FaThList } from 'react-icons/fa'
import Container from '../Components/Container'
import Post from '../Components/Post'
import Pagination from '../Components/Pagination'
import { Apidata } from '../Components/ContextApi'

const Products = () => {

     let info = useContext(Apidata);
     console.log(info);
     
        
          // 🔥 সব state একসাথে উপরে
          let [perpage, setperpage] = useState(8)
          let [currentpage, setcurrentpage] = useState(1)
          let [selectedCategory, setSelectedCategory] = useState("All Product")
        
           // category Start ///
        
        let [categoryspecifik, setcategoryspecifik] = useState([])
        
        useEffect(()=>{
          setcategoryspecifik([...new Set(info.map((item)=>item.category))])
        },[info])
        
          // ✅ Filtering আগে
          let filteredData = selectedCategory === "All Product"
            ? info
            : info.filter((item) => item.category === selectedCategory)
        
        
             // category change //
        
        
        let handlecate = (e) => {
          setSelectedCategory(e.target.value)
          setcurrentpage(1) // category change করলে page 1 এ যাবে
        }
        
          // ✅ Pagination calculation
          let lastpage = perpage * currentpage
          let firstpage = lastpage - perpage
        
          let allpage = filteredData.slice(firstpage, lastpage)
        
          const totalPages = Math.ceil(filteredData.length / perpage);
        
        
        // 0 based page array
         let pageNumber = Array.from({ length: totalPages }, (_, i) => i);
        
        const windowSize = 4;
        
        let start = currentpage - 1;
        
        // যাতে negative না হয়
        if (start < 0) start = 0;
        
        // যাতে totalPages cross না করে
        if (start + windowSize > totalPages) {
          start = totalPages - windowSize;
        }
        
        if (start < 0) start = 0;
        
        const visiblePages = pageNumber.slice(start, start + windowSize);
        
        
         const paginate = (pageIndex) => {
          setcurrentpage(pageIndex + 1);
        };
        
        
          let next = ()=>{
            if (currentpage < pageNumber.length) {
              setcurrentpage((state)=>state + 1)
            }
          };
        
          let prev =()=>{
            if( 1 < currentpage){
              setcurrentpage((state)=>state - 1)
            }
          };
        
        
        
        // perpage Change  Start //
          
          let handlechange = (e)=>{
          
            setperpage(Number(e.target.value));
        
            setcurrentpage(1)
          
          };

          // list / grid //

          let [listitem, setlistitem] = useState("");

          let handlegrid= ()=>{
              setlistitem("")
              
          }

           let handlelist= ()=>{
             setlistitem("active");
              
          }

  return (
      <>
      <section className='bg-[#F6F5FF] py-[64px]'>
        <Container>
            <div className="">
                <h2 className='text-[36px] text-[#101750] font-josefin py-4 font-bold'>Shop Grid Default</h2>
                <div className="flex gap-x-2 items-center">
                  <Link to="/">
                  <h3 className='text-[#101750] hover:text-[#FB2E86] text-[16px] font-Lato'>Home .</h3>
                  </Link>
                  <Link to="/products">
                  <h3 className='text-[#101750] hover:text-[#FB2E86] text-[16px] font-Lato'>Pages .</h3>
                  </Link>
                  <h3 className='text-[#101750] hover:text-[#FB2E86] text-[16px] font-Lato'>Shop Grid Default .</h3>
                </div>
            </div>
        </Container>
    </section>


    <section className='mt-[64px]'>
        <Container>
            <div className="">
              <div className="grid 2xs:grid-cols-1 xl:grid-cols-5 gap-2 items-center">
                    <div className="2xs:col-span-0 xl:col-span-2">
                      <div className="">
                        <h2 className='text-[#151875] md:text-[36px] xl:text-[22px] font-josefin font-bold'>Ecommerce Acceories & Fashion item </h2>
                        <h3 className='md:text-[28px] xl:text-[14px] text-[#8A8FB9] font-Lato font-medium mt-2'>About 9,620 results (0.62 seconds)</h3>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="flex items-center gap-x-3">
                        <div className="">
                          <h3 className='md:text-[32px] xl:text-[14px]'>Per Page:</h3>
                        </div>
                        <div className="border w-[80px] flex justify-center">
                          <form>
                            <label htmlFor="" className=''>
                              <select className='outline-0 md:text-[28px] xl:text-[16px]' onChange={handlechange}>
                               <option value="8">08</option>
                               <option value="12">12</option>
                               <option value="16">16</option>
                               <option value="20">20</option>
                              </select>
                            </label>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex items-center 2xs:gap-x-2 xl:gap-x-0 xl:justify-between">
                        <div className="">
                          <h3 className='md:text-[32px] xl:text-[14px]'>Sort By:</h3>
                        </div>
                       
                        <div className=" w-[180px] flex justify-center p-2">
                            <form>
                              <select className="outline-none border p-2 w-full 2xs:text-[12px] md:text-[20px] xl:text-[16px]" onChange={handlecate}>
                                <option value="All Product">All Product</option>
                                {categoryspecifik.map((item, index) => (
                                  
                                  <option key={index} value={item}>
                                    {item}
                                  </option>
                                
                                ))}
                              </select>
                            </form>
                          </div>

                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="flex gap-x-2 items-center">
                        <div className="">
                            <h3 className='md:text-[32px] xl:text-[16px]'>View :</h3>
                        </div>
                        <div className="flex gap-x-4 items-center">
                          <div className="">
                              <i><IoGridSharp  className='md:text-[30px] xl:text-[24px]' onClick={handlegrid}/></i>
                          </div>
                          <div className="">
                              <i><FaThList  className='md:text-[30px] xl:text-[24px]' onClick={handlelist}/></i>
                          </div>
                        </div>
                      </div>
                    </div>
              </div>
            </div>
        </Container>

          <Post allpage={allpage} filteredData={filteredData} listitem={listitem}/>
          <Pagination  pageNumber={visiblePages} paginate={paginate} currentpage={currentpage} next={next} prev={prev}/>

    </section>
    </>
  )
}

export default Products