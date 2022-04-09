import axios from 'axios';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../../redux/cartReducer';
import { Product } from '../../redux/productsReducer';
import { updateUserProducts } from '../../redux/userProductsReducer';
import Button from '../Button/Button';

type ProductDisplayProps = {
    product: Product;
}

type TypeFromRedux = ReturnType<typeof mapStateToProps>

type Type = ProductDisplayProps & TypeFromRedux

function ProductDisplay(props: Type) {
    // const [product, setProduct] = useState()
    const [doesOwn, setDoesOwn] = useState(false)

    const { location: { state: { product } } } = props
    console.log(props)
    console.log(product)

    // console.log(props.match.params.id)

    // useEffect(() => {
    //     getProduct()
    // }, []);

    useEffect(() => {
        ownershipCheck()
    }, [product]);

    // function getProduct() {
    //     axios.get(`/api/products/${props.match.params.id}`)
    //         .then(res => {
    //             console.log(res.data)
    //             setProduct(res.data[0])
    //         })
    //         .catch(err => console.log(err))
    // };

    function addToCart() {
        axios.post(`/api/cart/${props.product_id}`)
            .then(res => {
                // console.log(res.data)
                props.updateCart(res.data)
            })
    };

    function ownershipCheck() {
        // console.log(product)

        let check = props.userProducts.userProductList.filter(function (elem: Product) {
            if (elem.product_id === props.product_id) {
                return elem
            }
            else return null
        })
        // console.log(check)
        if (check[0]) {
            setDoesOwn(true)
        }
    };
    // console.log(doesOwn)





    function duplicateCheck() {
        let passed = true
        for (let i = 0; i < props.cart.items.length; i++) {
            if (props.cart.items[i].product_id === props.product_id) {
                passed = false
            }
        }
        if (passed) {
            addToCart()
        } else {
            alert("this item is already in your cart")
        }
    };


    return (
        <div className="productDisplay">
            <div className='boxDisplay'>
                <img src={product.image_one} alt={product.name} />
            </div>
            <article className='infoDisplay'>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>Works with Octane, Redshift, Arnold, Standard, and Cycles.</p>
                <p>{product.price}.00</p>
                {!product.auth.firstName ? '' : doesOwn ? <p className='doesOwnButton'>You have already purchased this prackage</p> : <Button
                    className='addBtn'
                    onClick={duplicateCheck}
                >add</Button>}

            </article>
            <div className='images'>
                <img src={product.image_two} alt={product.name} />
            </div>
        </div >
    );
};

const mapStateToProps = (reduxState: any) => reduxState;

export default connect(mapStateToProps, { updateCart, updateUserProducts })(ProductDisplay);