var fs = require('fs');
try {
    const data = fs.readFileSync('/config/config.js', 'utf8')
    console.log(data)
  } catch (err) {
    console.error(err)
  }

var test=function() {
    console.log("HEllow how are you");
}
test()