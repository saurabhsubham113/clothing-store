import React from 'react'
import { withRouter } from 'react-router-dom'
import './Menu-item.style.scss'

const MenuItem = ({title, imageUrl, size , linkUrl}) => {
    return (
        <div className={`${size} menu-item`} >
            <div className='background-image' style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className='content'>
                <div className='title'>{title.toUpperCase()}</div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}
export default withRouter(MenuItem)

//   onClick={() => history.push(`${match.url}${linkUrl}`)}