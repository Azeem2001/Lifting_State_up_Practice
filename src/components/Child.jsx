import React, {useState} from 'react'


const Child = ({fun}) => {
const [name, setName] = useState('')
    return (
    <div>
     <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
     <button onClick={()=> fun(name)}>submit</button>
    </div>
  )
}

export default Child