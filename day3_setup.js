function loadDay3() {
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
        <div id="backgroundImgDiv">
            <img src="boyCabin.png" alt="boy cabin" width="35%" >
        </div>
    `);  
    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
        <div id="replacementDiv">
            <p>You wake up thinking about the slime </p>
            <button class="choiceButton" onclick="goToDiningHall()">Go to the dining hall</button>
            <br><br>
        </div>
    `);  
}

function friendAlertMia() {
    $('#MiaChoiceLabel').hide();
    $('#yesSoccer').hide();
    $('#noSoccer').hide();
    $('#friendAlertMia').slideToggle("slow");
    updateachievements('befriend_mia');
}

function dismissMiaAlert() {
    $('#friendAlertMia').hide();
    arriveAtLakes();
    updateachievements('befriend_mia');
}

function friendAlertEllie() {
    hideButton('goWith_Oliver');
    hideButton('goWith_Ellie');
    $('#friendAlertEllie').slideToggle("slow"); 
}

function friendAlertOliver() {
    hideButton('goWith_Oliver');
    hideButton('goWith_Ellie');
    $('#friendAlertOliver').slideToggle("slow"); 
}
function dismissOliverAlert(){
    $('#friendAlertOliver').hide();
    miaAsks();
    updateachievements('befriend_Oliver');
}

function goToDiningHall() {
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
          
          $("#user").prepend(data.val().name + ":");
  
       });
      }
  getName();
  </script> 

    <div id="replacementDiv" class="center">
        <div class="wrapper">
            <img style="width: 18%; float:left;" src="mia.png" alt="Mia">
            <div class="textbox_border" style="background: rgb(170, 16, 222);">
                <span class="nametag" style="background: rgb(170, 16, 222);">MIA:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"Grady and I tried to go see jonna."</p>
                </div>
            </div>
        </div>
  
        <div class="wrapper">
          <img style="width: 18%; float:left;" src="me.png" alt="me">
          <div class="textbox_border" style="background: rgb(17, 63, 171);">
            <span  id = "user" class="nametag" style="background: rgb(17, 63, 171);"></span> 
              <div  class="textbox_text">
                <p style=" margin: 15px; text-align: left;">"How is she?"</p>
              </div>
          </div>
        </div>      
  
        <div class="wrapper">
            <img style="width: 18%; float:left;" src="grady.png" alt="Grady">
            <div class="textbox_border" style="background: rgb(245, 197, 7);">
                <span class="nametag" style="background: rgb(245, 197, 7);">Grady:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"we could not find her"</p>
                </div>
            </div>
        </div>

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="riley.png" alt="Riley">
            <div class="textbox_border" style="background: rgb(255, 0, 4);">
                <span  class="nametag" style="background: rgb(255, 0, 4);">Riley:</span> 
                <div  class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"she is dead...duhhhhhh."</p>
                </div>
            </div>
        </div>      
  
        <button class="nextButton" onclick="next1()">Next</button>
  
        <br>
        <br>
    </div>
    `);
}

function next1() {
    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">
        <p>Noah walks over.</p>
        <div class="wrapper">
            <img style="width: 18%; float:left;" src="noah.png" alt="Noah">
            <div class="textbox_border" style="background: gray;">
                <span class="nametag" style="background: gray;">Noah:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"Her dad came and got her this morning."</p>
                </div>
            </div>
        </div>
        <button class="nextButton" onclick="next2()">Next</button>
    </div>
    `);
}

