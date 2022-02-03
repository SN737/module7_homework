let device = {
    electric: true,
    heating: true,
    isOn (time) {
       let consumption = device.power*time;
    }
};


let lamp = {
    lighting: true,
    power: 20,
    __proto__: device
};

lamp.isOn(10);
console.log (lamp.isOn(10));














/*function Device(name) {
this.name = name;
this.isOn = false;
this.type = electric;

}*/
