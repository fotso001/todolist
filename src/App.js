import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './composants/Header';
import Liste from './composants/Liste';


function App() {

  
  const [monState, setMonState] = useState([])
  const [tache, setTache] = useState();
  const [stat, setStat] = useState(0);
  const tm = new Date().getTime()

  
  let newstate = [...monState, {
    taches: tache,
     id: tm,
     statut: 0
    }]
  const addj =  (e) => {
    e.preventDefault();
    localStorage.setItem('taches', JSON.stringify(newstate))
    setTache('');
    setStat(e)
  };

  useEffect(()=> {
    const taches = JSON.parse(localStorage.getItem('taches'))
    
    console.log(taches);
    setMonState(taches)
  },[stat]);

  const todos = monState.filter((item) => item.statut === 0)
  const done = monState.filter((item) => item.statut === 1)
  const bone = monState.filter((item) => item.statut === 2)
  
  

  
  
  function deleteListe(id){
    console.log(id);
    const nettoClean = [...monState]
   let supp = nettoClean.filter(item => item.id !== id);
   setMonState(supp);
    localStorage.setItem('taches', JSON.stringify(supp));
  }
  // function deleleliste(id){
  //   console.log(id);
    
  // }
  
  
  function changes(id){
    const LesTaches = monState.filter((todo) => {
      if (todo.id === id) {
        switch (todo.statut) {
          case 0:
            todo.statut = 1
            break;

          case 1:
            todo.statut = 2
            break;
        
          default:
            break;
        }
        
      }
      return {...todo}
    })    
    localStorage.setItem('taches', JSON.stringify(LesTaches))
    setStat(tm)
  }

  // function changes2(id){
  //   const LesTaches = monState.filter((todo) => {
  //     if (todo.id === id) {
  //       todo.statut = 2
  //     }
  //     return {...todo}
  //   })    
  //   localStorage.setItem('taches', JSON.stringify(LesTaches))
  //   setStat(tm)
  // }

  function changes3(id){
    
    const LesTaches = monState.filter((todo) => {
      if (todo.id === id) {
        todo.statut = 0
      }
      return {...todo}
    });
    localStorage.setItem('taches', JSON.stringify(LesTaches))
    setStat(tm)
  }

    
  
  

  return(
    <div>
  
      <Header />

      <div className="container px-3">
        <h2 className='text-center '> Mes taches</h2>

        <form onSubmit={addj}>
          <div className="flex space-x-2 bloc p-5">
            <label htmlFor="taches" className='text-2xl'>Entrer une tache</label>
            <input
            value={tache}
            type='text'
             className='px-4 input text-black'
              id='taches'
              name= 'taches' 
              placeholder='tache a faire'
               onChange={e => setTache(e.target.value)} />
            <button className='rounded-full bg-green-500 p-2'>Ajouter</button>
          </div> 
        </form>

        <div className="grid grid-cols-3 gap-3 py-9">

          <div >
            <h2 className='text-2xl text-center'>Initialisation de la tache</h2>
            {
              todos.map((todo, index) => (
              <Liste
              key = {index}
              index = {index}
              id = {todo.id}
              taches = {todo}
              suppListe = {deleteListe}
              changeStatus = {changes}
              />
              ))
            }
          </div>
          <div id='next1' >
            <h2 className='text-2xl text-center'>Tache en cours d'exécution</h2>
          {
              done.map((todo, index) => (
              <Liste
              key = {index}
              index = {index}
              id = {todo.id}
              taches={todo}
              suppListe = {deleteListe}
              changeStatus2 = {changes}
              changeStatus3 = {changes3}
            
              />
              ))
            }
          </div>
          <div id='next2'>
          <h2 className='text-2xl text-center'>Tache terminée</h2>
          {
              bone.map((todo, index) => (
              <Liste
              key = {index}
              index = {index}
              id = {todo.id}
              taches = {todo}
              suppListe = {deleteListe}
             
              />
              ))
            }
          </div>
          


        </div>
        
        


      </div>
    </div>
  )
}

export default App;
