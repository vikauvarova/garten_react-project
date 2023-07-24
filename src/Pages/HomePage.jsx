import React from 'react'
import Baner from '../Components/Banner/Baner'
import CatalogMainPage from '../Components/Category/CatalogMainPage'
import DiscontBaner from '../Components/DiscontBanner/DiscontBaner'
import SaleBlock from '../Components/Sales/SaleBlock'

function HomePage() {
  return (
    <div>
        <Baner/>
        <CatalogMainPage />
        <DiscontBaner />
        <SaleBlock />
    </div>
  )
}

export default HomePage