// const drum_w=document.querySelectorAll(".w");
// for(let drum of drum_w){
//     drum.addEventListener("click", function playSound(){
//         const clickSound=new Audio("https://files.codingninjas.in/tom-1-28537.mp3?_ga=2.22487165.716686490.1711041936-1683009870.1710759062");
//         clickSound.play();
//     });

// }

// const drum_a=document.querySelectorAll(".a");
// for(let drum of drum_a){
//     drum.addEventListener("click", function playSound(){
//         const clickSound=new Audio("https://files.codingninjas.in/tom-2-28541.mp3?_ga=2.18941950.716686490.1711041936-1683009870.1710759062");
//         clickSound.play();
//     });

// }

// const drum_s=document.querySelectorAll(".s");
// for(let drum of drum_s){
//     drum.addEventListener("click", function playSound(){
//         const clickSound=new Audio("https://files.codingninjas.in/tom-3-28542.mp3?_ga=2.61368298.716686490.1711041936-1683009870.1710759062");
//         clickSound.play();
//     })

// }

// const drum_d=document.querySelectorAll(".d");
// for(let drum of drum_d){
//     drum.addEventListener("click", function playSound(){
//         const clickSound=new Audio("https://files.codingninjas.in/tom-4-28543.mp3?_ga=2.22621181.716686490.1711041936-1683009870.1710759062");
//         clickSound.play();
//     })

// }

// const drum_j=document.querySelectorAll(".j");
// for(let drum of drum_j){
//     drum.addEventListener("click", function playSound(){
//         const clickSound=new Audio("https://files.codingninjas.in/snare-28545.mp3?_ga=2.94834522.716686490.1711041936-1683009870.1710759062");
//         clickSound.play();
//     })

// }

// const drum_k=document.querySelectorAll(".k");
// for(let drum of drum_k){
//     drum.addEventListener("click", function playSound(){
//         const clickSound=new Audio("https://files.codingninjas.in/crash-28546.mp3?_ga=2.34565351.716686490.1711041936-1683009870.1710759062");
//         clickSound.play();
//     })

// }

// const drum_l=document.querySelectorAll(".l");
// for(let drum of drum_l){
//     drum.addEventListener("click", function playSound(){
//         const clickSound=new Audio("https://files.codingninjas.in/kick-bass-28547.mp3?_ga=2.254158542.716686490.1711041936-1683009870.1710759062");
//         clickSound.play();
//     })

// }

// Function to play sound based on the class of the clicked drum button
function playSound(className) {
    // Map each drum button class to its corresponding sound URL
    const soundMap = {
      w: "https://files.codingninjas.in/tom-1-28537.mp3?_ga=2.22487165.716686490.1711041936-1683009870.1710759062",
      a: "https://files.codingninjas.in/tom-2-28541.mp3?_ga=2.18941950.716686490.1711041936-1683009870.1710759062",
      s: "https://files.codingninjas.in/tom-3-28542.mp3?_ga=2.61368298.716686490.1711041936-1683009870.1710759062",
      d: "https://files.codingninjas.in/tom-4-28543.mp3?_ga=2.22621181.716686490.1711041936-1683009870.1710759062",
      j: "https://files.codingninjas.in/snare-28545.mp3?_ga=2.94834522.716686490.1711041936-1683009870.1710759062",
      k: "https://files.codingninjas.in/crash-28546.mp3?_ga=2.34565351.716686490.1711041936-1683009870.1710759062",
      l: "https://files.codingninjas.in/kick-bass-28547.mp3?_ga=2.254158542.716686490.1711041936-1683009870.1710759062"
    };
  
    // Get the sound URL based on the class name
    const soundURL = soundMap[className];
  
    // Play the corresponding sound
    const clickSound = new Audio(soundURL);
    clickSound.play();
  }
  
  // Add click event listeners to all drum buttons
  const drumButtons = document.querySelectorAll(".drum");
  drumButtons.forEach(button => {
    button.addEventListener("click", function() {
      // Extract the drum class from the button's class list
      const drumClass = Array.from(button.classList).find(className => className !== "drum");
      // Play the sound corresponding to the drum class
      playSound(drumClass);
    });
  });
  