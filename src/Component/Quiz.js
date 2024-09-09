import { useEffect, useRef, useState } from 'react';
import UseCustomQues from '../Hooks/UseCustomQues'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRotateBack, faArrowRotateForward } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';

function Quiz(Num) {
    const [a, setA] = useState([])
    useEffect(() => {
        setA(UseCustomQues(Num.val))
    }, [Num.val])
    let [i, Si] = useState(0)
    let [Score, SetScore] = useState(0)
    let question = a[i]
    let [lock, setLock] = useState(false)
    let Option1 = useRef(null)
    let Option2 = useRef(null)
    let Option3 = useRef(null)
    let Option4 = useRef(null)

    let Option_Array = [Option1, Option2, Option3, Option4]

    const hh = (e, ans) => {
        if (lock === false) {
            if (ans === question.answer) {
                e.target.classList.add("bg-green-400", "border-green-700")
                setLock(true)
                SetScore(prev => prev + 1)
            }
            else {
                e.target.classList.add("bg-red-400", "border-red-700")
                setLock(true)
                Option_Array[question.answer - 1].current.classList.add("bg-green-400", "border-green-700")
            }
        }
    }

    const Changeque = () => {
        if (lock === true) {
            Si(++i)
            setLock(false)
            Option_Array.map((option) => {
                option.current.classList.remove("bg-red-400", "border-red-700")
                option.current.classList.remove("bg-green-400", "border-green-700")

                return null
            })
        }
    }

    return (
        <div className='flex justify-center w-full min-h-full flex-col items-center'>
            <h1 className='text-white text-5xl mb-2 '>QUIZ</h1>
            {
                i < a.length ?

                    <div className='sm:w-95vw md:w-[40vw] lg:w-[60vw] min-h-full p-8 bg-blue-400 rounded-md items-center flex flex-col gap-y-2 '>

                        <h1 className='text-2xl bg-orange-500 w-[90%] p-2 rounded-md'>{i + 1}. {question.question}</h1>
                        <div className="container flex flex-col gap-3 justify-center items-center">
                            <button ref={Option1} onClick={(e) => { hh(e, 1) }} className='my-2 py-1 border-2 border-black w-[50%]  rounded-md' >{question.option1}</button>
                            <button ref={Option2} onClick={(e) => { hh(e, 2) }} className='my-2 py-1 border-2 border-black w-[50%]  rounded-md' >{question.option2}</button>
                            <button ref={Option3} onClick={(e) => { hh(e, 3) }} className='my-2 py-1 border-2 border-black w-[50%]  rounded-md' >{question.option3}</button>
                            <button ref={Option4} onClick={(e) => { hh(e, 4) }} className='my-2 py-1 border-2 border-black w-[50%]  rounded-md' >{question.option4}</button>
                        </div>

                        <div className='flex gap-3 justify-evenly'>
                            <button onClick={() => { Changeque() }} className={`my-2 px-4 border-2 border-black active:bg-green-500 rounded-md ${lock?'':'hidden'} `}>{i < a.length - 1 ? <>Next <FontAwesomeIcon className='ml-1' icon={faArrowRight}></FontAwesomeIcon></> : "Sumbit"}</button>
                            <Link to='/' className='my-2 px-4 border-2 border-black  active:bg-red-500 rounded-md'> Reset <FontAwesomeIcon className='ml-1' icon={faArrowRotateForward} /> </Link>
                        </div>
                    </div>

                    : <div className='sm:w-95vw md:w-[40vw] lg:w-[60vw] p-8 bg-blue-400 rounded-md items-center flex flex-col gap-y-5' >
                        <h1 className='text-4xl'><b>Your Score :</b></h1>
                        <h1 className='text-3xl text-white'>{Score}</h1>
                        <Link to='/' className='my-2 px-4 border-2 border-black active:bg-green-600 rounded-md'>Play Again <FontAwesomeIcon className='ml-1' icon={faArrowRotateBack} /></Link>
                    </div>
            }
        </div>

    );
}

export default Quiz;
