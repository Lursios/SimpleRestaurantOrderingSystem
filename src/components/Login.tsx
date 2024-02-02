
type LoginProps = {
    isLoggedIn : boolean;
}

const Login = ({isLoggedIn}:LoginProps)=> {
    return ( 
        !isLoggedIn && 
        (<div className="flex flex-row max-w-[80vw] min-h-[55vw] ">  
            <div className="flex items-center justify-center w-1/4 bg-green-400">
                <div className="text-3xl">D Logo</div>
            </div>
            <div className="flex bg-black">
                Login on the right
            </div>
        </div>)
    )
}

export default Login;