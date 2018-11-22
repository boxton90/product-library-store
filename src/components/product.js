import React, { Component } from 'react'
import ProductWidget from 'awesome-product-library'

class Product extends Component {

    constructor(props) {
        super(props)
        this.productWidget = React.createRef()
    }

    /* Method to trigger toggle (open/close) widget modal */
    onClick = () => {
        this.productWidget.current.toggleModal()
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
                        <a className="button is-primary is-outlined is-medium" onClick={this.onClick}>Recommendations</a>
                    </div>
                </div>
                <ProductWidget productData={this.props.productData} recommendationsData={this.props.recommendationsData} ref={this.productWidget} />
            </div>
        )
    }
}

export default Product