const Player = require('./Player');


describe("Player", () => {

    test("name should be Sandrine and age to be 25", () => {
      
    const sandrine = new Player('Sandrine',25,5000,100)
  
    expect(sandrine.name).toBe('Sandrine')
    expect(sandrine.age).toBe(25)

    });



  // TODO : add two methods, addMoney and removeMoney


  test("money should be equal to 1000", () => {
      
    const sandrine = new Player('Sandrine',25,5000,100)
    sandrine.removeMoney(4000)
    expect(sandrine.argent).toBe(1000)

    });


  });