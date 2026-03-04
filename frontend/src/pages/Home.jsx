import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderColleectionSection from '../components/Products/GenderColleectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Products/ProductDetails'

const Home = () => {
  return (
    <div>
      <Hero/>
      <GenderColleectionSection/>
      <NewArrivals/>

      {/* Best Seller */}
      <h2 className="text-3xl font-bold text-center mb-4">Best Sellers</h2>
      <ProductDetails/>
    </div>
  )
}

export default Home
