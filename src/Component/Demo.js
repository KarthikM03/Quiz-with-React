import React, { useState } from 'react'



function Demo() {
    let [a,setAb] = useState(1)
    const Change = (e)=>{
        setAb(e.target.value)
    }

    const sel = <>
    <select id='hello' defaultValue={a} onChange={(e)=>{ Change(e)}}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
    </>
    return [sel,a]
}

export default Demo