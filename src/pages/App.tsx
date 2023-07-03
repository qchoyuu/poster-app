import React, { useState,useLayoutEffect } from 'react'
import { observer } from 'mobx-react-lite'
import Mobile from '../module/mobile/index'
import PC from '../module/pc/index'
import './App.less'
import '../styles/base.less'

function App() {


  const [width, setWidth] = useState(0)
  useLayoutEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  function handleResize() {
    let width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    setWidth(width)
  }
  return <>{width <= 768 ? <Mobile /> : <PC /> }</>
}

export default observer(App)
