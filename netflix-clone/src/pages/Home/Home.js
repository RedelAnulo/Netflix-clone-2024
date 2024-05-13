import React from 'react'
import Header from '../../Componts/Header/Header'
import Footer from '../../Componts/Footer/Footer'
import Banner from '../../Componts/Banner/Banner'
import RowList from '../../Componts/Rows/RowList/RowList'

function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <RowList/>
      <Footer/>
    </>
  )
}

export default Home