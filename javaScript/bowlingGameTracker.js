const createFrame = (rolls)=>
{
    let frameScore = 0,rollAttempt=0,frame=[],frames = []
    rolls.forEach( (roll) =>{
        frameScore+=roll
        rollAttempt+=1
        frame.push(roll)
        if(frames.length!==10 && (rollAttempt===2 || frameScore===10))
        {
          frames.push(frame)
          frameScore=0
          rollAttempt=0
          frame=[]
        }
     })
     if(frameScore!==0)frames.push(frame)
     return frames
}

const score = (rolls)=>
{
    if(!Array.isArray(rolls))
    {
        throw new TypeError('Input should be of number Array')
    }
    const frames = createFrame(rolls)
    let frameScores = []
    let score =0
    if(frames.length<10)
    {
        throw new Error('Game should be of ten frames,please continue game to see score');
    }
    for(let it =0 ;it<10;it++)
    {
      if(it===9)
      {
        let fill=0
        if(frames[it].length===1)
        {
            fill = frames[it+1].reduce((acc,curr)=>
            {
               acc+=curr
               return acc
            },0)
        }
         frameScores[it] = frames[it].reduce((acc,curr)=>
         {
            acc+=curr
            return acc
         },0) +fill
      }
      else if(frames[it].length===1)
      {
        let nextThrow = frames[it+1].length===1?frames[it+1][0]+frames[it+2][0]:frames[it+1][0]+frames[it+1][1]
        frameScores[it] = frames[it] + nextThrow
      }
      else if(frames[it][1]+frames[it][0] ===10)
      {
        frameScores[it] = frames[it][1]+frames[it][0] + frames[it+1][0]
      }
      else{
        frameScores[it] = frames[it][1]+frames[it][0];
      }
    }
    frameScores.forEach(points=>
        {
            score += points
        })   
    return score
}

const bestScore=(games)=>
{
    let best=0
    games.forEach(game=>
        {
            gameScore = score(game)
            console.log(gameScore)
            best = Math.max(gameScore,best)
        })

    return best
}
console.log(score([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]))
// console.log(score([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))

games = [[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10],[ 6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
console.log(bestScore(games))


module.exports = {score , bestScore}
