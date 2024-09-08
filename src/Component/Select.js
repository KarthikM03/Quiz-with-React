import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Select() {
    let [val, setVal] = useState(10)
    const Num = (e) => {
        return setVal(e.target.value)
    }

    const select = <div className='flex flex-col justify-center items-center '>
        <h1 className='text-white text-5xl mb-2'>Let Start...</h1>
        <div className='sm:w-95vw md:w-[40vw] lg:w-[60vw] min-h-full p-3 py-20  bg-blue-400 rounded-md items-center flex flex-col gap-y-2 '>
            <p className='text-3xl mb-3'>Select the No.of question in the QUIZ</p>
            <select name="" id="demo" defaultValue={val} onChange={(e) => { Num(e) }} className=' rounded-lg p-1 '>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
            </select>
            <Link rel="stylesheet" to='/quiz'>
                <button className='my-2 px-4 border-2 font-semibold border-black active:bg-green-600 rounded-md'>Start <FontAwesomeIcon className='ml-1' icon={faArrowRight}></FontAwesomeIcon></button></Link>
        </div>
    </div>
    return [select, val]
}

export default Select