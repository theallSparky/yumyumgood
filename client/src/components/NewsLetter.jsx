import React from 'react'

const NewsLetter = () => {
  return (
    <div className='max-w-[1520px] m-auto text-white px-4 bg-[#24262b]'>
        <div className='mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>

                <h1>Need advice on how to improve your flow?</h1>
                <p>Sign up now to join our newsletter and stay up to date!</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input />
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter