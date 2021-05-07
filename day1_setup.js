function loadDay1() {
  const $backgroundImgDiv = $("#backgroundImgDiv");
  $backgroundImgDiv.replaceWith(`
    <div id="backgroundImgDiv">
      <img src="dad_driving.png" alt="dad driving" width="35%" >
    </div>
  `);

  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv">
      <p>You are on the way to Camp! Your dad is driving the car.</p>
      <p>Choose what to do in the car:</p>
      <button class="choiceButton" onclick="talkToYourMom()">Talk to your dad</button>
      <button class="choiceButton" onclick="listenToMusic()">Listen to the Music</button>  
    </div>
  `);
}

function clicked() {
   $('.myDiv').slideToggle("slow"); 
}

function friendAlertFN() {
  $('.friendAlert').slideToggle("slow"); 
}

function friendAlertjonna() {
  $('#jonnaChoiceLabel').hide();
  $('#jonnaChoice1').hide();
  $('#jonnaChoice2').hide();
  $('#friendAlertjonna').slideToggle("slow");
    updateachievements('befriend_jonna');
}

function talkToYourMom() {
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">
    
      <div class="wrapper">
        <img style="width: 18%; float:left;" src="dad.png" alt="dad">

        <div class="textbox_border" style="background: rgb(17, 63, 171);">
          <span  class="nametag" style="background: rgb(17, 63, 171);">dad:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"I remember when I used to go to this camp! I met your father here too. <br>We had so much fun. We would tell each other stories of this old camp legend...<br>Oh! We're here!"</p>
            </div>
        </div>
      </div>
      <br>
      <button class="choiceButton" onclick="getOutOfCar()">Get out of the truck</button>
        
  </div>
  `);
  return;
}

function listenToMusic() {
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`    
  <div id="replacementDiv" class="center">
    <div class="wrapper">
      <img style="width: 18%; float:left;" src="radio.png" alt="radio">
      <div class="textbox_border" style="background: rgb(44, 196, 41);">
        <span class="nametag" style="background: rgb(44, 196, 41);">Music:</span> 
        <div class="textbox_text">
          <p style="margin: 15px; text-align: left;">*static music plays*</p>
        </div>
      </div>
    </div>
    
    <div class="wrapper">
      <img style="width: 18%; float:left;" src="dad.png" alt="dad">
      <div class="textbox_border" style="background: rgb(17, 63, 171);">
        <span class="nametag" style="background: rgb(17, 63, 171);">dad:</span> 
        <div class="textbox_text">
          <p style=" margin: 15px; text-align: left;">"Hmm. I guess the service is still bad up here. Oh well. We've made it!"</p>
        </div>
      </div>
    </div>

      <br>
      <button class="choiceButton" onclick="getOutOfCar()">Get out of the car</button>
        
  </div>
  `);
  return;
}

function getOutOfCar() {
  const $backgroundImgDiv = $("#backgroundImgDiv");
  $backgroundImgDiv.replaceWith(`
    <div id="backgroundImgDiv">
      <img src="entrance.jpg" alt="entrance" width="35%">
    </div> 
  `);

  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">
      
      <div class="wrapper">
        <img style="width: 18%; float:left;" src="sarah.png" alt="Sarah">
        <div class="textbox_border" style="background: rgb(146, 146, 146);">
          <span  class="nametag" style="background: rgb(146, 146, 146);">Sarah:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">Hi! Welcome to Camp! We're so happy to have you!<br>Let me introduce you to the boys' counselor, Counselor noah."</p>
            </div>
        </div>
      </div>
      <br>
      <button class="nextButton" onclick="next1()">Next</button>      
  </div>
  `);
}

function next1() {
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
      <div id="replacementDiv" class="center">
        
        <div class="wrapper">
          <img style="width: 18%; float:left;" src="noah.png" alt="noah">
          <div class="textbox_border" style="background: gray;">
            <span  class="nametag" style="background: gray;">noah:</span> 
              <div  class="textbox_text">
                <p style=" margin: 15px; text-align: left;">"Hi! Ready for a week of fun! This is going to be the most funfilled week of your lives!<br>Just don't go in the Lake, because there have been a lot of bear sightings."</p>
              </div>
          </div>
        </div>

        <br>
        <button class="nextButton" onclick="next2()">Next</button>
    </div>
  `);
}

