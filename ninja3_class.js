class Ninja{
    constructor(name){
    this.name=name;
    this.health=100;
    this.speed=3;
    this.strength=3;
    }
    sayName(){
        console.log("my ninja name is "+this.name);
        return this;
    }
    showStats(){
        console.log("Name:"+this.name+" ,Health:"+this.health+" ,Speed:"+this.speed+" ,Strength:"+this.strength);
        return this;
    }
    drinkSake(){
        this.health=this.health+10;
        return this;
    }
}
const n=new Ninja('Rawan');
n.sayName().showStats().drinkSake().showStats();

class Sensei extends Ninja{
    constructor(name){
        super(name);
        super.health=200;
        super.speed=10;
        super.strength=10;
        this.wisdom=10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
        return this;
    }

}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();

superSensei.showStats();