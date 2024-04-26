
import { useRef, useState } from 'react';


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
        <img
      onClick={handleChange}
      ref={imgRef}
      className='admire'
      src={address}
      alt=""
    />
    </div>
  );
}

export default Admire
