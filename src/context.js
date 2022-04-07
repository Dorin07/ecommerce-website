import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';
// import Product from './components/Product';

const ProductContext = React.createContext();
// 2 components, Provider and Consumer
// Provider 
// Consumer 

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct 
    };
    componentDidMount(){
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return {
                products: tempProducts
            }
        });
    };
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };
    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {
                detailProduct: product
            }
        })
    };
    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
    };
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    };
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };