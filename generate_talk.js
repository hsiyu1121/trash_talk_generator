function generateTalk(option) {
  const task = {
  engineer: ['加個按鈕','加新功能','切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']
}

const phrase = ['很簡單','很容易','很快','很正常']

  let talkTo = ''

  if (!option.job ){
    talkTo = '請選擇一個職業！！'
  }else if(option.job === 'engineer'){
    talkTo += '身為一個工程師，' + task.engineer[randomWord()] + '， ' + phrase[randomWord()]
  }else if(option.job === 'designer'){
    talkTo += '身為一個設計師，' + task.designer[randomWord()] + '， ' + phrase[randomWord()]
  }else if(option.job === 'entrepreneur'){
    talkTo += '身為一個創業家，' + task.entrepreneur[randomWord()] + '， ' + phrase[randomWord()]
  }

  return talkTo
}

  function randomWord(){
    return  Math.floor(Math.random() * 4 )
  }


module.exports = generateTalk

