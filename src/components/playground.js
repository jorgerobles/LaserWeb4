/**
 * About module.
 * @module
 */

// React
import React from 'react'

import * as d3 from "d3";
import * as textures from 'textures';
import ReactDOM from 'react-dom';

/**
 * About component.
 *
 * @extends module:react~React~Component
 * @param {Object} props Component properties.
 */

class SVGTest extends React.Component
{
    render() {

        return (<svg/>)
    }
    
    componentDidMount()
    {
        let hexes=textures.paths().d("hexagons").size(8).strokeWidth(2).stroke("darkorange");
        
        let svg = d3.select(ReactDOM.findDOMNode(this))
            
            svg.call(hexes)
            svg.append("circle").attr("r",200).style("fill",hexes.url())
    
         
    
        let xml  = new XMLSerializer().serializeToString(ReactDOM.findDOMNode(this)),
            data = "data:image/svg+xml;base64," + btoa(xml),
            img  = new Image()
            img.setAttribute('src', data)
            
            ReactDOM.findDOMNode(this).parentNode.appendChild(img)
        
    }
  
}

class Playground extends React.Component {
    /**
     * Render the component.
     * @return {String}
     */
    
   
    
    render() {
        
         
    
    
    
        
        
        return (
            <div>
                <SVGTest/>
            </div>
        )
    }
}

// Exports
export default Playground
