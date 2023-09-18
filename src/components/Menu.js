import React ,{useState}from 'react'

const Menu = () => {
    const[text,setText]=useState('bar')
    const[text1,setText1]=useState('bar')
    const[text2,setText2]=useState('bar')
    
  
    const handelClick=()=>{
        setText((prevClassName) => prevClassName === 'bar' ? 'ba' : 'bar');
        setText1((prevClassName) => prevClassName === 'bar' ? 'ba1' : 'bar');
        setText2((prevClassName) => prevClassName === 'bar' ? 'ba2' : 'bar');

    }
  return (
    <>
    <div className='menu' onClick={handelClick}>
      <div  id='bar1' className={text} ></div>
      <div  id='bar2'className={text1}></div>
      <div  id='bar3' className={text2}></div>
    </div>
    </>
  )
}

export default Menu