function next2() {
    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <script>
  
    function getName() {
      playersRef.orderByChild("email").equalTo(Cookies.get("Email")).on("child_added", function(data) {
          
          $("span:last").prepend(data.val().name + ":");
  
       });
      }
  getName();
  </script> 
    <div id="replacementDiv" class="center">
        <p>As soon as Noah leaves, everyone starts whispering.</p>
        <div class="wrapper">
            <img style="width: 18%; float:left;" src="grady.png" alt="Grady">
            <div class="textbox_border" style="background: rgb(245, 197, 7);">
                <span class="nametag" style="background: rgb(245, 197, 7);">Grady:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"She left this morning? We went looking for her last night"</p>
                </div>
            </div>
        </div>
        
        <div class="wrapper">
            <img style="width: 18%; float:left;" src="mia.png" alt="Mia">
            <div class="textbox_border" style="background: rgb(170, 16, 222);">
                <span class="nametag" style="background: rgb(170, 16, 222);">MIA:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"something is off"</p>
                </div>
            </div>
        </div>

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="me.png" alt="me">
            <div class="textbox_border" style="background: rgb(17, 63, 171);">
                <span  class="nametag" style="background: rgb(17, 63, 171);"> </span> 
                <div  class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"I saw slime last night. Maybe a snake got her and the counselors don't want to freak us out!"</p>
                </div>
            </div>
        </div>      

        <button class="nextButton" onclick="next3()">Next</button>
    </div>
    `);
}

function next3() {
    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <script>
  
    function getName() {
      playersRef.orderByChild("email").equalTo(Cookies.get("Email")).on("child_added", function(data) {
          
          $("span:first").prepend(data.val().name + ":");
  
       });
      }
  getName();
  </script> 
    <div id="replacementDiv" class="center">
        <div class="wrapper">
            <img style="width: 18%; float:left;" src="me.png" alt="me">
            <div class="textbox_border" style="background: rgb(17, 63, 171);">
                <span class="nametag" style="background: rgb(17, 63, 171);"> </span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"I think we should look into the snakes."</p>
                </div>
            </div>
        </div>      

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="oliver.png" alt="Oliver">
            <div class="textbox_border" style="background: rgb(4, 138, 71);">
                <span class="nametag" style="background: rgb(4, 138, 71);">Oliver:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"Let's go check the lake for snakes."</p>
                </div>
            </div>
        </div>

        <p>Ellie walks over.</p>
        
        <div class="wrapper">
            <img style="width: 18%; float:left;" src="ellie.png" alt="Ellie">
            <div class="textbox_border" style="background: rgb(30, 122, 125);">
                <span class="nametag" style="background: rgb(30, 122, 125);">Ellie:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"I have a book on snakes in my cabin"</p>
                </div>
            </div>
        </div>
        
        <button id="goWith_Oliver" class="choiceButton" onclick="friendAlertOliver()">Go with Oliver to the lake</button>
        <button id="goWith_Ellie" class="choiceButton" onclick="friendAlertEllie()">Go with Ellie to her cabin</button>
        <button id="goWithEllie2" class="nextButton" onclick="friendEllie()">"Ellie"</button>
        <button id="goWithOliver2" class="nextButton" onclick="friendOliver()">"Oliver"</button>
 
    </div>
    `);
}


function miaAsks() {
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
    <div id="backgroundImgDiv" class="center">
        <p>You and Oliver are about to head to the lake.</p>

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="mia.png" alt="Mia">
            <div class="textbox_border" style="background: rgb(170, 16, 222);">
                <span class="nametag" style="background: rgb(170, 16, 222);">MIA:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"Can I come?"</p>
                </div>
            </div>
        </div>

        <p>Choose what to say:</p>
        <button class="choiceButton" onclick="yesAthleticKid()">"Of course!"</button>
        <br><br>
        <button class="choiceButton" onclick="noAthleticKid()">"It will be quicker with less people."</button>
    </div>
    `);

}


function yesAthleticKid() {
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
    <div id="replacementDiv" class="center">
        <p>The three of you start walking to the lake.</p>
        <p>Choose what to do on the way:</p>
        <button class="choiceButton" onclick="talkToMia()">Talk to MIA</button>
        <br><br>
        <button class="choiceButton" onclick="arriveAtLakes()">Walk in silence for fear of snakes</button>
    </div>
    `);
}

