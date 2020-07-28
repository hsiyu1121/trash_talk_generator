function randomTask(arr){
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

function generateTalk(options) {
 
  const task = {
    engineer: ['加個按鈕','加新功能','切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']
  }

  const phrase = ['很簡單','很容易','很快','很正常']

  const randomPhrase = randomTask(phrase) 
  let jobName = ''
  let talkTo = []
  let trashTalk = ''

  if(options === undefined){
    return '請選擇一個職業！！'
  }else if(options === 'engineer'){
    talkTo = randomTask(task.engineer) 
    jobName = '工程師'
  }else if(options === 'designer'){
    talkTo = randomTask(task.designer) 
    jobName = '設計師'
  }else if(options === 'entrepreneur'){
    talkTo = randomTask(task.entrepreneur) 
    jobName = '創業家'
  }

  trashTalk = `身為一個${jobName}, ${talkTo}, ${randomPhrase}`
  return trashTalk
}

module.exports = generateTalk

