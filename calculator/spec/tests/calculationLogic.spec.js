const app = require("../../src/helpers/calculationLogic");
describe('Logic Tests',function(){
    describe('Testing add',function(){
        it('Returns a function',function(){
            expect(typeof app.add(2)).toEqual("function");
        });
        it('supports no input',function(){
            expect(app.add()(2)).toEqual(2);
        });
        it('adds numbers',function(){
            expect(app.add(2)(4)).toEqual(2+4);
        });
        it('supports negative numbers',function(){
            expect(app.add(-2)(4)).toEqual(-2 + 4);
        });
        it('supports negative numbers',function(){
            expect(app.add(-23)(-41)).toEqual(-23+(-41));
        });
        it('supports large negative numbers',function(){
            expect(app.add(-23214)(-4231)).toEqual(-23214+(-4231));
        });
    });
    describe('Testing subtract',function(){
        it('Returns a function',function(){
            expect(typeof app.subtract(2)).toEqual("function");
        });
        it('supports no input',function(){
            expect(app.subtract()(2)).toEqual(-2);
        });
        it('subtract numbers',function(){
            expect(app.subtract(2)(4)).toEqual(2-4);
        });
        it('supports negative numbers',function(){
            expect(app.subtract(-2)(-4)).toEqual(-2-(-4));
        });
        it('supports negative numbers',function(){
            expect(app.subtract(-23)(-41)).toEqual(-23-(-41));
        });
        it('supports large negative numbers',function(){
            expect(app.subtract(-23214)(-4231)).toEqual(-23214-(-4231));
        });
    });
    describe('Testing multiply',function(){
        it('Returns a function',function(){
            expect(typeof app.multiply(2)).toEqual("function");
        });
        it('supports no input',function(){
            expect(app.multiply()(2)).toEqual(0);
        });
        it('subtract numbers',function(){
            expect(app.multiply(2)(4)).toEqual(2*4);
        });
        it('supports negative numbers',function(){
            expect(app.multiply(-2)(-4)).toEqual(-2*(-4));
        });
        it('supports negative numbers',function(){
            expect(app.multiply(-23)(-41)).toEqual(-23*(-41));
        });
        it('supports large negative numbers',function(){
            expect(app.multiply(-23214)(-4231)).toEqual(-23214*(-4231));
        });
    });
    describe('Testing subtract',function(){
        it('Returns a function',function(){
            expect(typeof app.divide(2)).toEqual("function");
        });
        it('Cannot divide by 0',function(){
            expect(app.divide(2)(0)).toEqual("Ooga booga that's a scary one!");
        });
        it('subtract numbers',function(){
            expect(app.divide(2)(4)).toEqual(2/4);
        });
        it('supports negative numbers',function(){
            expect(app.divide(-2)(-4)).toEqual(-2/(-4));
        });
        it('supports negative numbers',function(){
            expect(app.divide(-23)(-41)).toEqual(-23/(-41));
        });
        it('supports large negative numbers',function(){
            expect(app.divide(-23214)(-4231)).toEqual(-23214/(-4231));
        });
    });
});
