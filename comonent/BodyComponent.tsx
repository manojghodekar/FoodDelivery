import React from 'react'
import { Search } from "./SearchCOmponent "
import { Cart } from './CartComponet'
import { RestaurantCartContainer } from './RestaurantCartContainer'

export const BodyComponent= ()=> {
    return (<div className="body">
       <Search></Search>
       <RestaurantCartContainer></RestaurantCartContainer>
    </div>
    )
}