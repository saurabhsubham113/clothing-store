import React  from 'react'
import CollectionItem from '../Collection-item/CollectionItem.component'
import './CollectionPreview.style.scss'

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {   //filtering so that only 4 items are available
                items.filter((item,index) => index < 4).map(({id,...itemProps}) => ( 
                    <CollectionItem key={id} {...itemProps} />
                ))
            }
        </div>
    </div>
    
)

export default CollectionPreview