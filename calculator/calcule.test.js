const add = require('./add');
const div = require('./div');
const mult = require('./mult');
const sub = require('./sub');

describe("Calculator function", () => {
    test("it should calculate two number", () => {
      
     expect(add(1,2)).toBe(3);

    });


    test("it should subtract two number", () => {
      
      expect(sub(5,4)).toBe(1);
 
     });

     test("it should multiply two number", () => {

      expect(mult(2,2)).toBe(4);

     });

     test("it should divide two number", () => {

      expect(div(6,2)).toBe(3);

     });

  // TODO : test mult and sub function 



  });