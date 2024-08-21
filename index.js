
const   express = require("express")
const   app = express()
PORT = process.env.PORT || 8000 ;

app.listen(PORT,()=>{
    console.log(`THE SERVER IS NOW RUNNING ON ${PORT}`)
})

//ARRAY DATA respose
app.get("/luckNum2",(req,resp)=>{
    const lkyNum =[16,100,254]
    resp.json(`CONGRATULATIONS THE LUCKY NUMBERS ARE :${lkyNum}`)
});

//ARRAY OF OBJECTS
app.get("/bestGrads2024",(req,resp)=>{

    const   bGrad = [
        {
        firstName:"GABRIEL",
        lastName:"PETERS",
        year:2024},

        {firstName:"SARA",
        lastName:"LORRIS",
        year:2024},
        {
        firstName:"MICHEL",
        lastName:"GAYS",
        year:2024}
    ]
     
       resp.json(bGrad)
});

//STR ARRAYS
app.get("/paymode",(request,response)=>{

    const   accptcrd    =  ["MASTERCARD", "VISA", "PAYPAL", "VERMO", "BTC"];
    response.json(`HERE ARE ACCEPTABLE PAYMODE ARE: ${accptcrd}`)
});





