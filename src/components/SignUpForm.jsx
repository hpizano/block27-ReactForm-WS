import { useState, useEffect } from "react"


function SignUpForm () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  console.log(username, password)
  
  async function handleSubmit(event) {
    event.preventDefault();
    try{
       const result = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
       method: 'POST',
       body: JSON.stringify({username}),
     }) ;
  } catch (error) {
        setError(error.message);
    }
    setUsername('');
    setPassword('');
  }
  
    return (
        <>
        <h2>Sign Up</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <label>
                Username: <input value={username} onChange={(u) => setUsername(u.target.value)}/>
            </label>
            <label>
                Password: <input value={password} onChange={(p) => setPassword(p.target.value)}/>
            </label>
            <button>Submit</button>
        </form>
        </>
    )
}

export default SignUpForm