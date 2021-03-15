import React, { useEffect, useState } from 'react';
import './Plans.css';
import db from '../firebase';
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js'; 

function Plans() {
    const [products, setProducts] = useState([]);
    const user = useSelector(selectUser);

    useEffect( () => {
        db.collection('products')
        .where('active', '==', true )
        .get().then(querySnapshot => {
            const products = {};

            querySnapshot.forEach( async productDoc => {
                products[productDoc.id] = productDoc.data();
                const priceSnap = 
                await productDoc.ref.collection('prices').get();

                priceSnap.docs.forEach( price => {
                    products[productDoc.id].prices = {
                            priceId: price.id,
                            priceData: price.data()
                    }
                })
            });
            setProducts(products);
        });
    }, [])

    const loadCheckout = async (priceId) => {
        //console.log('ID: ',priceId);
        const docRef = await db
            .collection('customers')
            .doc(user.uid)
            .collection('checkout_sessions')
            .add({
                price: priceId,
                success_url: window.location.origin,
                cancel_url: window.location.origin
            });

            docRef.onSnapshot( async (snap) => {
                const { error, sessionId} = snap.data();

                if (error) {
                    alert(`An error occured: ${error.message}`);
                }

                if (sessionId) {

                    // Init Stripe
                    const stripe = await loadStripe()
                }
            })

    }

    console.log('Products: ',products);

    return (
        <div className="plans">
            {Object.entries(products).map(
                ([productId, productData]) => {
                    // TODO add some logic to check if the users 
                    // subscription is active
                    return (
                        <div key={productId} className="plans__plan">
                            <div className="plans__info">
                                <h5>{productData.name}</h5>
                                <h6>{productData.description}</h6>
                            </div>
                            <button 
                                onClick={ () => loadCheckout(
                                    productData.prices.priceId
                                )}>
                                Subscribe
                            </button>
                        </div>

                    )
                }
            )}
        </div>
    )
}

export default Plans
