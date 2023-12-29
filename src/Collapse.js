import React from 'react';
import './css/Collapsible.css';

/*
<button type="button" class="collapsible">Open Collapsible</button>
<div class="content">
  <p>Lorem ipsum...</p>
</div>
*/

function Collapse(title, content) {
    const [open, setOpen] = React.useState(false);

    return (

        <div className="collapsible">
            <button className="collapsible-button" onClick={() => setOpen(!open)}>
                {title}
            </button>
            {open && <div className="collapsible-content">{content}</div>}
        </div>
    );
}

export default Collapse;