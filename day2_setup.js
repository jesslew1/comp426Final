function loadDay2() {
  const $backgroundImgDiv = $("#backgroundImgDiv");
  $backgroundImgDiv.replaceWith(`
    <div id="backgroundImgDiv">
      <div class="map">
        <img src="boyCabin.png" alt="boys Cabin" width="50%" class="center">
      </div>

      <button class="skateboard_btn" width="50%" onclick="clickSkateboard()">Click me</button> 
      <button class="soda_btn" width="50%" onclick="clickSoda()">Click me</button> 
      <button class="chips_btn" width="50%" onclick="clickChips()">Click me</button> 
      <button class="fishingRod_btn" width="50%" onclick="clickFishingRod()">Click me</button> 

      <div id="poster_btnDIV">
        <button class="poster_btn" width="50%" onclick="clickPoster()">Click me</button>              
      </div>
    </div>
  `);

  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv">
      <button class="nextButton" onclick="goToDiningHall()">Next</button>
    </div>
  `);
}


function friendAlertFN() {
    $('.friendAlert').slideToggle("slow"); 
  }


  function clickSoda() {
    $('#soda').slideToggle("slow"); 
  } 

  function clickChips() {
    $('#chips').slideToggle("slow"); 
  } 

  function clickSkateboard() {
    $('#skateboard').slideToggle("slow"); 
  } 

  function clickFishingRod() {
    $('#fishingRod').slideToggle("slow"); 
  } 

  function clickPoster() {
    $('#poster').slideToggle("slow"); 
  } 

  function clickPoster1() {
    $('#poster').hide(); 
    $('#poster_btnDIV').remove();
    $('#poster1').slideToggle("slow"); 
  } 

  function clickPoster2() {
    $('#poster').hide(); 
    $('#poster_btnDIV').remove();
    $('#poster2').slideToggle("slow"); 
  } 


  function clickRabbit() {
    $('#rabbit').slideToggle("slow"); 
  } 

  function clickSign() {
    $('#sign').slideToggle("slow"); 
  } 

  function clickMushrooms() {
    $('#mushrooms').slideToggle("slow"); 
  } 
  function clickSlimeMarks() {
    $('#SlimeMarks').slideToggle("slow"); 
  } 


 function goToDiningHall() {
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="dining_hall.png" alt="dining hakll" width="35%">
      </div> 
    `);

    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
      <div id="replacementDiv" class="center">

      <script>
      function getName() {
          playersRef.orderByChild("email").equalTo(Cookies.get("Email")).on("child_added", function(data) {
              $("span:first").prepend(data.val().name + ":");
      
           });
          }
      getName();
      </script>
      
        <div class="wrapper">
          <img style="width: 18%; float:left;" src="me.png" alt="me">

          <div class="textbox_border" style="background: rgb(17, 63, 171);">
            <span  class="nametag" style="background: rgb(17, 63, 171);"> </span> 
              <div  class="textbox_text">
                <p style=" margin: 15px; text-align: left;">"I can't believe that jonna is gone... What happened last night?"</p>
              </div>
          </div>
        </div>
        <br>
        <button class="nextButton" onclick="badClaimingMonster()">Next</button>
          
    </div>
    `);
    return;
}

function badClaimingMonster() {
  const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
      <div id="replacementDiv" class="center">
        <div class="wrapper">
          <img style="width: 18%; float:left;" src="riley.png" alt="Riley">

          <div class="textbox_border" style="background: rgb(255, 0, 4);">
            <span  class="nametag" style="background: rgb(255, 0, 4);">Riley:</span> 
              <div  class="textbox_text">
                <p style=" margin: 15px; text-align: left;">"I'm telling you I know what I saw! <br> There's a monster in the Lake and it ATE jonna!!"</p>
              </div>
          </div>
        </div>
        <br>
        <button class="nextButton" onclick="othersAreDoubtful()">Next</button>
          
    </div>
    `);
    return;
}