function next2() {
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">

      <div class="wrapper">
        <img style="width: 18%; float:left;" src="noah.png" >
        <div class="textbox_border" style="background: gray;">
          <span  class="nametag" style="background: gray;">noah:</span> 
            <div  class="textbox_text">
              <p style="margin: 15px; text-align: left;">"Now, we're going to have to ask you to turn in your phones."</p>
            </div>
        </div>
      </div>


      <div class="wrapper">
        <img style="width: 18%; float:left;" src="sarah.png">
        <div class="textbox_border" style="background: rgb(146, 146, 146);">
          <span  class="nametag" style="background: rgb(146, 146, 146);">Sarah:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"This camp is a screen-free zone!"</p>
            </div>
        </div>
      </div>

      <br>
      <button class="nextButton" onclick="next3()">Next</button>
        
  </div>
  `);

  
}

function next3() {
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">

      <div class="wrapper">
        <img style="width: 18%; float:left;" src="Brittney.png" alt="brittney">
        <div class="textbox_border" style="background: rgb(255, 0, 212);">
          <span  class="nametag" style="background: rgb(255, 0, 212);">Brittney:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">Can y'all really do that?"</p>
            </div>
        </div>
      </div>


      <div class="wrapper">
        <img style="width: 18%; float:left;" src="noah.png" alt="noah">
        <div class="textbox_border" style="background: gray;">
          <span  class="nametag" style="background: gray;">noah:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"Oh we can :)"</p>
            </div>
        </div>
      </div>

      <p>A trouble maker walks by. You hear him mutter under his breath.</p>

      <div class="wrapper">
        <img style="width: 18%; float:left;" src="riley.png" alt="riley">
        <div class="textbox_border" style="background: rgb(255, 0, 4);">
          <span  class="nametag" style="background: rgb(255, 0, 4);">Riley:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"Whatever... I'll just take it back later."</p>
            </div>
        </div>
      </div>

      <div class="wrapper">
        <img style="width: 18%; float:left;" src="sarah.png">
        <div class="textbox_border" style="background: rgb(146, 146, 146);">
          <span  class="nametag" style="background: rgb(146, 146, 146);">Sarah:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"Now let's go around and have everyone introduce themselves."</p>
            </div>
        </div>
      </div>




      <br>
      <button class="nextButton" onclick="next4()">Next</button>
        
  </div>
  `);
}

