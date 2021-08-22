'use strict';

class First {
      hello (){
          console.log("Привет я метод родителя!");
        }   
}
class Second extends First {
    hello(){        
        console.log("А я наследуемый метод!");
    }
    start() {
        super.hello(); // вызываем родительский метод 
        this.hello(); // и затем наследуюммый метод
      }
}

const first1 = new First();
const second1 =  new Second();





second1.start();

