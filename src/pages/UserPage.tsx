import {useLocation, useParams} from "react-router-dom";
import UserComponent from "../components/UserComponent";

const UserPage = () => {
    let {id} = useParams();
    let location = useLocation()
    console.log(location.state)
    return (
        <div>
            <UserComponent user={location.state}/>
        </div>
    );
};

export default UserPage;