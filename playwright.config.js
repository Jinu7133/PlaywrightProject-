const config = ({
  testDir : './tests',
  timeout : 60*1000,//40sec - after 40 sec only report will be generated
  expect : {
    timeout : 60*1000 //report generation time if failed
} ,
reporter : 'html',
use : {
  browserName : 'chromium',
  headless : false, // to open browser 
  screenshot : 'on',
  video : 'on',
  trace : 'on'
  
}
})
module.exports = config