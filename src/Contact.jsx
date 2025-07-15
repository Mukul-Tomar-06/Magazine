import { useState } from 'react';
import './css/Contact.css'
function Contact(){
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[address,setAddress]=useState('');
    const[text,setText]=useState('');
    function collectData(e){
        e.preventDefault();
        console.log(name,email,address,text);
        alert("Welcome "+name);
        setName('');
        setEmail('');
        setAddress('');
        setText('');
    }
    return (
        <div>
            <div className='formClass'>
                <form className="form" onSubmit={collectData}>
                    <label htmlFor="">Name: </label>
                    <input type="text" placeholder="Enter your Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <br /><br />
                    <label htmlFor="">Email: </label>
                    <input type="text" placeholder="Enter your Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <br /><br />
                    <label htmlFor="">Address: </label>
                    <input type="text" placeholder="Enter your Address" value={address} onChange={(e)=>setAddress(e.target.value)} />
                    <br /><br />
                    <label htmlFor="">Suggestion: </label>
                    <input type="text" placeholder="Enter your Suggestion" value={text} onChange={(e)=>setText(e.target.value)} />
                    <br /><br />
                    <button>SUBMIT</button>
                    <br /><br />
                </form>
            </div>
                

        
        </div>
    );
}
export default Contact;