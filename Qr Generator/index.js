import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{
    "message": "type your URL here",
    "name": "URL"
  }
  ])
  .then((answers) => {
    console.log(answers);
    
    const url = answers.URL;


    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));


    fs.writeFile(URL.txt, url, (err) =>{
        if (err) throw err;
        console.log("Qr is generated sucessfully");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });