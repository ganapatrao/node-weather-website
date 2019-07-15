const express = require ('express')

const app = express()
const path =require('path')
const hbs=require('hbs')

//console.log(__dirname)
//console.log("path is"+ path.join(__dirname,'../templates/views') )

//console.log(path.join(__dirname,'../public'))
//console.log(__dirname)
//console.log(__filename)


const port =process.env.PORT || 3000
const directorypath=path.join(__dirname,'../public') //pablic foled has index.html/abouthtml/help.html
const viewpath=path.join(__dirname,'../templates/views')
const partialpath=path.join(__dirname,'../templates/partials')
app.set('view engine','hbs')
app.set('views',viewpath)

hbs.registerPartials(partialpath)

app.use(express.static(directorypath))

app.get('',(req,res)=>{
res.render('index',({
    title:"weather",
    name:"andrew"})
    )
})

app.get('/about',(req,res)=>{
    res.render('about',({
        title:"About",
        name:"Ganpat"})
        )
    })


    app.get('/help',(req,res)=>{
        res.render('help',({
            title:"Help",
            name:"Henry"})
            )
        })



        app.get('/weather', (req,res)=>{
            if(!req.query.address)
            {
              return  res.send({error:"must provide address"})
            }
           /*from node 6 weather */
         //   const request= require('request')
            const geocode =require('./utils/geocode')
            const forecast=require('./utils/forecast')

            geocode(req.query.address,(error,data)=>{
                        if (error)
                        {
                            return res.send({error:error})
                        }
                                       
                        forecast(data.latitude,data.longitude,(error,forecastdata)=>{
                            if (error)
                            {
                               return res.send({errormessage:error})
                            }
                           
                           // console.log('data',data)
                           // console.log(forecastdata)
                            //res.send()
                            res.send({temperature:forecastdata.temperature,cloudcover:forecastdata.cloudcover})
                            })
                
                    })
                

            // res.send(
            //     {
            //         forecast:"raining",
            //         location:req.query.address})
            })

        //localhost/300/products?search=game&rating=5
    app.get('/products', (req,res)=>{
        if(!req.query.search)
        {
            return res.send({error:"must provide search"})
        }
        console.log(req.query.search)
        res.send({products:[]})
        })

      

        app.get('*',(req,res)=>{
            
            res.send('my 404 error'
                )
            })

// app.get('',(req,res)=>{

// res.send("welcome world")
// // })


// app.get('/help', (req,res)=>{
// res.send('<h1>welcome to help screen</h1>')
// })

// app.get('/about', (req,res)=>{
//     res.send([{
//         name:"ram",
//         age:21
//     },

//     {
//         sham:"sham",
//         age:21
//     }
// ])
// })



app.listen(port,console.log("server is running on 3000"))