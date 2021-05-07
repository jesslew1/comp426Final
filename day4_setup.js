let stoppednoah = false;

let killedMonster = false;

function loadDay4() {
  const $backgroundImgDiv = $("#backgroundImgDiv");
  $backgroundImgDiv.replaceWith(`
    <div id="backgroundImgDiv">
      <img src="boyCabin.png" alt="boy cabin" width="35%" >
    </div>
  `);

  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">
        <p>Ellie and the other girls show up at the boy's cabin. </p>
        <div class="wrapper">
            <img style="width: 18%; float:left;" src="ellie.png" alt="ellie">
            <div class="textbox_border" style="background: rgb(30, 122, 125);">
                <span class="nametag" style="background: rgb(30, 122, 125);">Ellie</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"i did not hear the bridge collapse"</p>
                </div>
            </div>
        </div>
        <br>
        <button class="choiceButton" onclick="next0()">Next</button>
    </div>
  `);


}

function next0() {


  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`

  <div id="replacementDiv" class="center">
      
  
  <div class="wrapper">
  <img style="width: 18%; float:left;" src="Brittney.png" alt="Brittney">
  <div class="textbox_border" style="background: rgb(255, 0, 212);">
    <span  class="nametag" style="background: rgb(255, 0, 212);">Brittney:</span> 
      <div  class="textbox_text">
        <p style=" margin: 15px; text-align: left;">"I wanna go home." (turns to Riley) "Let’s steal our phones back. My nanny will come get us if I can call home."</p>
      </div>
  </div>
</div>

<div class="wrapper">
  <img style="width: 18%; float:left;" src="riley.png" alt="riley">
  <div class="textbox_border" style="background: rgb(255, 0, 4);">
    <span  class="nametag" style="background: rgb(255, 0, 4);">Riley:</span> 
      <div  class="textbox_text">
        <p style=" margin: 15px; text-align: left;">"My time has come."</p>
      </div>
  </div>
</div>

<p>Everyone knows the phones are kept in the counselor's cabin</p>



  <h3>Which room should Riley investigate?</h3>
<button class="choiceButton" onclick="noahRoom()">noah's room</button>
<button class="choiceButton" onclick="SarahRoom()">Sarah's room</button> 
  

</div>

`); }
function SarahRoom() {


  const $backgroundImgDiv = $("#backgroundImgDiv");
  $backgroundImgDiv.replaceWith(`
    <div id="backgroundImgDiv">
      <img src="sarahNotes" alt="Sarah's notes" width="35%">
    </div> 
  `);


const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">
    
      <div class="wrapper">

        <div class="wrapper">
        <img style="width: 18%; float:left;" src="riley.png" alt="riley">
        <div class="textbox_border" style="background: rgb(255, 0, 4);">
          <span  class="nametag" style="background: rgb(255, 0, 4);">Riley:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"I found Sarah's notes while looking for our phones."</p>
            </div>
        </div>
      </div>
      <br>
      </div>


      <div class="wrapper">
      <img style="width: 18%; float:left;" src="oliver.png" alt="Oliver">
      <div class="textbox_border" style="background: rgb(4, 138, 71);">
        <span  class="nametag" style="background: rgb(4, 138, 71);">Oliver:</span> 
          <div  class="textbox_text">
            <p style=" margin: 15px; text-align: left;">"I don't like how this sounds. I'm calling home."</p>
          </div>
      </div>
    </div>

    <p> everyone grabs their phones and call for help.</p> 

    <button class="choiceButton" onclick="SarahNext0()">Next</button>

    </div>

    `); }

    function SarahNext0(){

      
      const $backgroundImgDiv = $("#backgroundImgDiv");
  $backgroundImgDiv.replaceWith(`
    <div id="backgroundImgDiv">
      <img src="sarahNotes.png" alt="Sarah's notes" width="35%">
    </div> 
  `);

const $replacementDiv = $("#replacementDiv");
$replacementDiv.replaceWith(`
  <div id="replacementDiv" class="center">

    <div class="wrapper">
    <img style="width: 18%; float:left;" src="Brittney.png" alt="Brittney">
    <div class="textbox_border" style="background: rgb(255, 0, 212);">
      <span  class="nametag" style="background: rgb(255, 0, 212);">Brittney:</span> 
        <div  class="textbox_text">
          <p style=" margin: 15px; text-align: left;">My calls aren't going through."</p>
        </div>
    </div>
  </div>

  

  <div class="wrapper">
  <img style="width: 18%; float:left;" src="mia.png" alt="mia">
  <div class="textbox_border" style="background: rgb(170, 16, 222);">
    <span  class="nametag" style="background: rgb(170, 16, 222);">mia:</span> 
      <div  class="textbox_text">
        <p style=" margin: 15px; text-align: left;">"Same."</p>
      </div>
  </div>
</div>

<p>None of the campers can make any calls.</p>

<button class="choiceButton" onclick="SarahNext1()">Next</button>
</div>



`); }

