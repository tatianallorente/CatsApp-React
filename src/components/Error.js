import React from 'react';

const Error = ({msg}) => {
    return ( 
         
        <div className="msg-error">
            <div className="msg-error__icon">
                <svg class="msg-error__icon__svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path></svg>
            </div>
            <h3>{msg}</h3>
        </div>
     );
}
 
export default Error;
