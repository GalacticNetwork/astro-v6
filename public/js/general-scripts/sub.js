    // script to generate random greetings

    function changeSub(num) {
        document.getElementById("subtitle").innerText = say[num];
      }
      
      
      var say = [];
      say[0] = "Greetings!";
      say[1] = "I like flamingo the youtuber.";
      say[2] = "Womp, Womp.";
      say[3] = "Hey there bucko";
      say[4] = "Don't Use Interstellar!";
      say[5] = "my name is astro!";
      say[6] = "Astrological!";
      say[7] = "Astronomy!";
      say[8] = "this is david. say hi!";
      say[9] = "nuh uh";
      say[10] = "Turip! Ip! Ip!";
      say[11] = "MaMa! MAMAAAAAAAAAAAAA";
      say[12] = "How many sides does a circle have?";
      say[13] = "Womp, Womp.";
      say[14] = "You can read btw";
      say[15] = "Imagine using chromebooks!";
      say[16] = "HEHEHEHA.";
      say[17] = "Redbull gives you wings...";
      say[18] = "Can't play jenga in ohio";
      say[19] = "bubeleah!";
      say[20] = "By students, for students.";
      say[21] = "gg";
      say[22] = "gg blockers";
      say[23] = "gg = get good";
      say[24] = "Ahhhhhhhhh";
      say[25] = "Powered By Ultraviolet 3.1.2!";
      say[26] = "betch stfu";
      say[27] = "noot noot!";
      say[28] = "green fn";
      say[29] = "the voices in my head say pls use astro";
      say[30] = "not our fault if u get caught";
      say[31] = "your name is noi noi";
      say[32] = "G-G-GGYATTTTTTTTTT";
      say[33] = "Astro: but it's NOT static";
      say[34] = "B + B + C";
      say[35] = "Unblocker of 87!";
      say[36] = "AIO²";
      say[37] = "hello";
      
      
      // pick a random greeting
      var howmany = say.length;
      var bRand = 0;
      bRand = Math.random();
      bRand = Math.floor(bRand * howmany);
      sayWhat = say[bRand];
      document.getElementById("subtitle").innerText = sayWhat;
      
      function changeSplash(num) {
        document.getElementById("subtitle").innerText = say[num];
        var ret = "Set current splash to splash " + num + ", " + say[num];
        return ret;
      }
      // credit to 3kh0 for the code :)
