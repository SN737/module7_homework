let qty = 0;
let qtyOn = 0;


class Device {

    constructor (deviceName, deviceType, power) {
        this.name = deviceName;
        this.type = deviceType;
        this.power = power;
        this.electric = 'true';
        this.heating = 'true';
        qty++;
    }
    
    isOn (time) {
        
        let consumption = this.power*(time/3600);
        console.log (`Потреблено ${consumption} Вт, за  ${time} секунд`);
        qtyOn++;
    }
    isOff (time) {
        let consumption = this.power*time*0;
        console.log (`Потреблено ${consumption} Вт, за  ${time} секунд.`);
        console.log (`устройство ${this.name} выключено и не потребляет энергию.`);
    }

    static showQtyDevices (){
        console.log('количество устройств ' + qty);
        return 'Суммарное количество включений ' + qtyOn;   //бессмысленный метод, но что бы попробовать static
    }

    
}

class Kitchenappliances extends Device {
    warmingWater(waterQty) {
        let time = this.power/waterQty*0.001;  //условно, расчёт времени на нагрев исходя из мощности и количества 
        this.isOn(time);
        return time;
    }
}


// const Device.kitchen {

// }

let tableLamp = new Device('Ikea', 'lamp', 50);
let teapot = new Kitchenappliances('Philips', 'teapot', 1500);
let coffMachine = new Kitchenappliances('Miele', 'coffeemachine', 2000);

// console.log(ndevice);
// ndevice.isOn(100)

console.log(teapot.warmingWater(500));

let x = teapot.isOn instanceof Device;
let y = teapot.hasOwnProperty ('warmingWater')
console.log(y);


console.log(Device.showQtyDevices());
