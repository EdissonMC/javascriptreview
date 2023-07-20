let products = []


class Product {

    constructor(name, description, id) {
        this.name = name
        this.description = description
        this.id = id
    }

    save() {
        products.push(this)
    }

    update(name, description) {
        this.name = name
        this.description = description
    }
    static updateById(name, description, id) {
        const index = products.findIndex(product => product.id == id)

        if (index > -1) {
            products.forEach(product => {
                if (product.id === id) {
                    product.name = name
                    product.description = description
                }
            })
        } else {
            throw new Error("product no FOUND ")
        }
    }

    static deleteById(id) {

        const index = products.findIndex(product => {
            return product.id === id
        })

        console.log(index)
        if (index > -1) {
            console.log("product deleted " + index)
            products.splice(index, 1)
        } else {
            throw new Error("no product Founded")
        }

    }

}


const product1 = new Product("TV", "tv samsumg 42'' ", 1)
product1.save()

const product2 = new Product("Laptop", "laptop macbook pro ", 2)
product2.save()

const product3 = new Product("Mouse", "mouse white microsoft ", 3)
product3.save()

console.log("PRODUCTS....")
console.log(products)



// UPDATING PRODUCT
// console.log("UPDATING product 1")
// Product.updateById("TV updated", "Tv samsumg UPDATED...", 1)
// console.log(products)

// DELETING PRODUCT
console.log('DELETING product 1')
Product.deleteById(1)
console.log(products)
