const Home = () => {

    const handleClick = (e) => {
        console.log("hello peeps", e);
    }

    const handleClickAgain = (name , e) => {
        console.log('hello ' + name , e.target);
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) =>handleClickAgain('isha' , e)}>Click me again</button>
        </div>
    );
}
 
export default Home;

// handleClick() will invoke the function direcly
// so we write just the function name
// handleClickAgain() cant be invoked directly (reason above)
// as it is wrapped in an anonymous function which works only when the user clicks on the button 