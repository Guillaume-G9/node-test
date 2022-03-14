class Player {
    constructor(name, age, argent, sante) {
        this.name = name;
        this.age = age; 
        this.argent = argent; 
        this.sante = sante; 
      }

      removeMoney(less){
          this.argent -= less
      }

      addMoney(more){
        this.argent += more
      }
}


module.exports = Player;