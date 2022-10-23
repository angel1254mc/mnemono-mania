import React from 'react'
import '../css/CollectionsComponent.css'
import CollectionsElement from './CollectionsElement.js'
import Heading1 from './Heading1.js'
import { useEffect } from 'react'
function CollectionsComponent() {
    useEffect(() => {
    
    
      return () => {
        
      }
    }, [])
    
  
  
    return (
    <div className="collections-outer">
        <div className='collections-inner'>
            <Heading1 title="Collections" subheading="Create, Review, and Customize your own Mnemonomania Decks!"></Heading1>
            <div className="collections-section">
                <div className="collections-list">
                    <CollectionsElement empty={true}></CollectionsElement>
                    <CollectionsElement name="My math Mnemonics"/>
                </div>
                <div className="table-container">
                <table className="collections-table">
                    <tr>
                      <th>Type</th>
                      <th>Mnemonic</th>
                      <th>Meaning</th>
                      <th>Edit</th>
                    </tr>
                    <tr>
                        <td>Acronym</td> 
                        <td>STEM</td> 
                        <td>Science, Technology, Engineering, Mathematics</td> 
                        <td><div className="edit-button">EDIT</div></td> 
                    </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CollectionsComponent