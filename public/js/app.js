fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })

})

/*moved below on click */
/*
fetch('http://localhost:3000/weather?address=goa').then((response)=>{
    response.json().then((data)=>{
        //console.log(data)
        if (data.error)
        {
           console.log(data.error) 
        }
        else
        {
console.log(data)
        }
    })
})
*/

const weatherform =document.querySelector('form') // like the way select h1,p in css same way 
        //we are selecting form from index
const search=document.querySelector('input')

const messageone=document.querySelector('#message1')
const messagetwo=document.querySelector('#message2')


messageone.textContent="testing"
weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
     const location =search.value
    console.log(location)

    messageone.textContent='Loading..................'
    //messagetwo.textContent=''    

        fetch('http://localhost:3000/weather?address='+location).then((response)=>{
            response.json().then((data)=>{
                //console.log(data)
                if (data.error)
                {
                   messageone.textContent=data.error
              
               // console.log(data.error) 
                }
                else
                {
                   // messageone.textContent=data.temperature
                   messageone.textContent=data.cloudcover
                    messagetwo.textContent=data.temperature
                    
        //console.log(data)
                }
            })
        })

})