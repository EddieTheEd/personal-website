
<style>
  /* silly portrait css */
  #portraitImage {
    width: 200px;
    height: 200px;
    border: 3px solid #3a3535;
    border-radius: 15px;
  }
  #caption {
    width: 200px;
  }
  #portrait {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 700px) {
    #portrait {
      float: right;
    }
    #portraitImage {
      width: 15vw !important;
      height: 15vw !important;
    }
    #caption {
      width: auto;
    }
  }
  
  #caption {
    text-align: center;
    margin: 1%;
    background-color: #2a2727;
    border-radius: 15px;
  }
</style>

<div id="portrait">
   <img src="/images/squareme.png" alt="portrait" id="portraitImage">
   <p id="caption">Hello :}</p>
</div>

<h3>Hi!</h3>

<p>My name is Edward. This is my website! :)</p>

