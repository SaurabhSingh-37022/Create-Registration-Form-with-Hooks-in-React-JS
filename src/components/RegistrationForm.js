import './RegistrationForm.css'
import React, {useState} from 'react'

function RegistrationForm(){
    const[userRegistration,setUserRegistration]=useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    });
    const[records,setRecords] = useState([])

    function handlerInput(e){
        const name = e.target.name
        const value = e.target.value
        // console.log(name);
        console.log(name,value);

        setUserRegistration({...userRegistration,[name]:value} )
        
        
    };
    function handleSubmit(e){
        e.preventDefault();

        const newRecord = { ...userRegistration, id: new Date().getTime().toString()}
        console.log(records);
        setRecords([...records, newRecord])
        console.log(records);

        setUserRegistration({ username:"", email:"", phone:"", password:""})

        



    }
    return(
        <div className="form">
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlfor="username">Full Name</label>
                    <input type="text" autoComplete="off"
                    value={userRegistration.username}
                    onChange={handlerInput} 
                    name="username" id="udername"></input>
                </div>

                <div>
                    <label htmlfor="email">Email</label>
                    <input type="text" autoComplete="off"
                    value={userRegistration.email}
                    onChange={handlerInput}
                     name="email" id="email"></input>
                </div>

                <div>
                    <label htmlfor="phone">Phone</label>
                    <input type="text" autoComplete="off"
                    value={userRegistration.phone}
                    onChange={handlerInput} 
                     name="phone" id="phone"></input>
                </div>

                <div>
                    <label htmlfor="password">Password</label>
                    <input type="password" autoComplete="off"
                    value={userRegistration.password}
                    onChange={handlerInput}                    
                    name="password" id="password"></input>
                </div>

                <button type="submit">Registration</button>
                
            </form>

            <div>
                {
                  records.map((currElem) =>{
                    const { id, username, email, phone, password } = currElem;
                    return(
                        <div className="show" key={id}>
                            <p>{username}</p>
                            <p>{email}</p>
                            <p>{phone}</p>
                            <p>{password}</p>

                        </div>
                    )
                  })  
                }
            </div>
            

        </div>
    );
};
export default RegistrationForm;