function othersAreDoubtful() {
  const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
      <div id="replacementDiv" class="center">
      
        <div class="wrapper">
          <img style="width: 18%; float:left;" src="Brittney.png" alt="Brittney" >

          <div class="textbox_border" style="background: rgb(255, 0, 212);">
            <span  class="nametag" style="background: rgb(255, 0, 212);">brittney:</span> 
              <div  class="textbox_text">
                <p style=" margin: 15px; text-align: left;">"Monsters are not real!</p>
              </div>
          </div>
        </div>
        <br>


        <div class="wrapper">
          <img style="width: 18%; float:left;" src="ellie.png" alt="ellie">

          <div class="textbox_border" style="background: rgb(30, 122, 125);">
            <span  class="nametag" style="background: rgb(30, 122, 125);">ellie:</span> 
              <div  class="textbox_text">
                <p style=" margin: 15px; text-align: left;">"I don't think you're stupid but it was dark and scary...you're probably just misintepreting."</p>
              </div>
          </div>
        </div>
        <br>

        <button class="nextButton" onclick="badCounselorMakesStatement()">Next</button>
          
    </div>
    `);
    return;
}

function badCounselorMakesStatement() {
  const $replacementDiv = $("#replacementDiv");

    $replacementDiv.replaceWith(`
      <div id="replacementDiv" class="center">

      <p>The arguing stops when Noah enters the dining hall.</p>

      <div class="wrapper">
        <img style="width: 18%; float:left;" src="noah.png" alt="Codie Speaking">
        <div class="textbox_border" style="background: gray;">
          <span  class="nametag" style="background: gray;">Noah:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"I have some bad news.<br>
              One of your fellow campers, jonna has fallen VERY sick. <br>
              But, it's still a fine day to be at camp- so go have fun!"</p>
            </div>
        </div>
      </div>
        <br>
        <button class="nextButton" onclick="doYouSupport()">Next</button>
          
    </div>
    `);
    return;
}


function doYouSupport() {
  const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
      <div id="replacementDiv" class="center">

        <div class="wrapper">
          <img style="width: 18%; float:left;" src="grady.png" alt="Grady">
          <div class="textbox_border" style="background: rgb(245, 197, 7);">
            <span  class="nametag" style="background: rgb(245, 197, 7);">Grady:</span> 
              <div  class="textbox_text">
                <p style=" margin: 15px; text-align: left;">"So jonna is not dead! We should visit her."</p>
              </div>
          </div>
        </div>
        <br>

        <p>Noah leaves and everyone seems to to be relieved. You notice that Riley is staying quiet and he looks upset.</p>

        <p>You turn to him and say:</p>
        <button class="fitContentChoiceButton" onclick="friendAlertFN()">"I believe Riley, jonna wasn't sick last night."</button>
        <br><br>
        <button class="fitContentChoiceButton" onclick="dismissRiley()">"Better Jonns be sick than dead from a monster"</button>   
        <br>
        <br>
        <div class ="friendAlert" >
          <p>Congratulations! You've befriended Riley!</p>
          <script>

        updateachievements('befriend_Riley');
 
        </script>

          <button class="nextButton" onclick="believeRiley()">"Next"</button>
        </div>
  
          
    </div>
    `);
    return;
}

function believeRiley() {
  const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
      <div id="replacementDiv" class="center">

      <script>
      function getName() {
          playersRef.orderByChild("email").equalTo(Cookies.get("Email")).on("child_added", function(data) {
              $("span:odd").prepend(data.val().name + ":");
      
           });
          }
      getName();
      </script>
      <div class="wrapper">
        <img style="width: 18%; float:left;" src="riley.png" alt="Riley">

        <div class="textbox_border" style="background: rgb(255, 0, 4);">
          <span  class="nametag" style="background: rgb(255, 0, 4);">Riley:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"You believe me?"</p>
            </div>
        </div>
      </div>
      <br>

      <div class="wrapper">
          <img style="width: 18%; float:left;" src="me.png" alt="me">

          <div class="textbox_border" style="background: rgb(17, 63, 171);">
            <span  class="nametag" style="background: rgb(17, 63, 171);"></span> 
              <div  class="textbox_text">
                <p style=" margin: 15px; text-align: left;">"You don't look like you're lying."</p>
              </div>
          </div>
        </div>
      <br>

      <div class="wrapper">
        <img style="width: 18%; float:left;" src="riley.png" alt="Riley">

        <div class="textbox_border" style="background: rgb(255, 0, 4);">
          <span  class="nametag" style="background: rgb(255, 0, 4);">Riley:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"let's go to the Lake and see if we can find the monster"</p>
            </div>
        </div>
      </div>
     
          
      <br>
        <button class="nextButton" onclick="goToLakeWithBadKid()">Next</button> 
    </div>
    `);
    return;
}

function dismissRiley() {

  const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
      <div id="replacementDiv" class="center">

      <div class="wrapper">
        <img style="width: 18%; float:left;" src="riley.png" alt="Riley">

        <div class="textbox_border" style="background: rgb(255, 0, 4);">
          <span  class="nametag" style="background: rgb(255, 0, 4);">Riley:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"You know what? I don't care, I hope all y'all get eaten."</p>
            </div>
        </div>
      </div>
      <br>
      <p>Riley storms off.</p>
      <p>You decide to go to the Lake to search for the monster.</p>
      <br>
      <button class="nextButton" onclick="goToLakeAlone()">Next</button>      
    `);
    return;
  
}

