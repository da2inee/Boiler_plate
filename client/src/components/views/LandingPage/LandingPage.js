import React, {useEffect} from 'react'
import axios from 'axios';
//npm install axios --save설치
function LandingPage() {
    useEffect(()=>{
        axios.get('/api/hello')
        .then(response => console.log(response.data))
    },[])
    return (
        <div>
            hi my name is dain
        </div>
    )
}

export default LandingPage