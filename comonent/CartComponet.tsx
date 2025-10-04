import React from 'react'
const backgroundColor = {
    backgroundColor: 'grey'
}
export const Cart = ({data}) => {
    const { resName, image, dish, rating, time} = data
    return (
        <div className="cart" style={backgroundColor}>
            <h3>{resName}</h3>
            <img src ={image}></img>
            <h3>{dish.join(" ,")}</h3>
            <h4>{rating}</h4>
            <h4> {time}</h4>
        </div>
    )
}