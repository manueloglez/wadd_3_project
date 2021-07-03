import react from 'react'

const logoSrc ="https://media.giphy.com/media/l3vR16pONsV8cKkWk/giphy.gif";
const Welcome = () => {
    return (
        <div className="App">
            <img src={logoSrc} className="App-logo" alt="logo" height="150px"/>
        <p>
         <b> Welcome to our App !</b> </p>
         <p>This is the place for Multiple Purpose To Help you.</p>
         <p><b> For Client </b> who wants to rent out facilities</p>
         <p><b> For Teachers </b>who want to book that facilities </p>
         <p><b> For Students </b>who can enroll in here with your Interested Courses.</p>
        </div>
    );

}

export default Welcome