
import {  Link } from 'react-router-dom';
import "./Home.scss"

function Home() {

return(
    <div className='home__wrapper'>
      <nav className='home__nav'>  
            <Link className="home__link link " to="/users">Список пользователей</Link>
      </nav>
      <p className="home__text">Приложение загружает данные о пользователях в формате json из сервера express и выводит карточки с пользователями.
      Есть группы, к которым относятся те или иные пользователи, есть пользователи не относящиеся к группе. Список можно отсортировать, есть возможность поиска. 
      </p>
    </div>
  
)
} 
export default Home