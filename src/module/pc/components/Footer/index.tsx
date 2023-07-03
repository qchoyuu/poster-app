import React from 'react'
import { observer } from 'mobx-react-lite'
import './index.less'
import foot from 'src/assets/img/footer/Footer-img.png'


let Footer = () => {
   return (
      <div className='pc-footer'>
         <div>
            <img src={foot} alt="foot" />
         </div>
         <div className='box'></div>
         <div className='end'>
            <div className='left'>
               <div>ACCESSIBILTY HELP </div>
               <div>MASTHEAD</div>
               <div>ETHERAL STORIES</div>
               <div>CONDE NAST SPOTLIGHT</div>
            </div>
            <div className='right'>CN Fashion& Beauty</div>
         </div>
      </div>
   )
}

export default observer(Footer)
