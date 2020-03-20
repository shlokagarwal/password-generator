import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  length = 0;
  password = '';
  useSymbols = false;
  useLetters= false;
  useNumbers = false;

  onButtonClick() {

    
    console.log(`About to generate a password with the following:
    Include Letters: ${this.useLetters}
    Include Symbols: ${this.useSymbols}
    Include Numbers: ${this.useNumbers}
    Password Length: ${this.length}`);


    let generated_password = '';
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if(this.useLetters){
      validChars += letters;
    }
    if(this.useSymbols){
      validChars += symbols;
    }
    if(this.useNumbers){
      validChars += numbers;
    }

    for(let i=0; i< this.length; i++){
      const index = Math.floor(Math.random() * validChars.length)
      generated_password += validChars[index];
    }
    this.password = generated_password;

  }
  onChangeLength(newLength: string){
    this.length = parseInt(newLength);
  }

  onChangeUseSymbols(){
    this.useSymbols = !this.useSymbols;
  }
  onChangeUseLetters(){
    this.useLetters = !this.useLetters;
  }
  onChangeUseNumbers(){
    this.useNumbers = !this.useNumbers;
  }

}
