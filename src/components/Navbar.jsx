
import { FaListAlt } from 'react-icons/fa';
import {} from '@react-icons/all-files'
const Navbar = ({show}) => {
return(
    <div className={show ? 'sidebar active' : 'sidebar'}>
        <ul>
            <li><a href="/">Домашня сторінка</a></li>
            <li><a href="/"><FaListAlt/>Список груп </a></li>
            <li><a href="/">List</a></li>
            <li><a href="/">List</a></li>
        </ul>
    </div>
)

}

export default Navbar