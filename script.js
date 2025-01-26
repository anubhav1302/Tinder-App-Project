//get the data
 let users = [
    {
        profilePic :"https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybCUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
        
        displayPic:"https://plus.unsplash.com/premium_photo-1673039393843-e0705c3482fa?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8",
        pendingMessage:4,
        location:"Delhi , India",
        name: "Harshita",
        age: 23,
        interests : [{
            icon : `<i class="ri-music-2-fill"></i>`,
            interest : "music"
        },  
        {
            icon :`<i class="ri-quill-pen-fill"></i>`,
            interest:"writing"
        }],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nisi.",
        isFriend:null,

    },
    {
        profilePic :"https://images.unsplash.com/photo-1598897516650-e4dc73d8e417?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybCUyMHBvcnRyYWl0fGVufDB8fDB8fHww",

        displayPic:"https://media.istockphoto.com/id/1444716830/photo/t-shirt-design-and-advertising-concept-style-and-fashion-caucasian-girl-with-long-dark-hair.webp?a=1&s=612x612&w=0&k=20&c=PaYICKuKb2bomHjPGygHVNDsYqh7NS9E1XI1hKbZJmw=",
        pendingMessage:3,
        location:"Bhopal , India",
        name: "Shivangi",
        age: 26,
        interests : [{
            icon : `<i class="ri-music-2-fill"></i>`,
            interest : "music"
        },  
        {
            icon :`<i class="ri-quill-pen-fill"></i>`,
            interest:"writing"
        }],
        bio: "Lorem ipsum dolor sit amet  elit. Eligendi, nisi.",
        isFriend:null,

    },
    {
        profilePic :"https://images.unsplash.com/photo-1612203304476-2ed23c55b5b9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybCUyMHBvcnRyYWl0fGVufDB8fDB8fHww",

        displayPic:"https://images.unsplash.com/photo-1620148876709-818e62824349?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        pendingMessage:14,
        location:"Banglore , India",
        name: "Nishi",
        age: 26,
        interests : [{
            icon : `<i class="ri-music-2-fill"></i>`,
            interest : "music"
        },  
        {
            icon :`<i class="ri-quill-pen-fill"></i>`,
            interest:"writing"
        }],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nisi.",
        isFriend:null

    },
    {
        profilePic :"https://images.unsplash.com/photo-1543096222-72de739f7917?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmwlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",

        displayPic:"https://images.unsplash.com/photo-1593359129100-9c51afc11c75?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",

        pendingMessage:7,
        location:"Delhi , India",
        name: "Avinya",
        age: 27,
        interests : [{
            icon : `<i class="ri-music-2-fill"></i>`,
            interest : "music"
        },  
        {
            icon :`<i class="ri-quill-pen-fill"></i>`,
            interest:"writing"
        }],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nisi.",
        isFriend:null

    }
    

 ];

let curr = 0;
let isAnimating = false;

function setData(index){
    document.querySelector(".prflimg img").src = users[index].profilePic;
    document.querySelector(".badge h5").textContent = users[index].pendingMessage;
    document.querySelector(".location h3").textContent = users[index].location;
    document.querySelector(".name h1:nth-child(1)").textContent = users[index].name;
    document.querySelector(".name h1:nth-child(2)").textContent = users[index].age;

    let clutter = "";

    users[index].interests.forEach(function(interest){
        clutter += ` <div class="flex text-2xl items-center bg-white/20 px-3 py-1 gap-3 rounded-full ">
                    ${interest.icon}
                    <h3 class="text-sm capitalize tracking-tight">${interest.interest}</h3>
                </div>`
    })
    document.querySelector(".tags").innerHTML=clutter;

    document.querySelector(".bio p").textContent = users[index].bio;
    index = 2;

}

 (function setInitial(){
    document.querySelector(".maincard img").src = users[curr].displayPic;
    document.querySelector(".incomingcard img").src = users[curr+1]?.displayPic;

    setData(curr)
    
    curr =2
 })();

 function imageChange(){
    if(!isAnimating){
        isAnimating =true;
        let tl  =gsap.timeline({
            
            onComplete:function(){
                isAnimating = false
                let main = document.querySelector(".maincard")
                let incoming = document.querySelector(".incomingcard")

                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingcard")

                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main, {
                    scale:1,
                    opacity:1
                })
                if( curr === users.length) curr=0;
                document.querySelector(".maincard img").src = users[curr].displayPic;
                curr++;
                    
                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");

            }
        });

        tl.to(".maincard",{
            scale: 1.1,
            opacity: 0,
            ease: Circ,
            duration: .9
        },"start")
        .from(".incomingcard",{
            scale: 0.9,
            opacity: 0,
            ease: Circ,
            duration: 1.1
        },"start")
    }
        
 }

 let deny = document.querySelector(".deny")
 let accept = document.querySelector(".accept")

 deny.addEventListener("click" ,function(){
    imageChange();
    setData(curr-1)
        
 gsap.from(".details .element", {
    y:"100%",
    opacity:0,
    stagger:.1,
    ease:Circ,
    duration:1
 })
     
 });
 accept.addEventListener("click" ,function(){
    imageChange();
    setData(curr-1)
        
 gsap.from(".details .element", {
    y:"100%",
    opacity:0,
    stagger:.1,
    ease:Circ,
    duration:1
 })
     
 });

 (function containerCreator(){
    document.querySelectorAll(".element")
    .forEach(function(element){
        let div=document.createElement("div")
        div.classList.add(`${element.classList[1]}container` ,'overflow-hidden')
        
        div.appendChild(element);
        document.querySelector(".details").appendChild(div)
    })
    
    
 })();



  



