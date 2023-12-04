import React, {useState} from "react"
import axios from "axios";

function Login(props){
   // const [user, serUser] = useState("");
    // const [password, setPassword] = useState("");
    const [userProfile, setUserProfile] = useState({user: "", password: ""});
    const [massage, setMassage] = useState("");

    function fieldListener(event) {
        const { value, name } = event.target;
        //setUser(event.target.value);
       setUserProfile((prevValue) => {
        return {
            ...prevValue,
            [name]: value,
        };
        
       });
    }

   // function passwordListener(event) {
        
        //setUser(event.target.value);
     //   setUserProfile((prevValue) => {
        //    return {
        //        prevValue,  password: event.target.value,
       //     }


        //});

    //}

    function submitionForm(event){
        axios.post("/login",{
            user : userProfile.user,
            password: userProfile.password
        }).then((res) =>{
            if(res.data.authorization === 1){
                console.log("You are logged in");
                setMassage("");
                props.listener();
            } else {
                console.log("Wrong data");
                setMassage("Wrong data");
            }
        })
        .catch((err) =>  {
            console.error(err.error);
        });

        event.preventDefault();

    

        if(userProfile.user === "Santiago" && userProfile.password === "123"){
            console.log("You are logged in");

            props.listener();
        } else {
            console.log("Wrong Data");
            setMassage("Wrong Data");
        }
        event.preventDefault();
    }
    const errorStyle={
        color: "red" , 
    }
    
    return(
        <div>
            <form onSubmit={submitionForm}>
                <input 
                type="text" 
                placeholder="Username" 
                name="user"
                onChange={fieldListener}
                value={userProfile.user}
                />

                <input type="password" placeholder="Password" name="password"
                onChange={fieldListener} value={userProfile.password} />
                <button type="submit">Login</button>
            </form>
            <div style={errorStyle}>{massage}</div>
        </div>
    )
}

export default Login;