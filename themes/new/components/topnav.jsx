import styles from "public/css/topnav.module.css"
import "public/css/topnav.css"
import Links from "./link"



const Topnav = () =>{
    
    
    return (
    <div className={styles.container}>
        <div className={styles.block}  >你发现了啥啊</div>
        <div className={styles.topnav}>
            <div className={styles.logo}>
                <a href="https://bang-dream.com/mygo">
                <img 
                    className={styles.logopic}
                    src="logo.png" 
                    alt=""
                />
                </a>
            </div>
            
            <div className={styles.linklist}>  
               <Links />
            </div>
        </div>
    </div>    
    )
}

export default Topnav