function talkToMia() {
    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`

    <script>
  
    function getName() {
      playersRef.orderByChild("email").equalTo(Cookies.get("Email")).on("child_added", function(data) {
          
          $("span:first").prepend(data.val().name + ":");
  
       });
      }
  getName();
  </script>

    <div id="replacementDiv" class="center">
        <div class="wrapper">
            <img style="width: 18%; float:left;" src="me.png" alt="me">
            <div class="textbox_border" style="background: rgb(17, 63, 171);">
                <span class="nametag" style="background: rgb(17, 63, 171);"></span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"So I heard you like sports. What's your favorite one to play?"</p>
                </div>
            </div>
        </div>
        
        <div class="wrapper">
            <img style="width: 18%; float:left;" src="mia.png" alt="Mia">
            <div class="textbox_border" style="background: rgb(170, 16, 222);">
                <span class="nametag" style="background: rgb(170, 16, 222);">MIA:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"Soccer! It's my favorite to play and watch. Do you like watching soccer too?"</p>
                </div>
            </div>
        </div>

        <p id="MiaChoiceLabel">Choose what to say:</p>
        <button id="yesSoccer" class="choiceButton" onclick="friendAlertMia()">"Yes!"</button>
        <br><br>
        <button id="noSoccer" class="choiceButton" onclick="arriveAtLakes()">"I'm more of a lacrosse person."</button>

        <button class="nextButton" onclick="friendMia()">"Next"</button>
    </div>
    `);
}


function noAthleticKid() {
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
      </div> 
    `);

    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <script>
  
    function getName() {
      playersRef.orderByChild("email").equalTo(Cookies.get("Email")).on("child_added", function(data) {
          
          $("span:first").prepend(data.val().name + ":");
  
       });
      }
  getName();
  </script>
    <div id="replacementDiv" class="center">
        <p>You and Oliver start walking to the lake.</p>

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="me.png" alt="me">
            <div class="textbox_border" style="background: rgb(17, 63, 171);">
                <span class="nametag" style="background: rgb(17, 63, 171);"></span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"We should prolly be quiet just in case there are snakes around."</p>
                </div>
            </div>
        </div>     

        <button class="nextButton" onclick="arriveAtLakes()">Next</button>
    </div>
    `);

}

