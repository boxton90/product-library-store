import React, { Component } from 'react'

class Product extends Component {

    render() {
        return (
            <div>
                <h1 className="title"><strong>Product title</strong></h1>
                <div className="bg-img-container random-bg-img"></div>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta placerat felis, id auctor sapien consectetur et. Donec blandit erat non nibh ornare, ac lacinia magna dignissim. Donec vehicula tempor leo.</p>
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