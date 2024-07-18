import { useNavigate } from "react-router-dom";


const Page404 = () => {

    const navigate = useNavigate()

    const backToHome = () => {
        navigate('/')
    } 

    return (
        <div className="page-404">
            <h1>Oops..!</h1>
            <p>page not found</p>
            <button onClick={backToHome} >Back to Home</button>
        </div>
    );
}
 
export default Page404;