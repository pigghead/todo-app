import './home.scss';
import { List } from '../../components/List/List';


export const Home = () => {

    return (
        <div className="home">
            <h2>To Do</h2>
            <div className="container">
                <List />
            </div>
        </div>
    )
}