import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import services from "../../../test"

const ServiceDetail = () => {
    const {id} = useParams();
    const dollerIcon = <FontAwesomeIcon icon={faDollarSign} />
    // finding the selected service
    const singleItem = services.find(item => item.id === parseInt(id));
    const {serviceName, price, thumb, tests } = singleItem;
    const testName = [];
    // setting test id
    let i=0;
    for(const key in tests){
        testName.push(`Test ${i+1}: `+ tests[key]);
        i++;
    }
    return (
        <div>
            <Container>
                <h3 className="text-center bg-danger text-white p-2 rounded-pill">Package Name: {serviceName}</h3>
                <div className="w-25 mx-auto">
                    <img className="img-fluid rounded-circle" src={thumb} alt="" />
                </div>
            </Container>
            <Container className="text-center">
                <div>
                    <h4>Investigations:</h4>
                    <Row xs={1} lg={2}>
                    {
                        testName.map(name=><Col><p key={name}><small key={name}>{name}</small></p></Col>)
                    }
                    </Row>
                </div>
                <h3 className="pb-4"><span className="bg-success text-white p-2 rounded-pill"><sup>{dollerIcon}</sup> {(price/85.39).toFixed(2)}</span></h3>
            </Container>
        </div>
    );
};

export default ServiceDetail;