function next4() {
  const $backgroundImgDiv = $("#backgroundImgDiv");
  $backgroundImgDiv.replaceWith(`
    <div id="backgroundImgDiv"><p></p></div> 
  `);

  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">
        
    <div class="wrapper">
    <img style="width: 18%; float:left;" src="mia.png" alt="Mia speaking">
    <div class="textbox_border" style="background: rgb(170, 16, 222);">
      <span  class="nametag" style="background: rgb(170, 16, 222);">MIA:</span> 
        <div  class="textbox_text">
          <p style=" margin: 15px; text-align: left;">"Hi! I'm Mia!"</p>
        </div>
    </div>
  </div>

  <div class="wrapper">
    <img style="width: 18%; float:left;" src="riley.png" alt="riley">
    <div class="textbox_border" style="background: rgb(255, 0, 4);">
      <span  class="nametag" style="background: rgb(255, 0, 4);">Riley:</span> 
        <div  class="textbox_text">
          <p style=" margin: 15px; text-align: left;">"Riley."</p>
        </div>
    </div>
  </div>

  <div class="wrapper">
    <img style="width: 18%; float:left;" src="jonna.png" alt="jonna">
    <div class="textbox_border" style="background: rgb(255, 175, 105);">
      <span  class="nametag" style="background: rgb(255, 175, 105);">jonna:</span> 
        <div  class="textbox_text">
          <p style=" margin: 15px; text-align: left;">"My name is jonna."</p>
        </div>
    </div>
  </div>


  <div class="wrapper">
    <img style="width: 18%; float:left;" src="grady.png" alt="Grady">
    <div class="textbox_border" style="background: rgb(245, 197, 7);">
      <span  class="nametag" style="background: rgb(245, 197, 7);">Grady:</span> 
        <div  class="textbox_text">
          <p style=" margin: 15px; text-align: left;">"Hi, My name is Grady."</p>
        </div>
    </div>
  </div>

  <div class="wrapper">
    <img style="width: 18%; float:left;" src="oliver.png" alt="Oliver">
    <div class="textbox_border" style="background: rgb(4, 138, 71);">
      <span  class="nametag" style="background: rgb(4, 138, 71);">Oliver:</span> 
        <div  class="textbox_text">
          <p style=" margin: 15px; text-align: left;">"I'm Oliver!"</p>
        </div>
    </div>
  </div>

  <div class="wrapper">
    <img style="width: 18%; float:left;" src="ellie.png" alt="ellie">
    <div class="textbox_border" style="background: rgb(30, 122, 125);">
      <span  class="nametag" style="background: rgb(30, 122, 125);">ellie:</span> 
        <div  class="textbox_text">
          <p style=" margin: 15px; text-align: left;">"My name is ellie."</p>
        </div>
    </div>
  </div>


  <div class="wrapper">
    <img style="width: 18%; float:left;" src="Brittney.png" alt="brittney">
    <div class="textbox_border" style="background: rgb(255, 0, 212);">
      <span  class="nametag" style="background: rgb(255, 0, 212);">brittney:</span> 
        <div  class="textbox_text">
          <p style=" margin: 15px; text-align: left;">"...You can call me brittney."</p>
        </div>
    </div>
  </div>


  <button class="nextButton" onclick="go2dinner()">Next</button>

      
    </div>
  `);
}

function go2dinner() {
    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">      
  
        <div class="wrapper">
        <img style="width: 18%; float:left;" src="sarah.png">
        <div class="textbox_border" style="background: rgb(146, 146, 146);">
          <span  class="nametag" style="background: rgb(146, 146, 146);">Sarah:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"I'm sure y'all are starvin, so lets go to the dining hall."</p>
            </div>
        </div>
      </div>

      <button class="nextButton" onclick="atdinner()">Next</button>

      </div>
    `);
  }

function atdinner() {
  const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="dining_hall.png" alt="dining hall" width="35%">
      </div> 
    `);
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
  <script>
function getName() {
    playersRef.orderByChild("email").equalTo(Cookies.get("Email")).on("child_added", function(data) {
        $("span:first").prepend(data.val().name + ":");
        $("span:last").append(data.val().name + ":")

     });
    }
getName();
</script>
  <div id="replacementDiv" class="center">      
        <br>
        <p>At dinner you see Riley is reading. </p>

        <div class="wrapper">
        <img style="width: 18%; float:left;" src="me.png" alt="me">
        <div class="textbox_border" style="background: rgb(17, 63, 171);">
          <span  class="nametag" style="background: rgb(17, 63, 171);"></span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"Is that a book on water creatures?"</p>
            </div>
        </div>
      </div>

      <br>
        <div class="wrapper">
        <img style="width: 18%; float:left;" src="riley.png" alt="Riley">
        <div class="textbox_border" style="background: rgb(255, 0, 4);">
          <span  class="nametag" style="background: rgb(255, 0, 4);">Riley:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"Yes maam. This issue talks about creatures around here."</p>
            </div>
        </div>
      </div>

      <br>
      <p>Riley seems very adament that there could be a monster in the Lake.</p>
      <div class="wrapper">
        <img style="width: 18%; float:left;" src="me.png" alt="me">
        <div class="textbox_border" style="background: rgb(17, 63, 171);">
          <span  class="nametag" style="background: rgb(17, 63, 171);"></span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"well alrighty then."</p>
            </div>
        </div>
      </div>
        <button class="nextButton" onclick="next5()">Next</button>
    </div>
  `);
}


