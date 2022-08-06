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
        consumption = consumption.toFixed(2);
        qtyOn++;
        const  stateOn = `Устройством ${this.type} ${this.name} потреблено ${consumption} Вт, за  ${time} секунд`;
        return stateOn;
    }
    isOff () {
        //let consumption = this.power*0;
        let stateoff = `Устройство ${this.type} ${this.name} выключено и не потребляет энергию.`;
        return stateoff;
    }
    static showQtyDevices (){
        console.log('количество устройств ' + qty);
        return 'Суммарное количество включений ' + qtyOn;   //бессмысленный метод, но что бы попробовать static
    }    
}

class Entertainment extends Device {
    constructor(){
    this.hasScreen = true;
    }
}

class Kitchenappliances extends Device {
    constructor (deviceName, deviceType, power, capacity) {
        super(deviceName, deviceType, power);
        this.capacity = capacity;        
    }

    warmingWater(waterQty) {
        let time = this.power/waterQty*25;  //условно, расчёт времени на нагрев исходя из мощности и количества 
        let consumption  = this.isOn(time); 
        const result = `${consumption} нагрето ${waterQty} мл жидкости.`;
        return result;
    }
}

const tableLamp = new Device('Ikea', 'lamp', 50);
const teapot = new Kitchenappliances('Philips', 'teapot', 1500, 2700);
const coffMachine = new Kitchenappliances('Miele', 'coffeemachine', 2000, 800);

console.log(teapot.warmingWater(500));
console.log(coffMachine.isOff());
console.log(tableLamp.isOn(120));
console.log(Device.showQtyDevices());
