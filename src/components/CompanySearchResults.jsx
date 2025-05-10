import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // Importa useDispatch
import { fetchAction } from "../redux/actions/index";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();
  const data = useSelector((state) => state.search.searchResults);
  const dispatch = useDispatch(); // Usa useDispatch

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    // Chiama fetchAction quando il componente si monta
    dispatch(fetchAction(baseEndpoint, params));
  }, [dispatch, baseEndpoint, params]);

  useEffect(() => {
    setJobs(data);
  }, [data]);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