function next5() {
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
  <div id="replacementDiv" class="center">

      <p>jonna sits next to you.<p>

      <div class="wrapper">
        <img style="width: 18%; float:left;" src="jonna.png" alt="jonna">
        <div class="textbox_border" style="background: rgb(255, 175, 105);">
          <span  class="nametag" style="background: rgb(255, 175, 105);">jonna:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"This is my first time at camp. Have you been here before?"</p>
            </div>
        </div>
      </div>
    
      <p id="jonnaChoiceLabel">Choose what to say:</p>
      <button id="jonnaChoice1" class="choiceButton" onclick="friendAlertjonna()">"This is my first time too."</button>
      <button id="jonnaChoice2" class="choiceButton" onclick="friendAlertjonna()">"No, we can be new together!"</button>   
      
      <button class="nextButton" onclick="jonnaFriend()">"Next"</button>
      
    </div>
  `);
}

function invite() {

  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
  <div id="replacementDiv" class="center">     
      <div class="wrapper">
        <img style="width: 18%; float:left;" src="jonna.png" alt="jonna">
        <div class="textbox_border" style="background: rgb(255, 175, 105);">
          <span  class="nametag" style="background: rgb(255, 175, 105);">jonna:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"Oh good! I was worried everyone would know each other already from last year."</p>
              <p style=" margin: 15px; text-align: left;">"After dinner, wanna go explore the lake?"</p>
            </div>
        </div>
      </div>

      <button class="choiceButton" onclick="yesLake()">Sure!</button>
      <button class="choiceButton" onclick="noLake()">Maybe another time...during the day...</button>

      


      <br>
      <br>
  </div>
  `);
}

function yesLake() {

  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
  <div id="replacementDiv" class="center">     
      <div class="wrapper">
        <img style="width: 18%; float:left;" src="jonna.png" alt="jonna">
        <div class="textbox_border" style="background: rgb(255, 175, 105);">
          <span  class="nametag" style="background: rgb(255, 175, 105);">jonna:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"Riley do you wanna come?"</p>
            </div>
        </div>
      </div>

      <div class="wrapper">
        <img style="width: 18%; float:left;" src="riley.png" alt="riley">

        <div class="textbox_border" style="background: rgb(255, 0, 4);">
          <span  class="nametag" style="background: rgb(255, 0, 4);">Riley:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"I guess."</p>
            </div>
        </div>
      </div>
      
      <button class="nextButton" onclick="inTheLake()">Next</button>
    </div>
  `);
}

function noLake() {

  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
  <div id="replacementDiv" class="center">      

      <div class="wrapper">
        <img style="width: 18%; float:left;" src="jonna.png" alt="jonna">
        <div class="textbox_border" style="background: rgb(255, 175, 105);">
          <span class="nametag" style="background: rgb(255, 175, 105);">jonna:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"well... Riley do you wanna go?"</p>
            </div>
        </div>
      </div>

      <div class="wrapper">
        <img style="width: 18%; float:left;" src="riley.png" alt="Riley speaking">

        <div class="textbox_border" style="background: rgb(255, 0, 4);">
          <span  class="nametag" style="background: rgb(255, 0, 4);">Riley:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"Sure."</p>
            </div>
        </div>
      </div>

      <button class="nextButton" onclick="jonnaIsDead()">Next</button>
    </div>
  `);
}

