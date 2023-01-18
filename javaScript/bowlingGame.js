
const IsOfTenFrame = (rolls)=>
{
    // let frameDetails = {
    //     strike:0,
    //     frame:[0,0],
    //     score:0
    // }
    let frameDetails = []
    rolls.forEach(roll=> {
        frameScore+=rolls
        rollAttempt+=1
        if(rollAttempt===2 || frameScore===10)
        {
          
          frame++
          if(rollAttempt===2 && frameScore===10)
          {
            frameDetails.push(2)
          }
          else if(rollAttempt===1 && frameScore===10)
          {
            frameDetails.push(1)
          }
          if(rollAttempt===2 && frameScor2<10)
          {
            frameDetails.push(3)
          }
          frameScore=0
          rollAttempt=0
        }
        
     })
     return frameDetails
}


const score = (rolls) =>
{
   //10 frame or not
   let framesType = IsOfTenFrame(rolls)
//    let frameType = []
   let frameScore = []
   let scores = []
//    let rollAttempt = 0
   if(frames.length<10)
   {
    throw new Error('Game should be of ten frames,please continue game to see score');
   }
   let it=0;
   for( it = 0;it<rolls.length;it++)
   {
      if(rolls[it]===10)
      {
        frameScore[i]=[10]
      }
      else{
            frameScore[i] = [rolls[it],rolls[it+1]]
            it+=1
      }
   }

   for(it=0;it<frameScore.length;it++)
   {
    if(framesType[it] === 1)
          {
            let nextThrow = frameScore[it+1]===10?10+frameScore[it+1][0] : frameScore[it][0]+frameScore[it][1]+frameScore[it+1][0]
            scores[it] = 10 + nextThrow
          }
          else if(framesType[it]===2)
          {
            
            let frameScore2 = frameScore[it].length===1?frameScore[it+1][0]:frameScore[it+1][0]+frameScore[it+1][1]
            scores[it] = frameScore[it] + frameScore[it][0]
          }
          else if(framesType[it]===3)
          {
            scores[it] = frameScore[it][0];
          }
   }
   scores.forEach(points=>
    {
        score += points
    })   
    return score
   
}

module.exports = {trackScore};

// if(frames[it] === 1)
//       {
//         frameScore[it]+=
//       }
//       else if(frames[it]===2)
//       {

//       }
//       else if(frames[it]===3)
//       {
//         frameScore[]
//       }