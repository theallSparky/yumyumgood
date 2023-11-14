import React from 'react'
import { mealData } from '../data/data'

const Meal = () => {
  return (
    <div className='max-w-[1520px] m-auto px-2 py-12'>
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Our Meal</h1>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6'>
            {
                mealData.map((item)=>(
                    <div className='border-none hover:scale-105 duration-300'>
                        <img src={item.image}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Meal