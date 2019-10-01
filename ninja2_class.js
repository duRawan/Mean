function Ninja(name){
    this.name=name;
    this.health=100;
    var speed=3;
    var strength=3;
    this.sayName=function(){
        console.log("my ninja name is "+this.name);
        return this;
    }
    this.showStats=function(){
        console.log("Name:"+this.name+" ,Health:"+this.health+" ,Speed:"+speed+" ,Strength:"+strength);
        return this;
    }
    this.drinkSake=function(){
        health=health+10;
        return this;
    }
    this.punch=function(ninja){
        if (ninja instanceof Ninja){
        ninja.health-=5;
        console.log(ninja.name+" was punched by "+ this.name+" and lost 5 Health!")}
        return this;
    }
    this.kick=function(ninja){
        if (ninja instanceof Ninja){
        ninja.health=ninja.health-(strength*15);
        console.log(ninja.name+" was kicked by "+ this.name+" and lost 15 Health!")}
        return this;
    }
}
var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);
redNinja.showStats()
blueNinja.showStats()