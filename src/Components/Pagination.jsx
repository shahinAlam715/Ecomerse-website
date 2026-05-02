import React from 'react'
import Container from './Container'

const Pagination = ({pageNumber, paginate, currentpage, next, prev}) => {
  return (
     <section>
        <Container className="my-4">
                <div className="">
                <nav aria-label="Page navigation example">
                <ul className="flex -space-x-px text-sm cursor-pointer">
                    <li onClick={prev}>
                    <a className="flex items-center justify-center px-3 h-8 leading-tight text-[#262626] bg-[#ffff] border border-gray-300">Previous</a>
                    </li>

                    {pageNumber.map((item) => (
                <li key={item} onClick={() => paginate(item)}>
                    <button
                    className={`flex items-center justify-center px-3 h-8 border
                    ${currentpage === item + 1 
                        ? "flex items-center justify-center px-3 h-8 leading-tight text-[#ffff] bg-[#262626] border border-gray-300" 
                        : "flex items-center justify-center px-3 h-8 leading-tight text-[#262626] bg-[#ffff] border border-gray-300"}`}
                    >
                    {item + 1}
                    </button>
                </li>
                ))}

                    <li onClick={next}>
                    <a className="flex items-center justify-center px-3 h-8 leading-tight text-[#262626] bg-[#ffff] border border-gray-300">Next</a>
                    </li>
                </ul>
                </nav>
                </div>
        </Container>
    </section>
  )
}

export default Pagination