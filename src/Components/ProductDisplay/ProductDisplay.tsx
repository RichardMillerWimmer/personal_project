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
    const [doesOwn, setDoesOwn] = useState(false)

    const { location: { state: { product } } } = props

    console.log(props)

    useEffect(() => {
        ownershipCheck()
    }, [product]);


    function addToCart(): void {
        axios.post(`/api/cart/${product.product_id}`)
            .then(res => {
                props.updateCart(res.data)
            })
            .catch(err => console.log(err))
    };

    function ownershipCheck(): void {
        let check = props.userProducts.userProductList.filter(function (elem: Product) {
            if (elem.product_id === product.product_id) {
                return elem
            }
            else return null
        })
        if (check[0]) {
            setDoesOwn(true)
        }
    };

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
        <main>
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
        </main>
    );
};

const mapStateToProps = (reduxState: any) => reduxState;

export default connect(mapStateToProps, { updateCart, updateUserProducts })(ProductDisplay);