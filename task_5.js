
class device {
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