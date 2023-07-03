import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Spin } from 'antd'
import { counterStore } from '../../store/Counter'
import { observer } from 'mobx-react-lite'
import Home from './pages/Home/index'
import Head from 'src/module/pc/components/Head'
import Footer from 'src/module/pc/components/Footer'
import Style from 'src/module/pc/pages/Style'
import './styles/reset.less'
import './index.less'

function PC() {
  const spindiv = (
    <div> 
      <div>Loading...</div>
    </div>
  )
  return (
    <BrowserRouter>
      <Spin
        indicator={spindiv}
        spinning={counterStore.loading}
        wrapperClassName="loading-box">
        <div className="layout-pc">

          <div className="layout-content">
          <Head></Head>
            <div className="layout-box">

              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/style" element={<Style />}></Route>
              </Routes>
              <Footer></Footer>
            </div>
          </div>
        </div>
      </Spin>
    </BrowserRouter>
  )
}

export default observer(PC)
