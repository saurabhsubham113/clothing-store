import React, { Component } from 'react'
import SHOP_DATA from './Shop.data.js'
import CollectionPreview from '../Collection-Preview/CollectionPreview.component'


class ShopPage extends Component{
    constructor(props){
        super(props)

        this.state = {
            collection : SHOP_DATA
        }
    }

    render(){
        const {collection} = this.state
        return(
            <div className='shop-page'>
                {collection.map(({id,...otherCollectioProps}) => (
                    <CollectionPreview key={id} {...otherCollectioProps} />
                ))}
            </div>
        )
    }
}

export default ShopPage