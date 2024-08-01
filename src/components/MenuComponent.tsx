import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li> <Link to={''}>home</Link> </li>
                <li> <Link to={'/users'}>users</Link> </li>
                <li> <Link to={'/posts'}>posts</Link> </li>
                <li> <Link to={'/comments'}>comments</Link> </li>
                <li> <Link to={'/todos'}>todos</Link> </li>
            </ul>
        </div>
    );
};

export default MenuComponent;