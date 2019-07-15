
const request= require('request')
const geocode = (address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoiZ2FuYXBhdHJhbyIsImEiOiJjanZmNGxydTUwN2c2NDBwZ2lwaHc3cGw3In0.okpscTk2Kh4HnlWMBWQ2NA&limit=1'
    request({url:url,json:true},(error,Response)=>{
        if (error)
        {
            callback('unable to connect to location service',undefined)
        }
        else if (Response.body.features.length===0)
        {
            callback('error in the url provided',undefined)
        }
        else
        {
            callback(undefined,{
              longitude:  Response.body.features[0].center[0],
              latitude:Response.body.features[0].center[1],
              location:Response.body.features[0].place_name
            })
        }
       
    })
    } 
    
    
    
    module.exports=geocode