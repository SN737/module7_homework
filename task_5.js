
class Device {

    constructor (deviceName, power) {
        this.name = deviceName;
        this.power = power;
        this.electric = 'true';
        this.heating = 'true';
    }
    
    isOn (time) {
        let consumption = this.power*(time/3600);
        console.log (`Потреблено ${consumption} Вт, за  ${time} секунд`);
    }
    isOff (time) {
        let consumption = this.power*time*0;
        console.log (`Потреблено ${consumption} Вт, за  ${time} секунд.`);
        console.log (`устройство ${this.name} выключено и не потребляет энергию.`);
    }
}


// const Device.kitchen {

// }

let ndevice = new Device('lamp', 50);

console.log(ndevice);
ndevice.isOn(100)

