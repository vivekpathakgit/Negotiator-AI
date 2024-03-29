const user = {
    id: "1234",
    name: "",
    email: "dummy@wow.com",
    image: "",
    products: [
        {
            name: "product1",
            cost: 100 - 200,
            description: "This is a product",
            image: "data:image/png;base64,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",
            time: "14:42",
            conditions: "should be handled with care"
        }
    ],
    chats: [
        {
            talkingTo: "seller1",
            messages: [
                {
                    sender: "seller1",
                    message: "Hello, I am selling a product"
                },
                {
                    sender: "buyer1",
                    message: "I am interested in your product"
                }
            ]
        }
    ],
}
export default user;