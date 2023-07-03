import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Spin } from 'antd'
import { observer } from 'mobx-react-lite'
import Home from './pages/Home/index'
import './styles/reset.less'
import './index.less'
import 'lib-flexible'

function Mobile() {
  const spindiv = (
    <div>
      <div>Loading...</div>
    </div>
  )

  return (
    <BrowserRouter>
      <Spin
        indicator={spindiv}
        wrapperClassName="m-loading-box">
        <div className="layout">

          <div className="layout-content">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
            </Routes>
          </div>
        </div>
      </Spin>
    </BrowserRouter>
  )
}

export default observer(Mobile)
