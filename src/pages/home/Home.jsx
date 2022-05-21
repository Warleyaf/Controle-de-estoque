import './home.css';

export function Home() {
  return (
    <div className="container">

      <main>
        <img src="https://img.icons8.com/external-phatplus-lineal-color-phatplus/128/external-agronomy-ecology-system-phatplus-lineal-color-phatplus.png" alt="" />
        <h1>Produtos</h1>

        <div className="products">
          <div className="card-products">
            <img src="https://img.icons8.com/color/96/spinach.png" alt="" />
            <span className="products-name">Alface</span>
            <div className="qtd-products">
              <button className='btn-negative'>-</button>
              <input type="number" />
              <button className="btn-positive">+</button>
            </div>
            <button className="products-buy">Comprar</button>
          </div>

          <div className="card-products">
            <img src="https://img.icons8.com/color/96/spinach.png" alt="" />
            <span className="products-name">Alface</span>
            <div className="qtd-products">
              <button className='btn-negative'>-</button>
              <input type="number" />
              <button className="btn-positive">+</button>
            </div>
            <button className="products-buy">Comprar</button>
          </div>

          <div className="card-products">
            <img src="https://img.icons8.com/color/96/spinach.png" alt="" />
            <span className="products-name">Alface</span>
            <div className="qtd-products">
              <button className='btn-negative'>-</button>
              <input type="number" />
              <button className="btn-positive">+</button>
            </div>
            <button className="products-buy">Comprar</button>
          </div>

          <div className="card-products">
            <img src="https://img.icons8.com/color/96/spinach.png" alt="" />
            <span className="products-name">Alface</span>
            <div className="qtd-products">
              <button className='btn-negative'>-</button>
              <input type="number" />
              <button className="btn-positive">+</button>
            </div>
            <button className="products-buy">Comprar</button>
          </div>

          <div className="card-products">
            <img src="https://img.icons8.com/color/96/spinach.png" alt="" />
            <span className="products-name">Alface</span>
            <div className="qtd-products">
              <button className='btn-negative'>-</button>
              <input type="number" />
              <button className="btn-positive">+</button>
            </div>
            <button className="products-buy">Comprar</button>
          </div>
        </div>
      </main>
    </div>
  )
}