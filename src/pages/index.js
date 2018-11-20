import React, { Component } from 'react'

import Layout from '../components/layout'
import Product from '../components/product'

class IndexPage extends Component {

  constructor(props){
    super(props)
    this.productData1 = {'title': 'Super artist tropper','desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet aliquam velit eu commodo. Suspendisse blandit velit quis dui viverra aliquam. Praesent vehicula metus sed ultrices vehicula. Mauris posuere massa ante, molestie pharetra felis iaculis id. Aliquam sed magna efficitur, maximus leo et, dictum leo.','img': 'https://source.unsplash.com/ZqqlOZyGG7g'}
    this.recommendationsData1 = {
      'recommendations' : [
        {'title': 'Bunch of plastic dinorours', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula lacinia pellentesque. Maecenas sodales nisl ac convallis accumsan. Integer hendrerit et sem ac tincidunt.','img': 'https://source.unsplash.com/bBgqqWZAVT4/128x128'},
        {'title': 'RockerPug', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare, lorem condimentum faucibus pharetra, dui nunc bibendum lacus, quis finibus nisi mi vel leo. Suspendisse potenti. Aliquam erat volutpat.','img': 'https://source.unsplash.com/K4mSJ7kc0As/128x128'},
        {'title': 'Creepy baby doll', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed dignissim urna, non bibendum diam. Curabitur tincidunt mi leo, in aliquet felis sollicitudin rhoncus.','img': 'https://source.unsplash.com/RZX-_BJmNa8/128x128'},
        {'title': 'Green denture toy', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae velit eros. Nam finibus in nulla vitae cursus. Vivamus tincidunt sem in libero consectetur placerat. Donec viverra ut augue ut congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.','img': 'https://source.unsplash.com/4FXR3Y0jsZ4/128x128'},
        {'title': 'Splash water gun', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare, lorem condimentum faucibus pharetra, dui nunc bibendum lacus, quis finibus nisi mi vel leo. Suspendisse potenti. Aliquam erat volutpat.','img': 'https://source.unsplash.com/h5GUPGGMjWQ/128x128'},
        {'title': 'Sliced lemon on white ceramic plate', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula lacinia pellentesque. Maecenas sodales nisl ac convallis accumsan. Integer hendrerit et sem ac tincidunt.','img': 'https://source.unsplash.com/w35up2PkaFs/128x128'}
      ]
    }
    this.productData2 = {'title': 'Bunch of plastic dinorours', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet aliquam velit eu commodo. Suspendisse blandit velit quis dui viverra aliquam. Praesent vehicula metus sed ultrices vehicula. Mauris posuere massa ante, molestie pharetra felis iaculis id. Aliquam sed magna efficitur, maximus leo et, dictum leo.','img': 'https://source.unsplash.com/bBgqqWZAVT4'}
    this.recommendationsData2 = {
      'recommendations' : [
        {'title': 'Splash water gun', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare, lorem condimentum faucibus pharetra, dui nunc bibendum lacus, quis finibus nisi mi vel leo. Suspendisse potenti. Aliquam erat volutpat.','img': 'https://source.unsplash.com/h5GUPGGMjWQ/128x128'},
        {'title': 'Super artist tropper', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula lacinia pellentesque. Maecenas sodales nisl ac convallis accumsan. Integer hendrerit et sem ac tincidunt.','img': 'https://source.unsplash.com/ZqqlOZyGG7g/128x128'},
        {'title': 'RockerPug', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare, lorem condimentum faucibus pharetra, dui nunc bibendum lacus, quis finibus nisi mi vel leo. Suspendisse potenti. Aliquam erat volutpat.','img': 'https://source.unsplash.com/K4mSJ7kc0As/128x128'},
        {'title': 'Green denture toy', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae velit eros. Nam finibus in nulla vitae cursus. Vivamus tincidunt sem in libero consectetur placerat. Donec viverra ut augue ut congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.','img': 'https://source.unsplash.com/4FXR3Y0jsZ4/128x128'},
        {'title': 'Creepy baby doll', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed dignissim urna, non bibendum diam. Curabitur tincidunt mi leo, in aliquet felis sollicitudin rhoncus.','img': 'https://source.unsplash.com/RZX-_BJmNa8/128x128'},
        {'title': 'Sliced lemon on white ceramic plate', 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula lacinia pellentesque. Maecenas sodales nisl ac convallis accumsan. Integer hendrerit et sem ac tincidunt.','img': 'https://source.unsplash.com/w35up2PkaFs/128x128'}
      ]
    }
  }

  render(){
    return (
      <Layout>
        <div className="columns">
          <div className="column">
            <Product productData={this.productData1} recommendationsData={this.recommendationsData1}></Product>
          </div>
          <div className="column">
            <Product productData={this.productData2} recommendationsData={this.recommendationsData2}></Product>
          </div>
        </div>
      </Layout>
    )
  }

}

export default IndexPage
