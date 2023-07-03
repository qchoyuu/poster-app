import React from 'react'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import './index.less'
import btn from 'src/assets/img/head/head-btn.png'


let Heard = () => {
   const navigate = useNavigate()
   return (
      <div className='pc-head'>
         <ul>
            <li onClick={() => navigate('/style')}>STYLE</li>
            <li>FASHION   VIEW</li>
            <li>TREND</li>
            <li>OTHER</li>
         </ul>

         <button onClick={() => navigate('/')}>ETHERAL <img src={btn} alt="btn" /></button>
      </div>
   )
}

export default observer(Heard)
