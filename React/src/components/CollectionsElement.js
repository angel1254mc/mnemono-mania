import React from 'react'
import '../css/CollectionsComponent.css'
function CollectionsElement({empty = false, name, data}) {
  
    let newCollection = () => {
        /** Rahhhh i love arrow functions */
        
    };
    let editCollection = () => {

    };

    if (empty)
    return (
        <div onClick={newCollection}>
            <div className="collection-block empty">
                Create A New Collection!
            </div>
        </div>
    );
  
  
    return (
    <div className="collection-block filled" onClick={editCollection}>{name}</div>
  )
}

export default CollectionsElement