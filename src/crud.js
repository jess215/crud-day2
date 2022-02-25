// TEST DATA

let mexican = [{id:1, name:'carnitas', price:21},{id:2, name:'asada',price:22}]

let american = [{id:1, name:'burgers', price:21},{id:2, name:'pizza rolls',price:22}]



//MAP

// foods:[{id:number,name:string, price:number},...]

/// returns array of formatted strings[] (you choose what these look like)

//const foodToString = mexican.map((food) => {
    //return `${food.name} is ${food.price} and the id is ${food.id}`
//})

//const about = (foods) => {
    //return foods.map(foodToString)
//}

//console.log('about: return', about(mexican))

// [...]

// foods:[{id:number,name:string, price:number},...]

// food: {id:number,name:string, price:number}

/// returns new array with food add

const addFood1=(foods, food)=>{
    return [...foods, food]

}
console.log('addFood1: return', addFood1(mexican, {id:3, price:20, name:'tacos'}))



// [...]

// foods:[{id:number,name:string, price:number},...]

// id:number,

// name:string, 

// price:number}

/// returns new array with food add

const addFood2 = (foods, id,name,price)=>{
    return [...foods, {id:id, name:name, price:price}]

}

console.log('addFood2: return', addFood2(mexican, 3, 'tacos', 20))


//MAP

// foods:[{id:number,name:string, price:number},...]

// id:number,

// price:number}

/// returns new array with the price updated with the id given

const updateFoodPrice =(food, id, price) => {
    if(food.id === id){
        return{...food, price:price}
    }
    return food
}
console.log(updateFoodPrice({id:1, name:'fish', price:10}, 1, 100))
console.log(updateFoodPrice({id:0, name:'pizza', price:10}, 99, 100))

const updateFood1=(foods, id, price)=>{
    console.log('foods:', foods)
    console.log('id:', id)
    console.log('price:', price)
    if(foods.id === id){
        return {...foods, price:price}
    }
    return foods.map(updateFoodPrice)

}

console.log('updateFood1: return', updateFood1(mexican, 1, 200))

//MAP

// foods:[{id:number,name:string, price:number},...]

// id:number,

// food:{id:number,name:string, price:number}}

/// returns new array with the food item updated with the id given

const updateFood2=(foods, id, food)=>{



}



// FILTER

// foods:[{id:number,name:string, price:number},...]

// id:number,

// removes the food with the given the id

const deleteFood1 = (foods,id)=>{




}



// FILTER

// foods:[{id:number,name:string, price:number},...]

// price:number,

// removes the food with price over price given

const deleteFood2 = (foods,price)=>{



}