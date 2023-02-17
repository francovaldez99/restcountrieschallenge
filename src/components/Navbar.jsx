import React from 'react'
import "./Navbar.css"
import { useLocation } from "react-router-dom";



function Navbar(props) {
  const location = useLocation();

  const handleMode=()=>{
    if(props.Theme.dark){
      props.setTheme({
        dark:""
      })
    }else props.setTheme({
      dark:"dark"
    })
  }
  return (
    <div>
        <div className={`TitleContainer ${props.Theme.dark?"darkTitleContainer":null}`}>
          <h1>Where is the world? </h1> 
        <span onClick={handleMode}>{props.Theme.dark?
        <div className='ModeContainers'>
        <span class="material-symbols-outlined">light_mode</span><b>Light Mode</b>
      </div>:
        <div className='ModeContainers'>
          <span class="material-symbols-outlined">
          dark_mode
          </span><b>Dark Mode</b>

        </div>}</span>
        </div>
{location.pathname === "/" && <>
<div className={`ContainerInputSelectandSearch ${props.Theme.dark?"ContainerInputSelectandSearchdark":null}`}>
<div className="divInput">
  <label htmlFor="search">
    <span class="material-symbols-outlined">
    search
    </span>
  </label>
          <input
               type="text"
               id='search'
              onChange={props.inputHandler()}
               placeholder={`Search for a country ...`}/>
</div>

      <select name="" id="" onChange={props.clickfiltro()} >
          <option  value='clear'>Filter by Region</option>
               {props.regiones.map((region,index)=>(
          <option  value={region} key={index}>{region}</option>))}
          </select>
                </div>
</>}
      

    
    </div>
  )
}

export default Navbar

