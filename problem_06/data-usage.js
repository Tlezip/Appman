const { readFileSync } = require('fs');
const logFilePath = __dirname + '/data-usage.log';

const raw = readFileSync(logFilePath, 'utf8');

const dataUsage = () => {
  // put your code here !!
  let arrayOfData = raw.split(/,|\n/)
  arrayOfData = arrayOfData.filter(word => word.localeCompare(''))
  let result = []
  arrayOfData.forEach((data, index) => {
    if(index == 0){
      result.push({ username: arrayOfData[1].substring(5,arrayOfData[1].length), total: parseInt(arrayOfData[2].substring(5,arrayOfData[2].length-1)), average: parseInt(arrayOfData[2].substring(5,arrayOfData[2].length-1)), n: 1})
    }
    if(index % 3 == 0 && index != 0){
      let findedIndex = result.findIndex((dataObj) => {
        return dataObj.username == arrayOfData[index+1].substring(5,arrayOfData[index+1].length)
      })
      if(findedIndex != -1){ //found
        result[findedIndex].total += parseInt(arrayOfData[index+2].substring(5,arrayOfData[2].length-1))
        result[findedIndex].n += 1
        result[findedIndex].average = (result[findedIndex].total / result[findedIndex].n)
      } else {
        result.push({ username: arrayOfData[index+1].substring(5,arrayOfData[index+1].length),total: parseInt(arrayOfData[index+2].substring(5,arrayOfData[index+2].length-1)), average: parseInt(arrayOfData[index+2].substring(5,arrayOfData[index+2].length-1)), n: 1})
      }
    }
  })
  result.forEach((Obj) => {
    delete Obj.n
  })
  console.log(result)
};

module.exports = { dataUsage };
