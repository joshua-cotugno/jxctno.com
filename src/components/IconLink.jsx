import React from 'react';
import PropTypes from 'prop-types';

const IconLink = ({ url, faClass }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <i className={`fa ${faClass}`} />
        </a>
    );
};

IconLink.propTypes = {
    url: PropTypes.string.isRequired,
    faClass: PropTypes.string.isRequired,
};

export default IconLink;