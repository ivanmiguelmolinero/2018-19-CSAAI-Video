function main ()
{
  video1 = document.getElementById("video1");

  video2 = document.getElementById("video2");

  video3 = document.getElementById("video3");

  videocentral = document.getElementById("videocentral");

  video1ON = false;
  video2ON = false;
  video3ON = false;

  reloj = document.getElementById("reloj");

  timer = null;

  min = 0;

  video1.onmouseover = () => {
    video1.muted = false;
  }
  video1.onmouseout = () => {
    video1.muted = true;
  }

  video1.onclick = () => {
    video1.muted = true;
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
    video2.muted = true;
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
    video3.muted = true;
    videocentral.src = "sw.mp4";
    videocentral.currentTime = video3.currentTime;
    video1ON = false;
    video2ON = false;
    video3ON = true;
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
      min = 0;
    }, 100)
  }

}
