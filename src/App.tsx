import React, { useState } from 'react'
import Container from './layout/Container'
import Footer from './layout/Footer'
import Header from './layout/Header'
import SiderBar from './layout/SiderBar'

export default function App() {
  const [colorHeader, setColorHeader] = useState<string>("#AEA2F6");
  
  return (
    <div>
      <SiderBar />
      <Header title="Header layout" bgcolor={colorHeader} color="violet"/>
      <Container click1={() => setColorHeader("#A6F6A2")}/>
      <Footer title="Footer Layout"/>
    </div>
  )
}
