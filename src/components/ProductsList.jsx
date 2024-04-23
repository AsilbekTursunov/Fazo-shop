import React from "react"
import Product from "./Product"
const ProductsList = ({ info, count, data, rangePrice }) => { 
  console.log(data);
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="flex flex-wrap  justify-start ">
          {rangePrice ? (
            <>
              {data?.map((product, index) => {
                if (product.price * 12500 > rangePrice[0] && product.price * 12500 < rangePrice[1]) {
                  return <Product product={product} info={info} key={index} />
                }
              })}
            </>
          ) : (
            <>
              {data?.map((product, index) => (
                <Product product={product} info={info} key={index} />
              ))}
            </>
          )}
        </div>
      </section>
    </>
  )
}

export default ProductsList
