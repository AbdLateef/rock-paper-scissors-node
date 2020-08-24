<template>
    <div>
        <div class="head">
            <div class="eye">
                <div class="eye-ball">
                    <div class="eye-inner-ball"></div>
                    <div class="eye-inner-black"></div>
                </div>
            </div>
            <div class="beak-upper"></div>
            <div class="beak-lower"></div>
            <div class="face"></div>
        </div>
        <div class="back-wing">
            <div class="tail-right"></div>
            <div class="tail-left"></div>
        </div>
        <div class="body">
            <div class="front-wing">
                <div class="front-wing-left"></div>
                <div class="front-wing-right"></div>
            </div>
            <div class="left-hand"></div>
        </div>
        <div class="right-hand">
            <i class='fas fa-hand-paper' style='font-size:60px;color:#71d4ed; transform: rotate(70deg); display: none'></i>
            <i class='fas fa-hand-rock' style='font-size:60px;color:#71d4ed; transform: rotate(70deg); display: none'></i>
            <i class='fas fa-hand-scissors' style='font-size:60px;color:#71d4ed; transform: scaleX(-1); display: none'></i>
        </div>
        <div class="left-foot"></div>
        <div class="right-foot"></div>
    </div>
</template>
 
<script>
module.exports = {
    data: function() {
        return {}
    }
}
</script>
 
