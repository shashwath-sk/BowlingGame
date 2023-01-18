
const trackScore = require('./bowlingGame');


describe('Bowling game score tracker',()=>{
    it('Should return TypeError when input is not an array of numbers',()=>
    {
        expect(()=>{trackScore}).toThrow(new TypeError('Game should be of ten frames,please continue game to see score'));
    });
    it('Should return total score when input is an array of numbers',()=>
    {
        const score = trackScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
        expect(score).toBe(16)
    })

})