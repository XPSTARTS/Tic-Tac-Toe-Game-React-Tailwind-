import React from 'react'

const Board = (props) => {
  return (
    <div className='border w-30 md:w-40 md:h-20 h-10 flex justify-center items-center font-bold text-2xl'
        onClick={props.onClick}
    >
        <h5 >
            {props.value}
        </h5>
    </div>
  )
}

export default Board
