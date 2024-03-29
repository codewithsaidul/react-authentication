import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";
import { useState } from "react";
import "../App.css";
export const Home = () => {

    const [user, setUser] = useState(null);


    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
          .then((result) => {
            const loggedUser = result.user;
            setUser(loggedUser)
          })
          .catch((error) => {
            console.log("Error : ", error.message);
          });
    }


    const handleGoogleSignOut = () => {
        signOut(auth)
        .then(() => {
            setUser(null);
        })
        .catch(error => console.log(error))
    }
  return (
    <div>
      <h2>eha amar ghor</h2>

      {user && (
        <div>
          <h3>User : {user?.displayName}</h3>
          <p>User : {user?.email}</p>
          <img src={user?.photoURL} alt="" />
        </div>
      )}

      {
        user 
        ? <button onClick={handleGoogleSignOut}>Sign Out</button>
        : <button onClick={handleGoogleSignIn}>Google Login</button>}
    </div>
  );
};