function goToLakeWithBadKid() {
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="lake.png" alt="Lake" width="35%" class="center">
        <button class="rabbit_btn" width="50%" onclick="clickRabbit()">Click me</button> 
        <button class="sign_btn" width="50%" onclick="clickSign()">Click me</button> 
        <button class="mushrooms_btn" width="50%" onclick="clickMushrooms()">Click me</button> 
        <button class="SlimeMarks_btn" width="50%" onclick="clickSlimeMarks()">Click me</button> 
      </div> 
    `);

    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
      <div id="replacementDiv" class="center">
        <button class="nextButton" onclick="strangeGoo()">Next</button>
    </div>
    `);
    return;
}

function goToLakeAlone() {
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="Pictures/Background/Lake.png" alt="Lake" width="35%" class="center">
        <button class="rabbit_btn" width="50%" onclick="clickRabbit()">Click me</button> 
        <button class="sign_btn" width="50%" onclick="clickSign()">Click me</button> 
        <button class="mushrooms_btn" width="50%" onclick="clickMushrooms()">Click me</button> 
        <button class="SlimeMarks_btn" width="50%" onclick="clickSlimeMarks()">Click me</button> 
      </div> 
    `);

    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
      <div id="replacementDiv" class="center">
      <button class="nextButton" onclick="wellSomethingsInTheLake()">Next</button>
    </div>
    `);
    return;
}

function strangeGoo() {

  const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="slime.png" alt="slime" width="35%" class="center">
      </div> 
    `);

    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
      <div id="replacementDiv" class="center">

      <script>
      function getName() {
          playersRef.orderByChild("email").equalTo(Cookies.get("Email")).on("child_added", function(data) {
              $("span:odd").prepend(data.val().name + ":");
      
           });
          }
      getName();
      </script>

      <div class="wrapper">
        <img style="width: 18%; float:left;" src="riley.png" alt="riley">

        <div class="textbox_border" style="background: rgb(255, 0, 4);">
          <span  class="nametag" style="background: rgb(255, 0, 4);">Riley:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"Look what I found. I think it is monster goo!"</p>
            </div>
        </div>
      </div>
      <br>

      <p> Riley held out his paw and on it is some kind of weird slime.</p>
      
        <div class="wrapper">
          <img style="width: 18%; float:left;" src="me.png" alt="me">

          <div class="textbox_border" style="background: rgb(17, 63, 171);">
            <span  class="nametag" style="background: rgb(17, 63, 171);"></span> 
              <div  class="textbox_text">
                <p style=" margin: 15px; text-align: left;">"I don't know if that's monster goo"</p>
              </div>
          </div>
        </div>
        <br>

        <div class="wrapper">
        <img style="width: 18%; float:left;" src="riley.png" alt="riley">

        <div class="textbox_border" style="background: rgb(255, 0, 4);">
          <span  class="nametag" style="background: rgb(255, 0, 4);">Riley:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"this is proof that something is in the Lake."</p>
            </div>
        </div>
      </div>
      <br>

      <br>
        <button class="nextButton" onclick="next()">Next</button>
    </div>
    `);
    return;
}


function wellSomethingsInTheLake() {

  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">

    <script>
function getName() {
    playersRef.orderByChild("email").equalTo(Cookies.get("Email")).on("child_added", function(data) {
        $("span:first").prepend(data.val().name + ":");

     });
    }
getName();
</script> 

      <div class="wrapper">
        <img style="width: 18%; float:left;" src="me.png" alt="me">

        <div class="textbox_border" style="background: rgb(17, 63, 171);">
          <span  class="nametag" style="background: rgb(17, 63, 171);"></span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"I don't know if it's a monster but there's definitely something in the Lake."</p>
            </div>
        </div>
      </div>
      <br>   
      <button class="nextButton" onclick="next()">Next</button>

      
  `);
  return;
}
// function oliverFriendAlert() {
//   $('#oliverFriendAlert').slideToggle("slow"); 
// }
// function oliverFriendAlertClose() {
//   $('#oliverFriendAlert').hide(); 
// }
function oliverFriend(){
  $('#oliverFriendAlert').slideToggle("slow"); 
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">
    <p>Congratulations!</p>
    <p>You've befriended oliver!.</p>
    <script>
        updateachievements('befriend_Oliver');
    </script>
        <button class="nextButton" onclick="goToDiningHall()">"Next"</button>

  `);
  $('#oliverFriendAlert').hide(); 

}

function next() {
  updateachievements('day2')
  window.location.href = "achievements2.html"
}