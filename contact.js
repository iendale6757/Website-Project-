
function Code(){
   let firstName = document.getElementById('fname').value; 
   let lastName = document.getElementById('lname').value;
   let choice = document.getElementById('rateing').value;
   let Name = firstName + " " + lastName;
     if(choice === 'one' && firstName !== " " && lastName !== " "){
        alert("Hi " + Name + "; thank you for filling out our survey. I see you gave us a " + choice + ". We will definitely try to improve our website");      
     } 
     else if(choice === 'two' && firstName !== " " && lastName !== " "){
        alert("Hi " + Name + "; thank you for filling out our survey. I see you gave us a " + choice + ". We will definitely try to improve our website"); 
     }
     else if(choice === 'three' && firstName !== " " && lastName !== " "){
        alert("Hi " + Name + "; thank you for filling out our survey. I see you gave us a " + choice + ". We will definitely try to improve our website"); 
     }
     else if(choice === 'four' && firstName !== " " && lastName !== " "){
        alert("Hi " + Name + "; thank you for filling out our survey. I see you gave us a " + choice + ". Thank you so much for your positive feedback"); 
     } 
     else if(choice === 'five' && firstName !== " " && lastName !== " "){
        alert("Hi " + Name + "; thank you for filling out our survey. I see you gave us a " + choice + ". Thank you so much for your positive feedback"); 
     }
     else if (firstName === " " && lastName === " "){
        alert("Please fill in both your first and last name");
     }
     else if (firstName === " "){
        alert("Please fill in your first name");
     }
     else if (lastName === " "){
        alert("Please fill in your last name")
     }        
};

function reset(){
   document.location.href = " ";
}