import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ title, urlToImage }) => {    
    return (
        <div className="col-3 thumbnail">
            <img className="img-responsive img-rounded" src={ urlToImage } alt={title} />
            <div className="caption">
                <h3>{ title }</h3>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired
}

export default Card