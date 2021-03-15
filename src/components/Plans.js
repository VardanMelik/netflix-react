import React, { useEffect, useState } from 'react';
import './Plans';
import db from '../firebase';

function Plans() {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        db.collection('products')
        .where('active', '==', true )
        .get().then(querySnapshot => {
            const produts = {};

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

    console.log('Products: ',products);

    return (
        <div className="plans">
            {Object.entries(products).map(
                ([productId, productData]) => {
                    // TODO add some logic to check if the users 
                    // subscription is active
                    return (
                        <div className="plans__plan">
                            <div className="plans__info">
                                <h5>{productData.name}</h5>
                                <h6>{productData.description}</h6>
                            </div>
                            <button>
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
