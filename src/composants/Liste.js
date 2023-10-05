import React from 'react'
import { BiCheck} from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import {BiArrowBack } from "react-icons/bi";
// import { IconContext } from 'react-icons';


export default function Liste({taches, suppListe, index, changeStatus, changeStatus2, changeStatus3, id  }) {
    console.log(taches);
    return (
        <div className={
            taches.statut === 1 ? 'flex justify-between  bg-yellow-600 my-4 p-5' : 'flex justify-between  bg-lime-600 my-4 p-5'

             }
             >
            
            
                
                    <div className="">
                        <h3 className=' px-2 '>{taches.taches}</h3>
                    </div>
                    
                    <div className="">
                        {taches.statut === 1 ? (<button onClick={() => changeStatus3(id)}><BiArrowBack size={32} /> </button>
                        ) : null }

                        {taches.statut === 0 ? (<button onClick={() => changeStatus(id)} className=''><BiCheck size={32} color='blue'/></button>) : null }

                        {taches.statut === 1 ? (<button onClick={() => changeStatus2(id)} className=''><BiCheck size={32} color='blue'/></button>) : null }

                       <button onClick={() => suppListe(id)} ><AiOutlineDelete size={32} color='red'/></button>
                        
                       
                        
                    </div>
                    
                

                
          
            
        </div>
    )
}  

