const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Isha Blogs</h1>
            <div className="links">
                <a href="/">Home</a>
                {/* inline styling - dynamic value which is an obj with key value pair */}
                <a href="/create" style={{
                    color : 'white',
                    backgroundColor : "#f1356d",
                    borderRadius : '8px'
                }}>New Blog</a>
               
            </div>
        </nav>
    );
}
 
export default Navbar;