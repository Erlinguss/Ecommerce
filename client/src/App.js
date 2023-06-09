import React, {Component} from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"

import "bootstrap/dist/css/bootstrap.css"
import "./css/App.css"

import Register from "./components/Register"
import ResetDatabase from "./components/ResetDatabase"
import Login from "./components/Login"
import Logout from "./components/Logout"

import AddProduct from "./components/AddProduct"
import EditProduct from "./components/EditProduct"
import DeleteProduct from "./components/DeleteProduct"
import DisplayAllProducts from "./components/DisplayAllProducts"
import LoggedInRoute from "./components/LoggedInRoute"
// import Filters from "./components/Filters"

import LoadProducts from "./components/Admin/LoadProducts";

import ViewCart from "./components/Cart/View"
import PayPalMessage from "./components/Cart/PayPalMessage"
import ListOrders from "./components/Orders/List"
import ViewOrder from "./components/Orders/View"



import {ACCESS_LEVEL_GUEST} from "./config/global_constants"


if (typeof localStorage.accessLevel === "undefined")
{
    localStorage.name = "GUEST"
    localStorage.accessLevel = ACCESS_LEVEL_GUEST
    localStorage.token = null
}



export default class App extends Component
{
    render()
    {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/Register" component={Register} />
                    <Route exact path="/ResetDatabase" component={ResetDatabase} />
                    <Route exact path="/Login" component={Login} />

                    <Route path="/cart" component={ViewCart} />
                    <LoggedInRoute exact path="/orders/:id" component={ViewOrder} />
                    <LoggedInRoute exact path="/orders" component={ListOrders} />
                    <Route exact path="/PayPalMessage/:messageType/:payPalPaymentID" component={PayPalMessage}/>

                    <LoggedInRoute exact path="/Logout" component={Logout} />
                    <LoggedInRoute exact path="/AddProduct" component={AddProduct} />
                    <LoggedInRoute exact path="/EditProduct/:id" component={EditProduct} />
                    <LoggedInRoute exact path="/DeleteProduct/:id" component={DeleteProduct} />

                    <LoggedInRoute exact path="/Products/Load" component={LoadProducts} />
                    <LoggedInRoute exact path="/Products" component={DisplayAllProducts} />
                    <LoggedInRoute exact path="/Products/Add" component={AddProduct} />
                
                    <Route exact path="/" component={DisplayAllProducts} />
                    <Route path="*" component={DisplayAllProducts}/>

                </Switch>
            </BrowserRouter>
        )
    }
}