import React from 'react'
import Card from './Card'
import   "./Cards.css"

function Cards({countries,Theme}) {
    
  return (
  
    <div className={`cardsContainer ${Theme.dark?Theme.dark:null}`}>
        {countries?.map((countrie,index)=>{
                      return <Card
                      id={countrie.cca3 ? countrie.cca3 : countrie.ccn3}
                        key={index}
                      name={countrie.name.official}
                      region={countrie.region}
                      population={countrie.population}
                      capital={countrie.capital}
                      flag={countrie.flags.png}
                      Theme={Theme}
                      />
                   })}
    </div>
  
  )
}

export default Cards