import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import "./Detail.css"



function Detail(props) {
  const navigate=useNavigate()
  const {id}=useParams()
  let {countrydetail}=props
    countrydetail=countrydetail.filter((element)=>element.cca3===id  || element.ccn3===id)

  return (
    <div>
      <button onClick={()=>navigate("/")} className={`buttonback  ${props.Theme.dark?"darkbuttonback":""}`}>
        <span className="material-symbols-outlined">
keyboard_backspace
</span>back</button>
       {countrydetail.map((element,index)=>{return(
       <div className={`detailCard ${props.Theme.dark?"darkCard":""}`} key={index}>
       <img src={element.flags.png} alt={element.name.official} style={{boxShadow: "0px 5px 8px 2px rgba(0, 0, 0, 0.3)",width:"500px"}} />
             <div className="InfoContainer">
                  <h4 cursor='pointer' className="title">{element.name.official}</h4>
                <div className='article1'>
                  <p>
                    <b>Native Name:</b>{element.name.nativeName?
                    element.name.nativeName[Object.keys(element.name.nativeName)[0]].common:""}<br/>
                    <b>population: </b>{element.population}<br/>
                  <b>region: </b>{element.region}<br/>
                  <b> Sub Region: </b>{element.subregion}<br/>
                  <b>capital: </b>{element.capital}<br/></p>
            </div>

            <div className='article2' >
                <p> <b>Top Level Domain: </b>{element.tld[0]}<br/>
                  <b>Currencies: </b>{element.currencies?Object.keys(element.currencies).join(","):null}<br/>
                  {element.languages?<><b>Languages: </b>
                  {Object.keys(element.languages).map((el)=>(<>{element.languages[el]} </>))}</>:null}
                  </p>
            </div>
            <div className={`borderbox ${props.Theme.dark?"darkCardbtn":""}`}>
                    <p>
                      {element.borders?<><b>Border Countries:</b>
                      {element.borders.map((bor,index)=>(<button  onClick={()=>navigate(`/detail/${bor}`)} key={index}>{bor}</button>))}</>:null} </p>
                  </div>
                  
    </div>

       </div>
    )})} 
    </div>
  )
}

export default Detail