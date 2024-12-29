let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
  };
  
  let profileContainer = document.getElementById("profileContainer");
  profileContainer.classList.add("d-flex","flex-column","justify-content-center","text-center"); 
  let imgContainer = document.getElementById("imgContainer");
  let imgEl=document.createElement('img');
  imgEl.setAttribute("src",profileDetails.imgSrc);
  console.log(imgEl);
  imgContainer.appendChild(imgEl);
  let h1El=document.createElement('h1');
  h1El.textContent="RAHUL ATTULURI";
  h1El.classList.add("text-white","mt-2");
  profileContainer.appendChild(h1El);
  let pEl=document.createElement('p');
  pEl.textContent="Age:25";
  pEl.classList.add("text-white","pEl","mt-2");
  profileContainer.appendChild(pEl);