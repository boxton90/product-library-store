import React, { Component } from 'react'

class Product extends Component {

    constructor(props){
        super(props)
    }

    render() {
        
        const bgImgContainerStyle = {
            backgroundImage: `url('${this.props.productData.img}')`
        }
        
        return (
            <div>
                <h1 className="title"><strong>{this.props.productData.title}</strong></h1>
                <div className="bg-img-container" style={bgImgContainerStyle} alt={this.props.productData.title}></div>
                <div className="content">
                    <p>{this.props.productData.desc}</p>
                    <div className="buttons">
                        <a className="button is-primary is-medium">Buy</a>
                        <a className="button is-primary is-outlined is-medium">Recommendations</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product