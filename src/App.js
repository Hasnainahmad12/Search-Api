import React, { useState } from 'react'
import {FilterRec} from "./Projects/Config/FilteredRecord";

const App = () => {
  const [Search, setSearch] = useState("");

  //includes is a built in method in reactjs that show the element present in the search feild or not
  // const user = ["name", "khan", "an", "am", "i"];
  // console.log(user.includes("am"));

  // const hasnain = "hasnain";
  // hasnain.includes("h")

  return (
    <div>
      {FilterRec.filter(fil =>{
        if(Search ===""){
          return fil
        }
        else if (fil.subtitle.toLocaleLowerCase().includes(Search.toLocaleLowerCase())){
          return fil.subtitle
        }
      }).map((it) =>{
        return <div>
          <p>{it.subtitle}</p>
        </div>
      })}

      <input type="text" placeholder="Search" value={Search} onChange={e=>setSearch(e.target.value)}/>
    </div>
  )
}

export default App