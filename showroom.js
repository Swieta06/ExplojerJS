/*

Waktu 30 menit
Buat 1 class Car
    merk private
    price private
    color private


buat 1 class ShowRoom
    name private
    location private
    arrCar private

    method getAmountOfCar() => retrun 1 variable jumlah mobil yang ada di dalam 1 ShowRoom
    method getAllAssets() => return 1 variable total asset (harga semua mobil yang dimiliki)



function main(){
    let objShowRoom = new ShowRoom("Show Room Adhitya", "Tangerang")

    //tambah2 obj car (bebas mau berapa)


    console.log("[Nama ShowRoom] memiliki [jumlahmobil] mobil dengan total harga Rp[allassets]")
}


*/

class Car{
    #merk
    #price
    #color

    constructor(merk, color){ //hanya sekali di panggil
        this.#merk = merk
        this.#color = color
        this.#price = 0
    }

    get getPrice(){
        return this.#price
    }

    set setPrice(price){
        this.#price = price
    }
}

class ShowRoom{
    #name
    #location
    #arrCar

    constructor(name, location){
        this.#name = name
        this.#location = location
        this.#arrCar = []
    }

    get getName(){
        return this.#name
    }

    set setArrCar(objCar){
        this.#arrCar.push(objCar)
    }

    getAmountOfCar(){
        let amount = this.#arrCar.length
        return amount
    }

    getAllAssets(){

        let totalPrice = 0
        for(let car of this.#arrCar){
            totalPrice += car.getPrice
        }

        return totalPrice
    }
}

let objShowRoom = new ShowRoom("Show Room Adhitya 2", "Tangerang")

let objCar1 = new Car("Toyoti", "White")
let objCar2 = new Car("Hondi", "Red")

objCar1.setPrice = 10000000
objShowRoom.setArrCar = objCar1

objCar2.setPrice = 20000000
objShowRoom.setArrCar = objCar2

console.log(objShowRoom.getName +" memiliki " + objShowRoom.getAmountOfCar() + " mobil dengan total harga Rp" + objShowRoom.getAllAssets())

