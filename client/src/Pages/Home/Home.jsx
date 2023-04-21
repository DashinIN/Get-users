
import {  Link } from 'react-router-dom';
function Home() {

return(
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/users">Пользователи</Link>
          </li>
        </ul>
      </nav>
    </div>
  
)
} 
export default Home