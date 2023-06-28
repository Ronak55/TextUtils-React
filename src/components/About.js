// import React, {useState} from 'react'


// const About = () => {

//    const [myStyle, setmystyle] = useState({

//     color:"black", 
//     backgroundColor:"white"


//    })

//    const [btntext, setbtntext] = useState("Enable dark mode");



//    const togglestyle = ()=>{

//         if(myStyle.color == "black"){

//             setmystyle({
//                 color:"white", 
//                 backgroundColor:"black"
//             })

//             setbtntext("Enable Light Mode")
//         }

//         else{
            
//             setmystyle({color:"black", 
//             backgroundColor:"white"
//             })
//             setbtntext("Enable Dark Mode")
//         }

//    }


//   return (
//     <>
//     <div className = "container" style = {myStyle}>
//     <h1>About Us</h1>
//     <div class="accordion" id="accordionPanelsStayOpenExample">
//   <div class="accordion-item" style = {myStyle}>
//     <h2 class="accordion-header" id="panelsStayOpen-headingOne">
//       <button class="accordion-button" type="button" 
//       style = {myStyle}
//       data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
//         Accordion Item #1
//       </button>
//     </h2>
//     <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
//       <div class="accordion-body" style = {myStyle}>
//         <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//       </div>
//     </div>
//   </div>
//   <div class="accordion-item" style = {myStyle}>
//     <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
//       <button class="accordion-button collapsed" style = {myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
//         Accordion Item #2
//       </button>
//     </h2>
//     <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
//       <div class="accordion-body" style = {myStyle}>
//         <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//       </div>
//     </div>
//   </div>
//   <div class="accordion-item" style = {myStyle}>
//     <h2 class="accordion-header" id="panelsStayOpen-headingThree">
//       <button class="accordion-button collapsed" 
//       style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
//         Accordion Item #3
//       </button>
//     </h2>
//     <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
//       <div class="accordion-body" style = {myStyle}>
//         <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//       </div>
//     </div>
//   </div>
//   <div className = "container my-3">
//   <button onClick = {togglestyle} type = "button " class = "btn btn-primary">{btntext}</button>
//   </div>
//   </div>
// </div>
//     </>
//   )
// }

// export default About