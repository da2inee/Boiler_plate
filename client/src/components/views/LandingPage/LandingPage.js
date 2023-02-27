import React, {useEffect} from 'react'
import axios from 'axios';
//npm install axios --save설치
function LandingPage() {
    useEffect(()=>{
        axios.get('/api/hello')
        .then(response => console.log(response.data))
    },[])

    const onClickHandler = (props) => {
        axios.get('/api/users/logout')
        .then(response => {
            if(response.data.success) {
                props.history.push("/login")
            }else{
                alert('로그아웃하는데 실패하였습니다.')
            }
        })
    }
    return (
        <div style = {{
            display: 'flex',justifyContent: 'center', alignItems: 'center'
        }}>
            <button onClick={onClickHandler}>
                로그아웃
            </button>
        </div>
    )
}

export default LandingPage