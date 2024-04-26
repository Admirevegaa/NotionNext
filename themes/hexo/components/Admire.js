
import { useRef, useState } from 'react';
import {motion} from 'framer-motion'


let count = 0;
let fakeaddress = 'p1.png'
let flag = true
function Admire() {
  
  const imgRef = useRef(null)
  
 
  //点击切换
  const [address,setAddress] = useState('p1.png')
  
  const handleChange = () =>{
    if(count === 3){
      count = 0
      if(flag){
        fakeaddress = 'p2.png'
        flag = false
        setAddress(fakeaddress)
      }else { 
        flag = true
        fakeaddress = 'p1.png'
        setAddress(fakeaddress)
      }
      console.log(count,flag)
    }else{
      count = count + 1;
      console.log('flag:',flag)
      console.log(fakeaddress)
      console.log('状态',imgRef.current)
    }
    
  }
  return (
    <div>
    <div
      style={{
        display:'flex',
        flexDirection:'column',
        gap:30
      }}
      ></div>
    <motion.div
      style={{
        width:256,
        height:256,
        position:'fixed',
        display:'block',
        left:-5,
        bottom:100,
        borderRadius:'20px'
      }}
      initial={{
        rotateY:0
      }}
      animate={{
          y:flag ? [0,-20,0] : [0,-21,0],
          rotateY:flag ? [0,180]:[0,179],
          transition:{
            duration:0.5,
            rotateY:{duration:1},
          },
          
          
        }}
          
      >
        <img
      onClick={handleChange}
      ref={imgRef}
      className='admire'
      src={address}
      alt=""
    />
    </motion.div>
    </div>
  );
}

export default Admire