function SarahNext1(){


  
   
  const $backgroundImgDiv = $("#backgroundImgDiv");
  $backgroundImgDiv.replaceWith(`
    <div id="backgroundImgDiv">
      <img src="sarahNotes.png" alt="Sarah's notes" width="35%">
    </div> 
  `);
      
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">
  

<div class="wrapper">
  <img style="width: 18%; float:left;" src="grady.png" alt="Grady">
  <div class="textbox_border" style="background: rgb(245, 197, 7);">
    <span  class="nametag" style="background: rgb(245, 197, 7);">Grady:</span> 
      <div  class="textbox_text">
        <p style=" margin: 15px; text-align: left;">"fuck!!!!"</p>
      </div>
  </div>
</div>


  <div class="wrapper">
  <img style="width: 18%; float:left;" src="ellie.png" alt="ellie">
  <div class="textbox_border" style="background: rgb(30, 122, 125);">
  <span  class="nametag" style="background: rgb(30, 122, 125);">Ellie</span> 
      <div  class="textbox_text">
      <p style=" margin: 15px; text-align: left;">"There must be really bad reception up here. I bet there's a landline we could use."</p>
    </div>
</div>
</div>
<br>

<div class="wrapper">
<img style="width: 18%; float:left;" src="oliver.png" alt="Oliver">
<div class="textbox_border" style="background: rgb(4, 138, 71);">
<span  class="nametag" style="background: rgb(4, 138, 71);">Oliver</span> 
  <div  class="textbox_text">
    <p style=" margin: 15px; text-align: left;">"We should ask Sarah what's going on."</p>
  </div>
</div>
</div>

<button class="choiceButton" onclick="SarahNext2()">Next</button>

</div>


`); }

function SarahNext2(){

         
  const $backgroundImgDiv = $("#backgroundImgDiv");
  $backgroundImgDiv.replaceWith(`
    <div id="backgroundImgDiv">
      <img src="sarahNotes.png" alt="Sarah's notes" width="35%">
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
                <p style=" margin: 15px; text-align: left;">"One of you should go look for a landline. The other for Sarah."</p>
              </div>
          </div>
        </div>
      <br>


      <div class="wrapper">
      <img style="width: 18%; float:left;" src="ellie.png" alt="ellie">
      <div class="textbox_border" style="background: rgb(30, 122, 125);">
      <span  class="nametag" style="background: rgb(30, 122, 125);">Ellie:</span> 
          <div  class="textbox_text">
          <p style=" margin: 15px; text-align: left;">"Either way, destroy any wierd wood things we find."</p>
        </div>
    </div>
    </div>
    <br>

    <h3> Who should go look for the landline? </h3>
  
    <button class="choiceButton" onclick="EllieFind()">Ellie</button>
    <button class="choiceButton" onclick="OliverFind()">Oliver </button> 

      `); }


      function noahRoom() {


        const $backgroundImgDiv = $("#backgroundImgDiv");
        $backgroundImgDiv.replaceWith(`
          <div id="backgroundImgDiv">
            <img src="noahNotes.png" alt="noah's notes" width="35%">
          </div> 
        `);
      
      
      const $replacementDiv = $("#replacementDiv");
        $replacementDiv.replaceWith(`
          <div id="replacementDiv" class="center">
          
            <div class="wrapper">
      
              <div class="wrapper">
              <img style="width: 18%; float:left;" src="riley.png" alt="riley">
              <div class="textbox_border" style="background: rgb(255, 0, 4);">
                <span  class="nametag" style="background: rgb(255, 0, 4);">Riley:</span> 
                  <div  class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"I found our phones along with noah's notes. We need to get out of here."</p>
                  </div>
              </div>
            </div>
            <br>
            </div>
      
      
            <div class="wrapper">
            <img style="width: 18%; float:left;" src="oliver.png" alt="Oliver">
            <div class="textbox_border" style="background: rgb(4, 138, 71);">
              <span  class="nametag" style="background: rgb(4, 138, 71);">Oliver:</span> 
                <div  class="textbox_text">
                  <p style=" margin: 15px; text-align: left;">"This is scary!"</p>
                </div>
            </div>
          </div>
      
          <p> All campers grab their phones and dial for help.</p> 

          <button class="choiceButton" onclick="noahNext0()">Next</button>
      
          </div>
      
          `); }

      function noahNext0(){
          
      const $replacementDiv = $("#replacementDiv");
      $replacementDiv.replaceWith(`

      <div id="replacementDiv" class="center">
          <div class="wrapper">
          <img style="width: 18%; float:left;" src="Brittney.png" alt="Brittney">
          <div class="textbox_border" style="background: rgb(255, 0, 212);">
            <span  class="nametag" style="background: rgb(255, 0, 212);">Brittney:</span> 
              <div  class="textbox_text">
                <p style=" margin: 15px; text-align: left;">"My calls won't go through." </p>
              </div>
          </div>
        </div>
      
      
        <div class="wrapper">
        <img style="width: 18%; float:left;" src="mia.png" alt="mia">
        <div class="textbox_border" style="background: rgb(170, 16, 222);">
          <span  class="nametag" style="background: rgb(170, 16, 222);">mia:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"same."</p>
            </div>
        </div>
      </div>
      
      <p>No one can make any calls.</p>

<button class="choiceButton" onclick="noahNext1()">Next</button>
</div>



`); }

function noahNext1(){

    
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">
  
      
      <div class="wrapper">
        <img style="width: 18%; float:left;" src="grady.png" alt="Grady">
        <div class="textbox_border" style="background: rgb(245, 197, 7);">
          <span  class="nametag" style="background: rgb(245, 197, 7);">Grady:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"We're trapped!"</p>
            </div>
        </div>
      </div>
      
      
        <div class="wrapper">
        <img style="width: 18%; float:left;" src="ellie.png" alt="ellie">
        <div class="textbox_border" style="background: rgb(30, 122, 125);">
        <span  class="nametag" style="background: rgb(30, 122, 125);">Ellie:</span> 
            <div  class="textbox_text">
            <p style=" margin: 15px; text-align: left;">"There must be really bad reception up here. We have to go find a landline."</p>
          </div>
      </div>
      </div>
      <br>
      
      <div class="wrapper">
      <img style="width: 18%; float:left;" src="oliver.png" alt="Oliver">
      <div class="textbox_border" style="background: rgb(4, 138, 71);">
      <span  class="nametag" style="background: rgb(4, 138, 71);">Oliver:</span> 
        <div  class="textbox_text">
          <p style=" margin: 15px; text-align: left;">"We have to tell Sarah about noah's notes. She could help."</p>
        </div>
      </div>
      </div>
      
      <button class="choiceButton" onclick="noahNext2()">Next</button>

</div>


`); }

