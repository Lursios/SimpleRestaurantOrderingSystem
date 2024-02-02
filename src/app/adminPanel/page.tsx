import Login from "@/components/Login";

const AdminHome = ()=> {

    const loginStatus = true

    return (
        <>
            <Login
                isLoggedIn = {loginStatus}
            />
        </>
    )
}


export default AdminHome;