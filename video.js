function main ()
{
  video1 = document.getElementById("video1");

  video2 = document.getElementById("video2");

  video3 = document.getElementById("video3");

  videocentral = document.getElementById("videocentral");

  botonbucle = document.getElementById("bucle");

  botoninicio1 = document.getElementById("inicio1");
  botoninicio2 = document.getElementById("inicio2");
  botoninicio3 = document.getElementById("inicio3");
  botonfinal1 = document.getElementById("final1");
  botonfinal2 = document.getElementById("final2");
  botonfinal3 = document.getElementById("final3");

  textoinicio = document.getElementById("textoinicio");
  textofinal = document.getElementById("textofinal");

  bucle = false;

  video1ON = false;
  video2ON = false;
  video3ON = false;

  final1ON = false;
  final2ON = false;
  final3ON = false;

  reloj = document.getElementById("reloj");

  timer = null;

  min = 0;

  function ocultarbotones() {
    botoninicio1.style.display = 'none';
    botoninicio2.style.display = 'none';
    botoninicio3.style.display = 'none';
    botonfinal1.style.display = 'none';
    botonfinal2.style.display = 'none';
    botonfinal3.style.display = 'none';
    textoinicio.innerHTML = '';
    textofinal.innerHTML = '';
  }

  function mostrarbotones() {
    botoninicio1.style.display = 'block';
    botoninicio2.style.display = 'block';
    botoninicio3.style.display = 'block';
    botonfinal1.style.display = 'block';
    botonfinal2.style.display = 'block';
    botonfinal3.style.display = 'block';
    textoinicio.innerHTML = 'SELECCIONE INICIO DEL BUCLE';
    textofinal.innerHTML = 'SELECCIONE FINAL DEL BUCLE';
  }


  video1.onmouseover = () => {
    video1.muted = false;
  }
  video1.onmouseout = () => {
    video1.muted = true;
  }

  video1.onclick = () => {
    videocentral.src = "swamenazafantasma.mp4";
    videocentral.currentTime = video1.currentTime;
    video1ON = true;
    video2ON = false;
    video3ON = false;
  }

  video2.onmouseover = () => {
    video2.muted = false;
  }
  video2.onmouseout = () => {
    video2.muted = true;
  }

  video2.onclick = () => {
    videocentral.src = "mivideo.mp4";
    videocentral.currentTime = video2.currentTime;
    video1ON = false;
    video2ON = true;
    video3ON = false;
  }

  video3.onmouseover = () => {
    video3.muted = false;
  }
  video3.onmouseout = () => {
    video3.muted = true;
  }

  video3.onclick = () => {
    videocentral.src = "sw.mp4";
    videocentral.currentTime = video3.currentTime;
    video1ON = false;
    video2ON = false;
    video3ON = true;
  }

  videocentral.onmouseover = () => {
    if (video1ON) {
      video1.muted = false;
    } else if (video2ON) {
      video2.muted = false;
    } else if (video3ON) {
      video3.muted = false;
    }
  }
  videocentral.onmouseout = () => {
    if (video1ON) {
      video1.muted = true;
    } else if (video2ON) {
      video2.muted = true;
    } else if (video3ON) {
      video3.muted = true;
    }
  }



  botonbucle.onclick = () => {
    if (!bucle) {
      videocentral.loop = true;
      bucle = true;
      botonbucle.innerHTML = "BUCLE: YES";
      mostrarbotones();
    } else {
      videocentral.loop = false;
      bucle = false;
      final1ON = false;
      final2ON = false;
      final3ON = false;
      botonbucle.innerHTML = "BUCLE: NO";
      ocultarbotones();
    }
  }
    botoninicio1.onclick = () => {
      if (bucle) {
        videocentral.currentTime = 5;
      }
    }

    botonfinal1.onclick = () => {
      if (bucle) {
        final1ON = true;
      }
    }
    botonfinal2.onclick = () => {
      if (bucle) {
        final2ON = true;
      }
    }
    botonfinal3.onclick = () => {
      if (bucle) {
        final3ON = true;
      }
    }

  function añadirMinuto(str,min) {
    str = Number(str) - 60;
    min += 1;
    if (str < 10) {
      reloj.innerHTML = min + " : 0" + str;
    } else {
      reloj.innerHTML = min + " : " + str;
    }
  }

  function cronometro (str,min) {
    if (Number(str)>=60) {
      str = Number(str) - 60;
      min += 1;
      if (str < 10) {
        reloj.innerHTML = min + " : 0" + str;
      } else {
        reloj.innerHTML = min + " : " + str;
      }
      if (Number(str) >= 60) {
        str = Number(str) - 60;
        min += 1;
        if (str < 10) {
          reloj.innerHTML = min + " : 0" + str;
        } else {
          reloj.innerHTML = min + " : " + str;
        }
        if (Number(str) >=60) {
          str = Number(str) - 60;
          min += 1;
          if (str < 10) {
            reloj.innerHTML = min + " : 0" + str;
          } else {
            reloj.innerHTML = min + " : " + str;
          }
          if (Number(str) >= 60) {
            str = Number(str) - 60;
            min += 1;
            if (str < 10) {
              reloj.innerHTML = min + " : 0" + str;
            } else {
              reloj.innerHTML = min + " : " + str;
            }
            if (Number(str) >= 60) {
              str = Number(str) - 60;
              min += 1;
              if (str < 10) {
                reloj.innerHTML = min + " : 0" + str;
              } else {
                reloj.innerHTML = min + " : " + str;
              }
            }
          }
        }
      }
    } else {
      reloj.innerHTML = str;
    }
  }

  ocultarbotones();

  if (!timer) {
    timer = setInterval( () => {
      if (video1ON) {
        var str = new String(videocentral.currentTime);
        var pos = str.indexOf(".");
        str = str.slice(0,pos);
        cronometro(str,min);

      } else if (video2ON) {
        var str = new String(videocentral.currentTime);
        var pos = str.indexOf(".");
        str = str.slice(0,pos);
        cronometro(str,min);
      } else if (video3ON) {
        var str = new String(videocentral.currentTime);
        var pos = str.indexOf(".");
        str = str.slice(0,pos);
        cronometro(str,min);
      }
      if (final1ON && videocentral.currentTime >= 25) {
        videocentral.currentTime = 0;
      } else if (final2ON && videocentral.currentTime >= 30) {
        videocentral.currentTime = 0;
      } else if (final3ON && videocentral.currentTime >= 35) {
        videocentral.currentTime = 0;
      }
      min = 0;
    }, 100)
  }

}