function arriveAtLakes() {
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="lake.png" alt="lake" width="35%">
      </div> 
    `);

    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`

    <script>
  
    function getName() {
      playersRef.orderByChild("email").equalTo(Cookies.get("Email")).on("child_added", function(data) {
          
          $("span:last").prepend(data.val().name + ":");
  
       });
      }
  getName();
  </script>

    <div id="replacementDiv" class="center">
        <p>You arrive at the lake.</p>

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="oliver.png" alt="Oliver">
            <div class="textbox_border" style="background: rgb(4, 138, 71);">
                <span class="nametag" style="background: rgb(4, 138, 71);">Oliver:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"do yall see that? it is a lot of slime!"</p>
                </div>
            </div>
        </div>

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="me.png" alt="me">
            <div class="textbox_border" style="background: rgb(17, 63, 171);">
                <span class="nametag" style="background: rgb(17, 63, 171);"></span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"OK there are definitely snakes here. Let's go back!"</p>
                </div>
            </div>
        </div>

        <button class="nextButton" onclick="returnToDiningHall()">Next</button>
    </div>
    `);
}

function goWithEllie() {
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="girlCabin.png" alt="girl cabin" width="35%" class="center">
        
        <div id="bunnyRemoveID" class="object_container">
            <button class="bunny_button" width="50%" onclick="bunnyIsClicked()">Click me</button> 
            <button class="nextButton" onclick="respondToBrittney()">"Next"</button>
        </div>

        <div id="bookHideID" class="object_container">
           <button class="book_button" width="50%" onclick="bookIsClicked()">Click me</button> 
        </div>

        <button class="nextButton" onclick="friendBrittney()">"Next"</button>
      </div> 
    `);

    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">
    </div>
    `);
}

function bunnyIsClicked() {
    $('#bunnyRemoveID').remove();
    $('#bookHideID').hide();
    $('#bunnyIsClickedDiv').slideToggle("slow"); 
}

function bookIsClicked() {
    $('#bookIsClickedDiv').slideToggle("slow"); 
}

function bunnyResponse() {
    $('#bunnyIsClickedDiv').hide();
    $('#respondToBrittney').slideToggle("slow");
}

function friendAlertBrittney() {
    $('#respondToBrittney').hide();
    $('#friendAlertBrittney').slideToggle("slow");
    updateachievements('befriend_Brittney')

}

function chill() {
    $('#respondToBrittney').hide();
    $('#bookHideID').show();
}

function putBunnyDown() {
    $('#bunnyIsClickedDiv').hide();
    $('#bookHideID').show();
}

function dismissBrittneyAlert() {
    $('#friendAlertBrittney').hide();
    $('#bookHideID').show();
}

function keepInspecting() {
    $('#bookIsClickedDiv').hide();
}

function returnToDiningHall() {
    $('#bookIsClickedDiv').hide();
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="trailToDining.png" alt="trail back to dining hall" width="35%">
      </div> 
    `);

    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <script>
  
    function getName() {
      playersRef.orderByChild("email").equalTo(Cookies.get("Email")).on("child_added", function(data) {
          
          $("span:first").prepend(data.val().name + ":");
  
       });
      }
  getName();
  </script>
    <div id="replacementDiv" class="center">
        <p>You are walking back to the dining hall, but something seems off...</p>

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="me.png" alt="me">
            <div class="textbox_border" style="background: rgb(17, 63, 171);">
                <span class="nametag" style="background: rgb(17, 63, 171);"></span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"I feel like we're being watched..."</p>
                </div>
            </div>
        </div>     

        <button class="nextButton" onclick="arriveAtDiningHall()">Next</button>
    </div>
    `);
}

function arriveAtDiningHall() {
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="diningRoomSlime.png" alt="dining hall slime" width="35%">
        //CHANGE
      </div> 
    `);

    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">
        <p>everyone is crowded around the dining room door</p>

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="grady.png" alt="Grady">
            <div class="textbox_border" style="background: rgb(245, 197, 7);">
                <span class="nametag" style="background: rgb(245, 197, 7);">Grady</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"There is slime everywhere!"</p>
                </div>
            </div>
        </div>

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="riley.png" alt="Riley">
            <div class="textbox_border" style="background: rgb(255, 0, 4);">
                <span  class="nametag" style="background: rgb(255, 0, 4);">Riley</span> 
                <div  class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"geez!"</p>
                </div>
            </div>
        </div>      

        <p>Choose what to do:</p>
        <button class="choiceButton" onclick="panic()">Freak out!</button>
        <button class="choiceButton" onclick="panic()">PANIC PANIC PANIC X3!</button>
    </div>
    `);
}

function panic() {
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="diningRoomSlime.png" alt="dining hall slime" width="35%">
      </div> 
    `);

    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">
        <p>Everyone starts to panic!!!!!!!!</p>

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="ellie.png" alt="Ellie">
            <div class="textbox_border" style="background: rgb(30, 122, 125);">
                <span class="nametag" style="background: rgb(30, 122, 125);">Ellie:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"We need to get Sarah or Noah!"</p>
                </div>
            </div>
        </div>

        <button class="nextButton" onclick="needCounselor()">Next</button>
    </div>
    `);
}

function needCounselor() {
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="diningRoomSlime.png" alt=dining hall slime" width="35%">
      </div> 
    `);

    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="noah.png" alt="Noah">
            <div class="textbox_border" style="background: gray;">
                <span class="nametag" style="background: gray;">Noah:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"I just heard my name!"</p>
                </div>
            </div>
        </div>

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="grady.png" alt="Grady">
            <div class="textbox_border" style="background: rgb(245, 197, 7);">
                <span class="nametag" style="background: rgb(245, 197, 7);">Grady:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"there is slime all over dining hall"</p>
                </div>
            </div>
        </div>

        <button class="nextButton" onclick="raccoon()">Next</button>
    </div>
    `);
}

function raccoon() {
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="diningRoomSlime.png" alt="dining hall slime" width="35%">
      </div> 
    `);

    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="noah.png" alt="Noah">
            <div class="textbox_border" style="background: gray;">
                <span class="nametag" style="background: gray;">Noah:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"I didn't notice...must be a prank."</p>
                </div>
            </div>
        </div>

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="grady.png" alt="Grady">
            <div class="textbox_border" style="background: rgb(245, 197, 7);">
                <span class="nametag" style="background: rgb(245, 197, 7);">Grady:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"What kind of prank--"</p>
                </div>
            </div>
        </div>

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="noah.png" alt="Noah">
            <div class="textbox_border" style="background: gray;">
                <span class="nametag" style="background: gray;">Noah:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">*cuts Grady off*<br>"ANYWAYS! I've got some news. It looks like the bridge to camp collapsed. No one can get in or out of the camp right now. But don't worry! We have people working on fixing it, and you'll be able to leave camp at the end of the week as scheduled!" Now off to the cabins, everyone!</p>
                </div>
            </div>
        </div>

        <button class="choiceButton" onclick="endOfDay3()">END OF DAY 3</button>
    </div>
    `);
}

function friendBrittney(){
    $('#friendAlertBrittney').slideToggle("slow"); 
    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
        <div id="replacementDiv" class="center">
        <p>Congratulations! You've befriended Brittney!</p>
        <script>
            updateachievements('befriend_brittney');
        </script>
        <button class="nextButton" onclick="dismissBrittneyAlert()">Dismiss</button>
        <button id="leave" class="nextButton" onclick ="arriveAtLakes()">Leave</button>
    `);
    $('#friendAlertBrittney').hide();
}

