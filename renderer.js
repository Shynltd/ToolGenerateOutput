let Excel = require('exceljs');
var fs = require("fs");
var {app} = require('electron')

 async function btnGenerate() {
    let fileLog = document.getElementById("logFile").files
    let fileReport = document.getElementById("reportFile").files
    if (fileLog.length > 0 && fileReport.length > 0) {
        console.log(`============================`)
        console.log(app.getPath("downloads"))
        console.log(`============================`)

        let readFile = await fs.readFileSync(fileLog[0].path)
        console.log(readFile)
        let readLog = new FileReader();
        let readReport = new FileReader();
        let content = "";
        readLog.readAsText(fileLog[0]);
        readLog.onload = function () {
            content = this.result
            console.log(content)
        }

        readReport.readAsText(fileReport[0]);
        readReport.onload = function () {
            console.log(this.result)
        }
    }


}

