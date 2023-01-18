
const {score , bestScore}= require('./bowlingGameTracker');


describe('Bowling game score tracker',()=>{
    
    it('Should return total score when input is an array of numbers',()=>
    {
        const gameScore = score([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
        expect(gameScore).toEqual(16)
    });
    it('Should return TypeError when game is incomplete',()=>
    {
        expect(()=>score([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toThrow(new Error('Game should be of ten frames,please continue game to see score'));
    });
    it('Should return TypeError when input is not an array of numbers',()=>
    {
        expect(()=>score('abc')).toThrow(new Error('Input should be of number Array'));
    });
})