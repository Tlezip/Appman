const cryptoDetails = async (symbols = []) => {
  // put your code here !!
  // var request = require('request');
  //   request('https://coinbin.org', function (error, response, body) {
      // const data = JSON.parse(body)
    // console.log(body)
  // })
  var axios = require('axios')
  axios.get('https://coinbin.org').then((response) => {
    console.log(response)
  })
};

module.exports = { cryptoDetails };
