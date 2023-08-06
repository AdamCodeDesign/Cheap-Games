import React from 'react'

export default function GameInfo() {
  return (
    <section className='gameDetails_container'>
      <section className='gameContent'>
        <div className='screenshots'></div>
        <div className='description'></div>
      </section>
      <section className='gameDetails'>
        <h1>title</h1>
        <p>genres</p>
        <p>price</p>
        <button>Buy</button>
        <button>add to cart</button>

      </section>
    </section>
  )
}
