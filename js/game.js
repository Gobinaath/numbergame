var total=document.getElementById("total").innerHTML = 1000;
function startFunc() {
  if(total>=100 )
  {
   total= total-100;
   myFunction();
   document.getElementById("total").innerHTML=total;
  }
  if(total<100)
  {
    document.getElementById("start").style.display = "none";
    document.getElementById("gameover").innerHTML = "Game over";
  }
}

function myFunction() {
var first=Math.floor(Math.random() * 10);
var second=Math.floor(Math.random() * 10);
var third=Math.floor(Math.random() * 10);
var arr=[first,second,third];
document.getElementById("randomnumber").innerHTML =arr.join(" ");
var max=Math.max.apply(null, arr);
var min=Math.min.apply(null, arr);
  if(first != second && second != third && third != first)
  {
    /*All are even*/
    if(first%2 ==0 && second%2 ==0 && third%2 ==0)
    {
      total=total+300;
      document.getElementById("comment").innerHTML ="You have won 300 INR as all the numbers are Even";
    }
    /*All are odd*/
    else if(first%2 !=0 && second%2 !=0 && third%2 !=0)
    {
      total=total+300;
      document.getElementById("comment").innerHTML ="You have won 300 INR as all the numbers are odd";
    }
     /*sequence with difference of 1*/
      else if(max-min==2)
      {
       total=total+800;
       document.getElementById("comment").innerHTML ="You have won 800 INR as the numbers are in sequence";
      }
      /*Not lucky*/
     else
     {
      document.getElementById("comment").innerHTML ="You were not lucky this time";
      }

  }
  /*All are same*/
  else if(first == second && second == third && third == first)
  {
    total=total+1000
    document.getElementById("comment").innerHTML ="You have won 1000 INR as all the numbers are Same";
  }
  /*Not lucky*/
  else
  {
    document.getElementById("comment").innerHTML ="You were not lucky this time";
  }
  
}
