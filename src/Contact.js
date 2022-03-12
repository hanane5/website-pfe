import { useEffect, useState } from "react"
import emailjs from 'emailjs-com';
import "./Contact.css"


const Contact = () => {
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_31y2ysv','template_ekup2la',e.target,'praSYw7m0q1Rkut5f'
        ).then(response=>{console.log('Message envoyé avec succés', response.status,response.text);setStatus('succés')})
        
        .catch(err=> console.log('Echec',err));
        
        
    }
    const [status , setStatus] = useState('');
    
    useEffect(() => {
        
        if(status === 'succés') {
            setTimeout(() => {
                setStatus('');
            }, 9000);
        }

        
    }, [status]);
    
    
   

    

    return (
    
        <div className="container border"
        
        style={{marginTop:"50px",
        width: '50%',
        backgroundImage:`url('https://media.istockphoto.com/photos/nature-background-picture-id654475732?k=20&m=654475732&s=170667a&w=0&h=QnZtojp96020xDUKXX4M2rk7Ww5YZdyWZ5OeM93Vqko=')`,
        backgroundPosition: "center",
        backgroundSize: "cover",


        
        
        }}>
        

            <h1 style={{marginTop: '25px'}}>CONTACTEZ-NOUS</h1>
            {status && renderAlert()}

            <form className="row" style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail}>

                <label>Nom</label>

                <input type ='text' name='nom' className="form-control"/>
                <label>Email</label>

                <input type ="email" name="user-email" className="form-control"/>
                <label>Message</label>
                
                <textarea name='message' rows='4'className="form-control"/>
                
                <input type='submit' value="Envoyer" className="form-control btn btn-primary"
                style={{marginTop:"30px"}}/>

            </form>

            </div>


        );
        
};
const renderAlert = () => (
    
    <div  className="answer" >

        <p>Votre message est envoyé avec succés</p>



    </div>
   







    )
    


export default Contact;
