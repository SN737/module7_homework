const device = {
    electric: true,
    heating: true,
    isOn: function (time) {
        let consumption = this.power*time;
        console.log (`Потреблено ${consumption} Вт, за  ${time} секунд`);
        
    },
    isOff:function(time) {
        let consumption = this.power*time*0;
        console.log (`Потреблено ${consumption} Вт, за  ${time} секунд.`);
        console.log (`устройство ${this.name} выключено и не потребляет энергию.`);
    }
   
};


let lamp = {
    name: "Лампа",
    lighting: true,
    power: 20,
    __proto__: device
};


let teapot = {
    name: "Электрочайник",
    lighting: false,
    power: 1900,
    warmingWater: function (waterQty) {
        let time = this.power/waterQty*0.001;  //условно, расчёт времени на нагрев исходя из мощности и количества 
        this.isOn(time);

    },
    __proto__: device
};



lamp.isOn(10);
teapot.isOff(100);
console.log(`Включаем ${teapot.name}`);
setTimeout(console.log, 3000, `${teapot.name} греется`);




teapot.warmingWater(1.2);














/*function Device(name) {
this.name = name;
this.isOn = false;
this.type = electric;

}*/
