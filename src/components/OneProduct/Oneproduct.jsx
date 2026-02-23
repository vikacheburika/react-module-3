import {useState, useEffect} from "react"
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const OneProduct = () => {

    const [product, setProduct] = useState(null)

    useEffect(() => {
        axios 
          .get("https://dummyjson.com/products/1").then(response => {
            setProduct(response.data); console.log(response.data)
          })
    }, [])
    if(!product){
        return <p>Loading.....</p>
    }

    return(
        <>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.images}/>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Card.Text>
          Price:  {product.price} eur
        </Card.Text>
        <Card.Text>Rating: {product.rating}</Card.Text>
        <Card.Text className={product.stock? "text-success" : "text-danger"}>In stock:  {product.stock} vnt</Card.Text>
      </Card.Body>
    </Card>

            
        </>
    )
}

export default OneProduct