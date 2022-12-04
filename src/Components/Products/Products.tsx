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
        // console.log('user products hit')
        if (props.auth.userId) {
            getUserProducts()
            // console.log(props.auth.userId)
        }
    }, [props.auth]);

    useEffect(() => {
        getUserCart()
    }, []);

    function getProducts(): void {
        // console.log('get products hit')
        axios.get('/api/products')
            .then(res => {
                // console.log(res.data)
                props.updateProducts(res.data)
            })
            .catch(err => console.log(err))
    };

    function getUserProducts(): void {
        // console.log('axios hit')
        axios.get('/api/userproducts')
            .then(res => {
                // console.log(res.data)
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


    // console.log(props.products.productList)

    let mappedProducts = props.products.productList.map((product: Product) => {
        // console.log(product)
        return <div key={product.product_id as Key}>
            <ProductBox {...product}></ProductBox>
        </div >
    });

    return (
        <main className="products">
            <Hero />
            <h1>Polymath Texture Packages</h1>
            <Filter />
            <section className='productFlex'>
                {mappedProducts}
            </section>
        </main>
    );
};

const mapStateToProps = (reduxState: any) => reduxState;

export default connect(mapStateToProps, { updateProducts, updateUserProducts, updateCart })(Products);