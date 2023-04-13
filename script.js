const getTotalPrice = (user) => {
    let totalPrice = 0
    for (let i = 0; i < user.orders.length; i++){
        totalPrice += user.orders[i].price * user.orders[i].count
    }
    return totalPrice
}
const getPiceForAllUsers = (usersArr) => { 
    for (let i = 0; i < usersArr.length; i++){
        console.log(`Total price in user ${usersArr[i].name}: ${getTotalPrice(usersArr[i])} грн.`)
    }
}

let usersArr = [
    { 
    name: "Alex",
    age: 30,
    confirmEmail: false,
    description: null,
    orders: [
            {
                name: "TV",
                count: 2,
                price: 4000 
            },
            {
                name: "PC",
                count: 1,
                price: 6000
            },
            {
                name: "Phone",
                count: 3,
                price: 8000
            },
            {
                name: "Delivery", 
                count: 1,
                price: 300
            }
        ]
    }, 
    {
        name: "John",
        age: 27,
        confirmEmail: true,
        description: null,
        orders: [
            {
                name: "Phone",
                count: 4,
                price: 4000
            },
            {
                name: "Delivery",
                count: 1,
                price: 300
            }
        ]
    },
    {
        name: "Bob",
        age: 17,
        confirmEmail: true,
        description: null,
        orders: [
            {
                name: "Laptop",
                count: 1,
                price: 16000
            },
            {
                name: "Delivery",
                count: 1,
                price: 800
            }
        ]
    }
]


findMostExpensiveOrder(usersArr)