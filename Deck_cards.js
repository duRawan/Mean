class Card {
    constructor(suit, value, num) {
        this.suit = suit;
        if (value == 1) {
            this.value = "Ace";
        }
        else if (value == 11) {
            this.value = "Joker";
        }
        else if (value == 12) {
            this.value = "Queen";
        }
        else if (value == 13) {
            this.value = "King";
        }
        else {
            this.value = String(value);
        }
        if (num > 0 && num <= 13) {
            this.num = num;
        }
    }
    show() {
        console.log(`Card information is ${this.suit} ${this.value} ${this.num}`);
        return this;
    }
}
class deck extends Card {
    constructor() {
        super()
        this.reset();
        this.shuffle(this.deck);
        //console.log(this.deck[0])//for testing the shuffel
        //console.log(this.deal())
    }
    reset(){
        this.deck = []
        for (let i = 1; i <= 52; i++) {
            for (let j = 1; j <= 13; j++) {
                if (i <= 13) {
                    this.deck.push(new Card("Diamonds", j, j));
                }
                else if (i > 13 && i <= 26) {
                    this.deck.push(new Card("Spades", j, j));
                }
                else if (i > 26 && i < 39) {
                    this.deck.push(new Card("Clubs", j, j));
                }
                else if (i > 39 && i <= 52) {
                    this.deck.push(new Card("Heart", j, j));
                }
            }

        }
    }
    shuffle() {
        var m = this.deck.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
        }
        return this.deck;
    }
    deal(){
        var m = this.deck.length,i;
        i = Math.floor(Math.random() * m--);
        return this.deck.pop(i);
    }
}

class player extends deck{
    constructor(name){
        super()
        this.name=name;
        this.deck=new deck;
        this.hand=[]
        for (let i = 0; i <7; i++) {
            this.hand.push(this.deck.deal())
            //console.log("Hand",this.hand[i])
        }
        this.discard()
        
    }
    discard(){
        return this.hand.pop();
    }
}
// const c = new Card("Heart", 1, 13)
// c.show()
// const d = new deck();
// d.show();
//const p=new player('rawan')