function inTheLake() {
  const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="lake.png" alt="Lake" width="35%" class="center">
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
          <span  class="nametag" style="background: rgb(17, 63, 171);"></span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"it's getting dark."</p>
            </div>
        </div>
      </div>

      <br>
        <div class="wrapper">
        <img style="width: 18%; float:left;" src="riley.png" alt="Riley">
        <div class="textbox_border" style="background: rgb(255, 0, 4);">
          <span  class="nametag" style="background: rgb(255, 0, 4);">Riley:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"Where's jonna?"</p>
            </div>
        </div>
      </div>

      <p>Suddenly you both hear a scream</p>

      <br>
      <div class="wrapper">
        <img style="width: 18%; float:left;" src="jonna.png" alt="jonna">
        <div class="textbox_border" style="background: rgb(255, 175, 105);">
          <span  class="nametag" style="background: rgb(255, 175, 105);">jonna:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"AHHHHHHH!!!!!!!!!!!"</p>
            </div>
        </div>
      </div>

      <p>You and Riley run towards the scream. Riley is surprisingly fast. He beats you there.</p>
      <button class="nextButton" onclick="inTheLake2()">Next</button>
    </div>
  `);
}

function inTheLake2() {
  const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="lake.png" alt="Lake" width="35%" class="center">
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
  
        <p>You burst into a clearing. You see Riley standing at the edge and he looks terrified.</p>

        <div class="wrapper">
        <img style="width: 18%; float:left;" src="me.png" alt="me">
        <div class="textbox_border" style="background: rgb(17, 63, 171);">
          <span  class="nametag" style="background: rgb(17, 63, 171);"></span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"Where's jonna!?"</p>
            </div>
        </div>
      </div>

      <br>
        <div class="wrapper">
        <img style="width: 18%; float:left;" src="riley.png" alt="Riley">
        <div class="textbox_border" style="background: rgb(255, 0, 4);">
          <span  class="nametag" style="background: rgb(255, 0, 4);">Riley:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"She got eaten."</p>
            </div>
        </div>
      </div>

        <button class="nextButton" onclick="next()">Next</button>
    </div>
  `);
}

function jonnaIsDead() {

  const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="boyCabin.png" alt=" boy cabin" width="35%" class="center">
      </div> 
    `);
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
  <div id="replacementDiv" class="center"> 

        <br>
        <script>
        function getName() {
            playersRef.orderByChild("email").equalTo(Cookies.get("Email")).on("child_added", function(data) {
                $("span:first").prepend(data.val().name + ":");
        
             });
            }
        getName();
        </script>
  
        <p>You're back in your cabin getting settled in for bed.</p>

        <div class="wrapper">
        <img style="width: 18%; float:left;" src="me.png" alt="me">
        <div class="textbox_border" style="background: rgb(17, 63, 171);">
          <span  class="nametag" style="background: rgb(17, 63, 171);"></span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"I wonder how Riley and jonna are doing at the Lake?"</p>
            </div>
        </div>
      </div>

      <p>Suddenly Riley slams the cabin door open. He looks scared.</p>
      <br>
        <div class="wrapper">
        <img style="width: 18%; float:left;" src="riley.png" alt="Riley">
        <div class="textbox_border" style="background: rgb(255, 0, 4);">
          <span  class="nametag" style="background: rgb(255, 0, 4);">Riley:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"jonna got eaten."</p>
            </div>
        </div>
      </div>

        <button class="nextButton" onclick="next()">Next</button>
    </div>
  `);
  
}
function jonnaFriend(){
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
  <div id="replacementDiv" class="center">      
 
<div id="friendAlertjonna">
      <p>Congratulations! You've befriended jonna!</p>
      </div>
      <button class="nextButton" onclick="invite()">"Next"</button>
      
      </div>
  `);
}

function next() {
  updateachievements('day1');
  window.location.href = "achievements1.html";

}