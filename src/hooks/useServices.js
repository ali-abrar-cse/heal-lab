import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap";

const useServices = () =>{
    const [services, setServices] = useState([]);
    // const [isLoading, setLoading] = useState(false);
    useEffect(() =>{
        fetch("./package.json")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    if(!services){
        return <Spinner animation="border" variant="danger" />
    }
    return {
        services,
        setServices
    }
}
export default useServices;