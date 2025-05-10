import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeAction, addAction } from "../redux/actions/index.js"




function Job({ data }) {
  const favourites = useSelector((state) => state.main.favourites)
  const isFavourite = favourites.includes(data.company_name);
  const dispatch = useDispatch()

  function handleClick(data) {
    if (isFavourite) {
      dispatch(removeAction(data))
    } else {
      dispatch(addAction(data))
    }
  }



  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/jobs/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={3}>
        <Button variant={!isFavourite ? "primary" : "warning"} className='rounded rounded-5 ms-2' onClick={() =>
          handleClick(data)
        }><small>{!isFavourite ? "Aggiungi ai preferiti" : "Tra i preferiti"}</small></Button>
      </Col>

    </Row>
  )
}

export default Job