<style>
    .head{
        border: #000 1px solid;
        border-color:#000 #000 transparent;
        width: 150px;
        height: 150px;
        border-radius: 100px;
        background: #108ace;
        position: absolute;
        z-index: 2;
        animation: head-move 3.3s infinite alternate ease-in-out;
        -webkit-animation: head-move 3.3s infinite alternate ease-in-out;        
        transform-origin: bottom;
        -webkit-transform-origin: bottom;
        -webkit-transform:scale(0) translateZ(0);
        transform:scale(0) translateZ(0);
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
      }

      .beak-upper{
        width: 29px;
        height: 28px;
        background: #eedf11;
        z-index: 6;
        margin: 55% 85%;
        position: absolute;
        border: black solid 1px;
        border-radius: 44px 100px 70px 90px;
        transform: rotate(30deg)
      }

      .beak-lower{
        width: 22px;
        height: 20px;
        background: #eedf11;
        z-index: 5;
        margin: 64% 85%;
        position: absolute;
        border: black solid 1px;
        border-radius: 44px 100px 70px 90px;
        transform: rotate(-10deg);
      }

      .face{
        margin: 30% 70%;
        padding: 37px 22px;
        background: linear-gradient(-144deg, #108ace 16px, transparent 0), linear-gradient(140deg, #108ace 16px, transparent 0), linear-gradient(20deg, #108ace 16px, transparent 0), linear-gradient(40deg, #108ace 16px, transparent 0);
        background-color: #71d4ed;
        background-position: left top, left top, left bottom, left bottom;
        background-repeat: repeat-x;
        background-size: 22px 22px, 22px 22px;
        z-index: 3;
        width: 45px;
        border-bottom-right-radius: 50px;
        border-top-right-radius: 50px;
      }

      .eye{
        width: 94px;
        height: 90px;
        background: #fff;
        z-index: 4;
        margin: 34% 23%;
        position: absolute;
        border-radius: 100px 120px 75px 100px;
        transform: rotate(-25deg);
      }

      .eye-ball{
        width: 25px;
        height: 35px;
        background: rgb(5, 87, 148);
        margin: 36% 45%;
        position: absolute;
        border-radius: 100px 100px 100px 100px;
      }

      .eye-inner-ball{
        width: 8px;
        height: 10px;
        background: #fff;
        margin: 19% 44%;
        z-index: 11;
        position: absolute;
        border-radius: 100px 100px 100px 100px;
      }
      
      .eye-inner-black{
        width: 10px;
        height: 20px;
        background: rgb(4, 9, 24);
        margin: 25% 25%;
        position: absolute;
        z-index: 10;
        border-radius: 100px 100px 100px 100px;
      }

      .body{
        border: solid 1px #000;
        width: 135px;
        height: 136px;
        border-radius: 100px;
        background: #71d4ed;
        position: absolute;
        margin-top: 100px;
        z-index: 1;
        
        /* width: 150px;
        height: 150px;
        border-radius: 100px;
        background: #108ace;
        position: absolute; */
        
        /* animation:grow 0.7s 0.4s 1 ease, music-move 1s 3.3s infinite alternate ease-in-out;
        -webkit-animation:grow 0.7s 0.4s 1 ease, music-move 1s 3.3s infinite alternate ease-in-out; */
      
        
        /* transform-origin: bottom;
        -webkit-transform-origin: bottom;
        -webkit-transform:scale(0) translateZ(0);
        transform:scale(0) translateZ(0);
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards; */
      }

      .front-wing{
        width: 150px;
        height: 60px;
        position: absolute;
        margin-top: 20px;
        z-index: 1;
      }

      .front-wing-left{
        width: 88px;
        height: 70px;
        background: #108ace;
        border-radius: 100px;
        transform: rotate(60deg);
        margin-left: 15px;
        position: absolute;
        margin-top: -5px;
      }

      .front-wing-right{
        width: 70px;
        height: 60px;
        background: #108ace;
        border-radius: 100px;
        transform: rotate(25deg);
        margin-left: 85px;
        position: absolute;
        margin-top: -5px;
      }

      .left-hand{
        background: #71d4ed;
        width: 40px;
        height: 65px;
        border: solid 0.7px #000;
        border-color: transparent #000 #000;
        border-radius: 50%/40px 40px;
        margin-top: 58px;
        margin-left: 10px;
        transform: rotate(9deg);
      }

      .right-hand{
        margin-left: 148px;
        margin-top: 128px;
        position: absolute;
      }

      .back-wing{
        width: 90px;
        height: 65px;
        background: #108ace;
        border-radius: 100px;
        transform: rotate(-44deg);
        margin-left: -26px;
        position: absolute;
        margin-top: 127px;  
      }

      .tail-left{
        width: 25px;
        height: 45px;
        background: #108ace;
        border-radius: 100px;
        margin-left: 20px;
        position: absolute;
        margin-top: -29px;
      }

      .tail-right{
        width: 15px;
        height: 25px;
        background: #108ace;
        border-radius: 100px;
        margin-left: 44px;
        position: absolute;
        margin-top: -17px;
      }

      .right-foot{
        width: 70px;
        height: 35px;
        background: #eedf11;
        border-radius: 100px 100px 250% 100px;
        margin-left: 20px;
        position: absolute;
        margin-top: 220px;
        border: solid 0.7px #000;
        transform: rotate(40deg);
      }

      .left-foot{
        width: 67px;
        height: 32px;
        background: #eedf11;
        border-radius: 100px 100px 250% 100px;
        margin-left: 70px;
        position: absolute;
        margin-top: 200px;
        border: solid 0.7px #000;
        transform: rotate(30deg);
      }
        
    @keyframes grow
    {
        0% {  
        position:absolute;
        -webkit-transform: scale(0) translateZ(0);
        transform: scale(0) translateZ(0);
        }
        60% {  
        -webkit-transform: scale(1.15) translateZ(0);
        transform: scale(1.15) translateZ(0);
        }
        80% {  
        -webkit-transform: scale(0.95) translateZ(0);
        transform: scale(0.95) translateZ(0);
        }
        100% {
        -webkit-transform: scale(1) translateZ(0);
        transform: scale(1) translateZ(0);
        }
    }

    @-webkit-keyframes grow /* Safari and Chrome */
    {
        0% {  
        position:absolute;
        -webkit-transform: scale(0) translateZ(0);
        transform: scale(0) translateZ(0);
        }
        60% {  
        -webkit-transform: scale(1.15) translateZ(0);
        transform: scale(1.15) translateZ(0);
        }
        80% {  
        -webkit-transform: scale(0.95) translateZ(0);
        transform: scale(0.95) translateZ(0);
        }
        100% {
        -webkit-transform: scale(1) translateZ(0);
        transform: scale(1) translateZ(0);
        }
    }

    @keyframes body-enter
    {
        0% { 
        -webkit-transform: translateY(200px) translateZ(0);
        transform: translateY(200px) translateZ(0);
        }
        60% {  
        -webkit-transform: translateY(-20px) translateZ(0);
        transform: translateY(-20px) translateZ(0);
        }
        80% {  
        -webkit-transform: translateY(30px) translateZ(0);
        transform: translateY(30px) translateZ(0);
        }
        100% {  
        -webkit-transform: translateY(0px) translateZ(0);
        transform: translateY(0px) translateZ(0);
        }
    }

    @-webkit-keyframes body-enter /* Safari and Chrome */
    {
        0% { 
        -webkit-transform: translateY(200px) translateZ(0);
        transform: translateY(200px) translateZ(0);
        }
        60% {  
        -webkit-transform: translateY(-20px) translateZ(0);
        transform: translateY(-20px) translateZ(0);
        }
        80% {  
        -webkit-transform: translateY(30px) translateZ(0);
        transform: translateY(30px) translateZ(0);
        }
        100% {  
        -webkit-transform: translateY(0px) translateZ(0);
        transform: translateY(0px) translateZ(0);
        }
    }

    @keyframes head-move
    {
        0% { 
        -webkit-transform: rotate(0deg) translateZ(0);
        transform: rotate(0deg) translateZ(0);
        } 
        33% {  
        -webkit-transform: rotate(-5deg) translateZ(0);
        transform: rotate(-5deg) translateZ(0);
        }
        66% {  
        -webkit-transform: rotate(5deg) translateZ(0);
        transform: rotate(5deg) translateZ(0);
        }
        100% {  
        -webkit-transform: rotate(0deg) translateZ(0);
        transform: rotate(0deg) translateZ(0);
        }
    }

    @-webkit-keyframes head-move /* Safari and Chrome */
    {
        0% { 
        -webkit-transform: rotate(0deg) translateZ(0);
        transform: rotate(0deg) translateZ(0);
        }
        33% {  
        -webkit-transform: rotate(-5deg) translateZ(0);
        transform: rotate(-5deg) translateZ(0);
        }
        66% {  
        -webkit-transform: rotate(5deg) translateZ(0);
        transform: rotate(5deg) translateZ(0);
        }
        100% {  
        -webkit-transform: rotate(0deg) translateZ(0);
        transform: rotate(0deg) translateZ(0);
        }
    }

</style>