"use client"

import { useState } from "react";
import Link from "next/link";
import classNames from "classnames";

const Links=()=>{
    const linklist = [
        { 
            path: '/', 
            title: 'HOME' ,
        },
        { 
            path: '/mygo', 
            title: 'MyGo!!!!!' ,
        },
        { 
            path: '/about', 
            title: 'ABOUT' ,
        },
      ]
    const[title,setTitle] = useState('HOME'); 
    const handleClassChange=(title)=>{
        console.log(title)
        setTitle(title)
    } 

    return(
        <span className="bao">  
        {linklist.map(item =>(
            <Link
            key={item.title}
            href={item.path}
            onClick={()=>handleClassChange(item.title)}
            className={classNames('link',{active:title === item.title})}
            >
            {item.title}
            </Link>
        ))} 
        </span>
    )
}

export default Links