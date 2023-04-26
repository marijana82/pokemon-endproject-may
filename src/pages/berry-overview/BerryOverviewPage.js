import "./BerryOverviewPage.css";
import { useParams } from "react-router-dom";


function BerryOverviewPage() {
    const {id} = useParams();

    return(
        <>
            <h2>This is Berry Overview Page</h2>
            <p>You are searching for: { id }</p>
        </>
    );
}

export default BerryOverviewPage;