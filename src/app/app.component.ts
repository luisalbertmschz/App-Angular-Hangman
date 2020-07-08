import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  palabra ='MELON';

  palabraOculta ='';

  intentos = 0;

  gano = false;

  perdio = false;



  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor() {

    this.palabraOculta = '_ '.repeat(this.palabra.length);

  }
  comprobar(letra) {

/*      Lllamado a función que recibe como parámetro la letra que ingresa el usuario y en base a ello valida si dicha letra es parte de la palabra oculta */
    this.ValidaExistenciaLetra(letra);

    const palabraOcultaArr = this.palabraOculta.split(' ');

    for (let i = 0; i < this.palabra.length; i ++ ) {

      if (this.palabra[i] === letra)  {

        palabraOcultaArr[i] = letra;
      }

    }

    this.palabraOculta = palabraOcultaArr.join(' ');
    this.ValidaUsuarioGana();


  }
/*    Función que recibe como parámetro letra que ingresa el usuario y valida y esta forma parte de toda la palabra oculta que el usuario debe adivinar. */

  ValidaUsuarioGana(){

    const PalabraArr = this.palabraOculta.split(' ');

    const PalabraEvaluar = PalabraArr.join('');

    console.log(PalabraEvaluar);

    if (PalabraEvaluar === this.palabra) {
      this.gano = true;
      this.playAudioGana();
      console.log("Usuario ganó");


    }

    if (this.intentos >= 9) {

      this.perdio = true;
      this.playAudioPierde();

      console.log("Usuario perdió");



    }

  }



   ValidaExistenciaLetra(letra){

   if (this.palabra.indexOf(letra) >= 0  ) {

     //console.log('Letra si existe ' + letra);

   }else{

     //console.log('Letra no existe ' + letra);

     this.intentos  ++;


   }

   }

  playAudioGana(){
    let audio = new Audio();
    audio.src = 'https://www.myinstants.com/media/sounds/final-fantasy-v-music-victory-fanfare.mp3';
    audio.load();
    audio.play();
  }

  playAudioPierde() {
    let audio = new Audio();
    audio.src = 'https://www.myinstants.com/media/sounds/sad_3.mp3';
    audio.load();
    audio.play();
  }




}
