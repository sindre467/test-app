let valgteSpiller = '' + 'x';
      let status = "Start";

      const ruter = document.getElementsByClassName("rute");
      for (let i = 0; i < ruter.length; i++) {ruter[i]
        .addEventListener("click", function() {
          
          if (ruter[i].innerHTML.trim() == "" && Status == "Start") {
              ruter[i].innerHTML = valgteSpiller;

            valgteSpiller = valgteSpiller === "x" ? "o" : "x";
            
            document.getElementById("spiller").innerHTML =
            valgteSpiller.toLowerCase();
            
            if (
              ruter[0].innerHTML == ruter[1].innerHTML && ruter[1].innerHTML == ruter[2]
              .innerHTML &&
              ruter[1].innerHTML.trim() != ""
            ) {
              visListe(0, 1, 2);
            } else if (
              ruter[3].innerHTML == ruter[4].innerHTML && ruter[4].innerHTML == ruter[5]
              .innerHTML &&
              ruter[3].innerHTML.trim() != ""
            ) {
                visListe(3, 4, 5);
            } else if (
              ruter[6].innerHTML == ruter[7].innerHTML && ruter[6].innerHTML == ruter[7]
              .innerHTML &&
              ruter[6].innerHTML.trim() != ""
            ) {
                visListe(6, 7, 8);
            } else if (
              ruter[0].innerHTML == ruter[3].innerHTML && ruter[0].innerHTML == ruter[3]
              .innerHTML &&
              ruter[0].innerHTML.trim() != ""
            ) {
                visListe(0, 3, 6);
            } else if (
              ruter[1].innerHTML == ruter[4].innerHTML && ruter[1].innerHTML == ruter[4]
              .innerHTML &&
              ruter[1].innerHTML.trim() != ""
            ) {
              visliste(1, 4, 7);
            } else if (
              ruter[2].innerHTML == ruter[5].innerHTML &&  ruter[2].innerHTML == ruter[5]
              .innerHTML &&
              ruter[2].innerHTML.trim() != ""
            ) {
                visListe(2, 5, 8);
            } else if (
              ruter[0].innerHTML == ruter[4].innerHTML && ruter[0].innerHTML == ruter[4]
              .innerHTML &&
              ruter[0].innerHTML.trim() != ""
            ) {
                visListe(0, 4, 8);
             } else if (
              ruter[2].innerHTML == ruter[4].innerHTML && ruter[2].innerHTML == ruter[4]
              .innerHTML &&
              ruter[2].innerHTML.trim() != ""
             ) {
                visListe(2, 4, 6);
            }
          }
       });
      }
      document.getElementById("nullstill").addEventListener("click", 

      function() {
        for (let i = 0; i < ruter.length; i++) {
         ruter[i].innerHTML = "";
         ruter[i].style.backgroundColor = "#dee9ec";
         ruter[i].style.color = "black";
        }
        valgteSpiller = "x";
        document.getElementById("melding").style.display = "none";
        document.getElementById("spiller").innerHTML = "X";
        status = "Start";
      });
       function visListe(x, y, z) {
        ruter[x].style.background = "#317542"; 
        ruter[y].style.background = "#317542"; 
        ruter[z].style.background = "#317542"; 
        
        ruter[x].style.color = "white";
        ruter[y].style.color = "white"; 
        ruter[z].style.color = "white"; 

        document.getElementById("vinner").innerHTML = vlagteSpiller == 'x' ? 'O' : 'X';
        document.getElementById("melding").style.display = "block";
        

        status = "";
      }