let test = require("./test");
describe("test",function(){
    it('supports no input',function(){
        expect(test.add(1,1)).toEqual(2);
    });
}); 