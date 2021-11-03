import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ title, urlToImage }) => {
    return (
        <div className="col-4 card-container">
            <div className="thumbnail">
                <img className="img-responsive img-rounded" src={ urlToImage } alt={title} style={{ maxWidth: '400px'  }} />
                <div className="caption">
                    <h6>{ title }</h6>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired
}

export default Card