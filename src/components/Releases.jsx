import React from 'react';
import IconLink from './IconLink';

const Release = ({ track, links }) => {
    return (
        <div>
            <h2>{track}</h2>
            {links.map((link, index) => (
                <IconLink key={index} {...link} />
            ))}
        </div>
    );
};

export default Release;