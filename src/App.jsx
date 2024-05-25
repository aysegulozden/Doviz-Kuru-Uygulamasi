import { useState } from 'react'
import './App.css'
import Cureency from './companents/Cureency'


function App() {


  return (
    //dive bu özellikleri vermemiz yaptığımız uygulamanın sayfanın tam ortasında yer almasını sağladı
    <div style={{ display: 'flex', flexDirection: "column", justifyItems: "center", alignItems: 'center' }}>
      <Cureency />
    </div>
  )
}

export default App
