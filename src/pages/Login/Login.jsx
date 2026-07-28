// import React, { useState } from 'react'
// import './Login.css'

// const Login = () => {

// const[login, setlogin] = useState(false);
// function loggedin() {
//     setlogin(true)
// }

//   return (
    
//     <div id='main'>
//         <div id='hero-container'>
//             <h2>Sign In</h2>
//             <input type="text" placeholder='Email'/>
//             <input type="text" placeholder='Password'/>
//             <button>Sign In</button>
//             <input type="checkbox" />
//             <div id='rem'>
//             <label htmlFor="Rem">Remember Me</label>
//             <h5><a href="">Need Help?</a></h5>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Login














import React, { useState } from 'react'
import './Login.css'

const Login = () => {
  const [isSignInPage, setIsSignInPage] = useState(true);
  const [toastMessage, setToastMessage] = useState("");

  function toggleFormMode() {
    setIsSignInPage(!isSignInPage);
  }

  function handleSubmit(e) {
    if (e) 
        e.preventDefault();
    
    const actionText = isSignInPage ? "Successfully Signed In!" : "Account Created Successfully!";
    setToastMessage(actionText);

    setTimeout(() => {
      setToastMessage("");
    }, 2500);
  }

  return (
    <div id='main'>
      {toastMessage && (
        <div className="netflix-toast-wrapper">
          <div className="custom-netflix-toast" role="alert">
            <div className="toast-header-custom">
              <strong className="toast-brand">NETFLIX</strong>
              <small className="toast-time">Just now</small>
              <button 
                type="button" 
                className="toast-close-btn" 
                onClick={() => setToastMessage("")}
              >✕</button>
            </div>
            <div className="toast-body-custom">
              {toastMessage}
            </div>
          </div>
        </div>
      )}

      <form id='hero-container' onSubmit={handleSubmit}>
          <h2>{isSignInPage ? "Sign In" : "Sign Up"}</h2>
          {!isSignInPage && (
              <input type="text" placeholder='Full Name' required />
          )}

          <input type="email" placeholder='Email' required />
          <input type="password" placeholder='Password' required />

          <button type="submit">{isSignInPage ? "Sign In" : "Sign Up"}</button>
          
          <div id='rem'>
              <div>
                  <input type="checkbox" id="Rem" />
                  <label htmlFor="Rem" style={{ marginLeft: '8px' }}>Remember Me</label>
              </div>
              <h5><a href="#">Need Help?</a></h5>
          </div>

          <p className="toggle-text">
              {isSignInPage ? "New to Netflix? " : "Already have an account? "}
              <span onClick={toggleFormMode}>
                  {isSignInPage ? "Sign up now." : "Sign in now."}
              </span>
          </p>
      </form>
    </div>
  )
}

export default Login;