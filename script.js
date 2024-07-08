const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const logenBtn = document.getElementById('login');


registerBtn.addEventListener('click', ()=>{
    container.classList.add("active");
})


logenBtn.addEventListener('click', ()=>{
    container.classList.remove("active");
})








// var users = [
//     {
//         name: "ahmed",
//         age: 33,
//         gender: "male",
//         wife: {
//             name: "sara",
//             gender: "female",
//             sons: [
//                 {
//                     name: "maro",
//                     age: 15,
//                     gender: "male"
//                 },
//                 {
//                     name: "hima",
//                     age: 10,
//                     gender: "male"
//                 }
//             ]
//         }
//     },

//     {
//         name: "sayed",
//         age: 42,
//         gender: "male",
//         wife: {
//             name: "aya",
//             gender: "female",
//             sons: [
//                 {
//                     name: "mohammed",
//                     age: 15,
//                     gender: "male"
//                 },
//                 {
//                     name: "hend",
//                     age: 10,
//                     gender: "female"
//                 }
//             ]
//         }
//     },


//     {
//         name: "ibrahim",
//         age: 44,
//         gender: "male",
//         wife: {
//             name: "soso",
//             gender: "female",
//             sons: [
//                 {
//                     name: "alaa",
//                     age: 15,
//                     gender: "female",
//                 },
//                 {
//                     name: "hima",
//                     age: 10,
//                     gender: "male",
//                 }
//             ]
//         }
//     },
    
// ]


// for(var i = 0 ; i<users.length ; i++){
//     var userName = users[i].name;
//     var userWife = users[i].wife.name;
//     var sons = users[i].wife.sons;
    

//     for(var j = 0 ; j<sons.length ; j++){
//         var sonName = sons[j].name;
//         var sonGender = sons[j].gender;
//         console.log(`${userWife} : ${sonName} ${userName} : gender ${sonGender}`);
//     }

//     console.log("-----------------------")
// }