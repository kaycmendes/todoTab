


import React from 'react';



function Greeting(props) {

  function dayNight(){
    let day = props.time[0];
    if(day < 12){
      day = 'Morning'
    }else if(day > 12){
      day = 'Afternoon'
    }else if(day > 18){
      day = 'Night'
    }
    return day
    
  }dayNight()


    return (
      <>
        <div className="greeting">
          <h1> Good {dayNight()} (name)</h1>
        </div>
      </>
    )


}


export default Greeting;