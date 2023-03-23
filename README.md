# open-email
A microservice that sents mail to clients. You can use this api to automate email sending in your application or project.


If you have clients or running an online business and you would like your clients to get email notifications when you bring out a new project in the market then this api is for you.
You can easily connect you website or app with this api, follow the step below, and __it's free__

## How to use this service 
You can send an email using this api by sending a `POST` request to [https://open-email-delivery.onrender.com/send](https://open-email-delivery.onrender.com/send)  with the following body:
* __mailfrom__ - _the sent of the email, in this case it will be your email address_.
* __mailto__ -_the recipient or receiver, in this case it will be email address you are sent the notice to._
* __subject__ - _subject of the email i.e topic/title associate with the email._
* __message__ - _the message/text you would like to sent._

# Examples:

## Used as in HTML in a form submit
```html
<form method="POST" action="https://open-email-delivery.onrender.com/send">
    <input type="email" name="mailfrom" value="sender@gmail.com" required/>
    <input type="email" name="mailto" value="receiver@gmail.com" required/>
    <input type="text" name="subject" value="Any Subject" required/>
    <input type="text" name="message" value="Hey there" required/>
    <button>Send email</button>
</form>
```


## Used as in vanilla javascript (fetch api)

```javascript
async function send(){
    try{
        const url =`https://open-email-delivery.onrender.com/send`;
        const response=await fetch(url,{
            method:"POST",
            header:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                mailfrom:"sender@gmail.com",
                mailto:"reciever@gmail.com",
                subject:"Any Subject",
                message:"How are you friend"
            })
        })
        const parseRes=await response.json();
        console.log(parseRes);
    }catch(err){
        console.log(err.message);
    }
}
//invoke the function above
send();
```

This javascript function will send a `POST` to the open-email then will return a json response.
```json
{
    "msg":"Mail sent"
}
```

## Used as in Python (Python Requests library)
```python
import requests
r = requests.post('https://open-email-delivery.onrender.com/send', json={
  "mailfrom": "sender@gmail.com",
  "mailto": "receiver@gmail.com",
  "subject": "Any Subject",
  "message":"Hello there"
})
print(f"Status Code: {r.status_code}, Response: {r.json()}")
```

## Used as in Curl
```bash
curl -X POST https://open-email-delivery.onrender.com/send -H "Content-Type: application/json" -d '{"mailfrom": "sender@gmail.com","mailto": "receiver@gmail.com", "subject": "Any Subject","message": "Hello there"}'  
```
Response should be
```json
{"msg":"Mail sent"}
```