function friendMia(){
    $('#friendAlertMia').slideToggle("slow"); 
    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
        <div id="replacementDiv" class="center">
        <p>Congratulations! You've befriended Mia!</p>
        <script>
            updateachievements('befriend_mia');
        </script>
        <button class="nextButton" onclick="dismissMiaAlert()">Dismiss</button>
    `);
    $('#friendAlertMia').hide();
}
function respondToBrittney (){
    $('#bunnyResponse').slideToggle("slow"); 
    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <div id="respondToBrittney">
    <p>Choose what to say</p>
    <button class="fitContentChoiceButton" onclick="friendBrittney()">"It's so cute, I have one just like it!"</button>
    <br><br>
    <button class="fitContentChoiceButton" onclick="chill()">"Chilllax"</button>
</div>
`);
}

function friendEllie(){
    $('#friendAlertEllie').slideToggle("slow"); 
    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <div id="friendAlertEllie">
    <p>Congratulations! You've befriended Ellie!</p>
    <script>

    updateachievements('befriend_Ellie');

    </script>
    <button class="nextButton" onclick="goWithEllie()">Continue</button>
</div>
`);
hideButton('goWithOliver2');
hideButton('goWithEllie2');
}

function friendOliver (){
    $('#friendAlertOliver').slideToggle("slow"); 
    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <div id="friendAlertOliver">
    <p>Congratulations! You've befriended Oliver!</p>
    <script>
    updateachievements('befriend_Oliver');
    </script>
    <button class="nextButton" onclick="dismissOliverAlert()">Dismiss</button>
    </div>
`);
hideButton('goWithOliver2');
hideButton('goWithEllie2');
}

function hideButton(elt_id) {
    let id = '#' + elt_id
    $(id).hide();
}

function endOfDay3() {
    updateachievements('day3')
    window.location.href = "achievements3.html"
  }