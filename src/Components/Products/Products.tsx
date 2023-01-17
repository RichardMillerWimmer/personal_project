import { Key, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateCart } from '../../redux/cartReducer';
import { Product, updateProducts } from '../../redux/productsReducer';
import { updateUserProducts } from '../../redux/userProductsReducer';


import Filter from '../Filter/Filter';
import ProductBox from '../ProductBox/ProductBox';
import Hero from '../Hero/Hero';

type ProductProps = {
    products: Product[]
}

type TypeFromRedux = ReturnType<typeof mapStateToProps>

type Type = ProductProps & TypeFromRedux

function Products(props: Type) {

    useEffect(() => {
        getProducts()
    }, []);

    useEffect(() => {
        if (props.auth.userId) {
            getUserProducts()
        }
    }, [props.auth]);

    useEffect(() => {
        getUserCart()
    }, []);

    function getProducts(): void {
        axios.get('/api/products')
            .then(res => {
                props.updateProducts(res.data)
            })
            .catch(err => console.log(err))
    };

    function getUserProducts(): void {
        axios.get('/api/userproducts')
            .then(res => {
                props.updateUserProducts(res.data)
            })
            .catch(err => console.log(err))
    };

    function getUserCart(): void {
        axios.get('/api/cart')
            .then(res => {
                props.updateCart(res.data)
            })
    };

    let mappedProducts = props.products.productList.map((product: Product) => {
        return <div key={product.product_id as Key}>
            <ProductBox {...product}></ProductBox>
        </div >
    });

    return (
        <main className="products">
            <Hero />
            <h1>Texture Packages</h1>
            <Filter />
            <section className='productFlex'>
                {mappedProducts}
            </section>
        </main>
    );
};

const mapStateToProps = (reduxState: any) => reduxState;

export default connect(mapStateToProps, { updateProducts, updateUserProducts, updateCart })(Products);