// Presentation 

import React from 'react';
import { Slide } from 'react-slideshow-image';

function Presentation() {

    // Get Presentation to display from url parameter
    var url = window.location.href;
    var presentationOption = url.substring(url.indexOf('?') + 1);

    const presentations = [
        {
            param: "capacitors",
            presentation: (
                <iframe src="https://onedrive.live.com/embed?resid=192EE6D532880D9C%2156873&amp;authkey=!AFuBGqNpiGYsVy8&amp;em=2&amp;wdAr=1.7777777777777777&amp;wdEaaCheck=1" width="500px" height="300px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
            )
        }
    ]

    presentation = presentations.find(presentation => presentation.param === presentationOption);

    return (
        <div>
            {presentation.presentation}
        </div>

    );

}

export default Presentation;