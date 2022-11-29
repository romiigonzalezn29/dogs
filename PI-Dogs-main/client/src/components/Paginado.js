import React from "react"; 
import style from './Paginado.module.css'

export default function Paginado({dogPerPg,dogs,paginado,setCurrentPage,currentPage}){

    const nextPg=(e)=>{
        e.preventDefault()
        if(currentPage<pageN.length)
        setCurrentPage(currentPage + 1)
        console.log(currentPage)
      }
      const prevPg=(e)=>{
        e.preventDefault()
        if(currentPage>1)
        setCurrentPage(currentPage - 1)
        console.log(currentPage)
      }
      const pageN=[]
      for (let i=0; i<Math.ceil(dogs/dogPerPg);i++){
        pageN.push(i+1)
      }
      return (
        <>    
        <nav>
        <ul className={style.paginado}>
          <button className={style.button} onClick={e=>prevPg(e)}>Anterior</button> 
            {pageN.length>1 &&
              pageN.map(n=>(
                
                    <button className={style.button} key={n}  onClick={()=>paginado(n)}><strong>{n}</strong></button>
                
              ))
            }
          <button className={style.button} onClick={e=>nextPg(e)}>Siguiente</button>
        </ul>
        </nav> 
        
        </>
      )
    }
