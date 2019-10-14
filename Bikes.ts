class Bike {
    price: number;
    max_speed: string;
    miles: number;
    constructor(public price_:number, public maxSpeed: string) {
        this.price = price_;
        this.max_speed = maxSpeed;
        this.miles = 0;
       // this.fullName = `${firstName} ${lastName}`;
    }
    displayInfo() {
        console.log("Bike's price: ",this.price,",maximum speed: ",this.max_speed,",Total miles: ",this.miles);
        return this;
    }
    ride() {
        console.log('Riding');
        this.miles += 10;
        return this;
    }
    reverse() {
        if (this.miles >= 5) {
            console.log('Reversing');
            this.miles -= 5;
        }
        else {
            console.log("Can't Reverse since the miles is 0");
            
        }
        return this;
    }
}
var bike1 = new Bike(200, "25mph");
var bike2 = new Bike(300, "20mph");
var bike3 = new Bike(150, "30mph");

bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().reverse().reverse().displayInfo();
bike3.reverse().reverse().reverse().displayInfo();