function noahNext2(){
      
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
                      <p style=" margin: 15px; text-align: left;">"We need to get to the bottom of this. One of you should go look for a landline. The other for Sarah."</p>
                    </div>
                </div>
              </div>
            <br>
      
      
            <div class="wrapper">
            <img style="width: 18%; float:left;" src="ellie.png" alt="ellie">
            <div class="textbox_border" style="background: rgb(30, 122, 125);">
            <span  class="nametag" style="background: rgb(30, 122, 125);">Ellie:</span> 
                <div  class="textbox_text">
                <p style=" margin: 15px; text-align: left;">"destroy any weird wood things"</p>
              </div>
          </div>
          </div>
          <br>
      
          <h3> Who should go look for the landline? </h3>
        
          <button class="choiceButton" onclick="EllieFind()">Ellie</button>
          <button class="choiceButton" onclick="OliverFind()">Oliver </button> 
      
            `); }



function EllieFind(){

  stoppednoah = true;

  const $replacementDiv = $("#replacementDiv");

  $replacementDiv.replaceWith(`

  <div id="replacementDiv" class="center">

  <p> Ellie searches for a landline and Oliver searches for Sarah</p>
  <br>

  <div class="wrapper">
  <img style="width: 18%; float:left;" src="mia.png" alt="mia">
  <div class="textbox_border" style="background: rgb(170, 16, 222);">
    <span  class="nametag" style="background: rgb(170, 16, 222);">mia:</span> 
      <div  class="textbox_text">
        <p style=" margin: 15px; text-align: left;">"I think someone should come confront noah with me."</p>
      </div>
  </div>
</div>


<div class="wrapper">
<img style="width: 18%; float:left;" src="grady.png" alt="Grady">
<div class="textbox_border" style="background: rgb(245, 197, 7);">
  <span  class="nametag" style="background: rgb(245, 197, 7);">Grady:</span> 
    <div  class="textbox_text">
      <p style=" margin: 15px; text-align: left;">"not me."</p>
    </div>
</div>
</div>


<div class="wrapper">
<img style="width: 18%; float:left;" src="riley.png" alt="riley">
<div class="textbox_border" style="background: rgb(255, 0, 4);">
  <span  class="nametag" style="background: rgb(255, 0, 4);">Riley:</span> 
    <div  class="textbox_text">
      <p style=" margin: 15px; text-align: left;">"I'll go. We need one more person....Hey you! You're coming with us."</p>
    </div>
</div>
</div>

<button class="nextButton" onclick="looknoahNext0()">Go look for noah</button>

  </div>
  `

  
  ); }

  
  function OliverFind(){

   stoppednoah = false;

    const $replacementDiv = $("#replacementDiv");
  
    $replacementDiv.replaceWith(`
  
    <div id="replacementDiv" class="center">
  
    <p> Oliver searches for a landline and Ellie searches for Sarah</p>
    <br>
  
    <div class="wrapper">
    <img style="width: 18%; float:left;" src="mia.png" alt="mia">
    <div class="textbox_border" style="background: rgb(170, 16, 222);">
      <span  class="nametag" style="background: rgb(170, 16, 222);">mia:</span> 
        <div  class="textbox_text">
          <p style=" margin: 15px; text-align: left;">"I think someone should come confront noah with me. "</p>
        </div>
    </div>
  </div>
  
  
  <div class="wrapper">
  <img style="width: 18%; float:left;" src="grady.png" alt="Grady">
  <div class="textbox_border" style="background: rgb(245, 197, 7);">
    <span  class="nametag" style="background: rgb(245, 197, 7);">Grady:</span> 
      <div  class="textbox_text">
        <p style=" margin: 15px; text-align: left;">"not me."</p>
      </div>
  </div>
  </div>
  
  
  <div class="wrapper">
  <img style="width: 18%; float:left;" src="riley.png" alt="riley">
  <div class="textbox_border" style="background: rgb(255, 0, 4);">
    <span  class="nametag" style="background: rgb(255, 0, 4);">Riley:</span> 
      <div  class="textbox_text">
        <p style=" margin: 15px; text-align: left;">"I'll go. We need one more person...Hey you! You're coming with us."</p>
      </div>
  </div>
  </div>
  
  <button class="nextButton" onclick="looknoahNext0()">Go look for noah</button>
  
    </div>
    `); }
  function looknoahNext0(){


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
  
    <p>Riley, mia, and you hear screaming from the lake.</p>
  
    <br>
  

    <div class="wrapper">
    <img style="width: 18%; float:left;" src="Brittney.png" alt="Brittney">
    <div class="textbox_border" style="background: rgb(255, 0, 212);">
      <span  class="nametag" style="background: rgb(255, 0, 212);">Brittney:</span> 
        <div  class="textbox_text">
          <p style=" margin: 15px; text-align: left;">"Help me! I'm tied up!"</p>
        </div>
    </div>
  </div>


  
<div class="wrapper">
<img style="width: 18%; float:left;" src="me.png" alt="me">

<div class="textbox_border" style="background: rgb(17, 63, 171);">
  <span  class="nametag" style="background: rgb(17, 63, 171);"></span> 
    <div  class="textbox_text">
      <p style=" margin: 15px; text-align: left;">"cmon!"</p>
    </div>
</div>
</div>
<br>

    <button class="nextButton" onclick="looknoahNext1()">Go to the lake</button>

    </div>
    `); }

    function looknoahNext1(){


      const $backgroundImgDiv = $("#backgroundImgDiv");
      $backgroundImgDiv.replaceWith(`
        <div id="backgroundImgDiv">
          <img src="shrine.png" alt="Shrine" width="35%">
        </div> 
      `);
    
  
      const $replacementDiv = $("#replacementDiv");
    
      $replacementDiv.replaceWith(`
    
      <div id="replacementDiv" class="center">

      <p>You all run into a group of wooden statutes in the middle of the lake...</p>
      <br>
    
      <div class="wrapper">
      <img style="width: 18%; float:left;" src="mia.png" alt="mia">
      <div class="textbox_border" style="background: rgb(170, 16, 222);">
        <span  class="nametag" style="background: rgb(170, 16, 222);">mia:</span> 
          <div  class="textbox_text">
            <p style=" margin: 15px; text-align: left;">"Statues... what do we do?"</p>
          </div>
      </div>
    </div>
  

    <div class="wrapper">
<img style="width: 18%; float:left;" src="riley.png" alt="bad annoyed">
<div class="textbox_border" style="background: rgb(255, 0, 4);">
  <span  class="nametag" style="background: rgb(255, 0, 4);">Riley:</span> 
    <div  class="textbox_text">
      <p style=" margin: 15px; text-align: left;">"shhhhhh...Someone is coming."</p>
    </div>
</div>
</div>

<button class="nextButton" onclick="noahAppears()">Next</button>
      </div>
      `); }

      function noahAppears(){


        const $backgroundImgDiv = $("#backgroundImgDiv");
        $backgroundImgDiv.replaceWith(`
          <div id="backgroundImgDiv">
            <img src="bigBertha_Riley.png" alt="Big Bertha gets Riley" width="35%">
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
  
        <p>something evil jumps out of the water and gets Riley. </p>
        <br>

        <p>noah appears in a boat on the lake and tells it to kill Riley.</p>
    

        <div class="wrapper">
          <img style="width: 18%; float:left;" src="noah.png" alt="noah">
          <div class="textbox_border" style="background: gray;">
            <span  class="nametag" style="background: gray;">noah:</span> 
              <div  class="textbox_text">
                <p style=" margin: 15px; text-align: left;">"jonna didn't go mising. The Bertha needed to eat. Brittney was going to be next, but I Riley has been so annoying so he will go first"</p>
              </div>
          </div>
        </div>
   
        <div class="wrapper">
        <img style="width: 18%; float:left;" src="mia.png" alt="mia">
        <div class="textbox_border" style="background: rgb(170, 16, 222);">
          <span  class="nametag" style="background: rgb(170, 16, 222);">mia:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"We have to do something!!"</p>
            </div>
        </div>
      </div>
  

      <img style="width: 18%; float:left;" src="me.png" alt="me">

      <div class="textbox_border" style="background: rgb(17, 63, 171);">
        <span  class="nametag" style="background: rgb(17, 63, 171);"></span> 
          <div  class="textbox_text">
            <p style=" margin: 15px; text-align: left;">"Maybe if we break a statue!"</p>
          </div>
      </div>

      <button class="nextButton" onclick="pickStatue()">Next</button>
      </div>
    </div>
  <br>


        `); }
        function pickStatue(){


          const $backgroundImgDiv = $("#backgroundImgDiv");
          $backgroundImgDiv.replaceWith(`
          <div id="backgroundImgDiv">
          <img src="shrine.png" alt="Shrine" width="35%">
        </div> 
          `);
        
      
          const $replacementDiv = $("#replacementDiv");
        
          $replacementDiv.replaceWith(` 
          <div id="replacementDiv" class="center">
  
        
         <p> Pick a statue to break! You only have time for one. </p>


           
         <button class="choiceButton" onclick="wrong()">Bear</button>
         <button class="choiceButton" onclick="wrong()">Eagle</button> 
           
         <button class="choiceButton" onclick="pickLion()">Lion</button>
         <button class="choiceButton" onclick="wrong()">Tiger</button> 

         </div>

          `); }
  

          function wrong(){
            const $backgroundImgDiv = $("#backgroundImgDiv");
            $backgroundImgDiv.replaceWith(`
            <div id="backgroundImgDiv">
            <img src="bigBertha_Riley.png" alt="Big Bertha gets Riley" width="35%">
          </div> 
            `);
          
        
            const $replacementDiv = $("#replacementDiv");
          
            $replacementDiv.replaceWith(`
          
            <div id="replacementDiv" class="center">
  
           <p> The monster was unaffected by the broken statue and Riley is swallowed. Bertha disappears back into the lake looking for Brittney.</p>
  
           <button class="nextButton" onclick="endScene()">Next</button>
  </div>
            `); }
          
  

            function pickLion(){
              const $backgroundImgDiv = $("#backgroundImgDiv");
              $backgroundImgDiv.replaceWith(`
              <div id="backgroundImgDiv">
              <img src="bigBertha.png" alt="big bertha" width="35%">
            </div> 
              `);
            
          
              const $replacementDiv = $("#replacementDiv");
            
              $replacementDiv.replaceWith(`
            
              <div id="replacementDiv" class="center">
             <p> The monster releases Riley and swims away forever along with its broken statue.</p>
    
             <button class="nextButton" onclick="endScene()">Next</button>
             </div>
              `); 
            }


   function endScene(){
   
                if(stoppednoah){
                const $backgroundImgDiv = $("#backgroundImgDiv");
                $backgroundImgDiv.replaceWith(`
                <div id="backgroundImgDiv">
                <img src="policeCar.png" alt="police car" width="35%">
              </div> 
                `);
              
            
                const $replacementDiv = $("#replacementDiv");
              
                $replacementDiv.replaceWith(`

                <div id="replacementDiv" class="center">
  
              
               <p>Ellie was able to find the landline and called the 911. The police showed up before Noah was able to escape. <br>
               noah is arrested. You and the remaining campers are rescued.</p>

               <button class = "choiceButton" onclick = "next()"> Congrats on Finishing! View Your Achievements Here </button>
               </div>

               </div>
  
                `);

                }

              else{

                const $backgroundImgDiv = $("#backgroundImgDiv");
                $backgroundImgDiv.replaceWith(`
                <div id="backgroundImgDiv">
                <img src="noah.png" alt="Counselor Evil" width="35%">
              </div> 
                `);
              
            
                const $replacementDiv = $("#replacementDiv");
              
                $replacementDiv.replaceWith(`

                <div id="replacementDiv" class="center">
  
              
               <p>Oliver was unable to find the landline, and nobody showed up to help. noah was able to escape without a trace. </p>

               <button class = "choiceButton" onclick = "next()"> Congrats on Finishing! View Your Achievements Here </button>
               </div>
  
                `);


              }
              }

              function next() {
                updateachievements('day4')
                window.location.href = "achievements4.html"
              }