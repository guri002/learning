import React from 'react'
import Box from './Box'

const Grid = () => {

 const data = [
    {
     title: "Recommend a dish",
     description: "to impress a date who's a picky eater"
 },
    {
     title: "Create a character",
     description: "to start a film club"
 },
    {
     title: "Give me ideas",
     description: "to impress a date who's a picky eater"
 },
    {
     title: "Help me pick",
     description: "an outfit that will look good on camera"
 },
]

  return (
    <div className='container mx-auto bg-[#ffffff]'>
    <div className=' grid-cols-2 md:grid'>
        {
            data.map(({title, description}:any)=> {
                return  <div className='border border-[#e5e5e5] rounded-lg p-2 m-[6px] hover:bg-[#ececf1] hover:cursor-pointer hover:border-[#d4d4d8]'>
                <h4 className="font-semibold text-[#40414f]">{title}</h4>
                <p className='text-[#9fa0a7] text-[14px]'>{description}</p>
              </div>
                 
            })
        }
    </div>
    
 </div>
  )
}

export default Grid