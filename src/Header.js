import React from 'react'
import image from './halfaimg.png'
export default function Header(){
    return (
          <div>
            <img src={image} className='img' />
            <h2>HALFA NGESU</h2>
            <h3>Web Developer</h3>
            <button className='btn'>connect</button>
            <button className='btn'>message</button>
          </div>
    )
}