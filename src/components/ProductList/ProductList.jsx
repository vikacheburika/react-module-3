import {useState, useEffect} from "react"
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./ProductList.css"

const ProductList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios 
          .get("https://dummyjson.com/products?limit=100").then(response => {
            setProducts(response.data.products)
          })
    }, [])
    if(!products){
        return <p>Loading.....</p>
    }

    return(
        <>
    <div className="container">

            {products.map((product)=>(
                <Card style={{ width: '18rem' }} key={product.id}>
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
            ))}
    </div>   
        </>
    )
}

export default ProductList