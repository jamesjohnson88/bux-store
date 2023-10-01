interface ProductProps {
    id: number;
    name: string;
    author: string;
    description: string;
    price: number;
    imageUrl: string;
}

function Product({ ...product } : ProductProps) {
    return (
        <div className="product">
            <p>{product.name}</p>
            <p>by {product.author}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <img src={product.imageUrl} alt={product.name} />
        </div>
    );
}

export default Product;