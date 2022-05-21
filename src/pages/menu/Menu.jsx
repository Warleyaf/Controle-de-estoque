import './menu.css';
import { Cadastro } from '../cadastro/Cadastro';
import { List } from '../List/List';

export function Menu() {
  return (
    <div className='container'>
      <div className='menu'>
        <p>
          Hortas do <span>Bem</span>
        </p>
        <div className='list-menu'>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Cadastrar Produtos</a></li>
            <li><a href="#">Lista Produtos</a></li>
          </ul>
        </div>

      </div>

      <div className='main'>
        <div className='welcome'>
          <h1>Bem vindo</h1>
        </div>

        <div className='product'>

        </div>

        <div className='list'>
          <List />
        </div>
      </div>


    </div>
  )
}