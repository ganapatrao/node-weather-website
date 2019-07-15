
const request= require('request')
const forecast = (latitude,longitude,callback)=>{
    const url='https://api.darksky.net/forecast/a5e0908a3c1cfd9ac08b9f641e5606c1/'+ latitude + ','+longitude +'?units=us'
    //const url='https://api.darksky.net/forecast/a5e0908a3c1cfd9ac08b9f641e5606c1/37.8267,-122.4233'
    request({url:url,json:true},(error,Response)=>{
       
        if (error)
    {
        callback('unable to connect to location service',undefined)
    }
     else if (Response.body.error)
    {
        callback("unable to find location",undefined)
    }
    else
    {
        callback(undefined, {
            temperature:Response.body.currently.temperature ,
            cloudcover: Response.body.currently.summary   
        }   )
    } 
    
    })
    
    // forecast('Goa',(error,data)=>{
        
    // console.log('error',error)
    // console.log('data',data)
    // })
}

    module.exports=forecast