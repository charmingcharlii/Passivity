import LoginForm from "./LoginForm"

const LoginCard = () => {
  return (
    <div className="pt-20 mx-auto w-1/2 ">
        <div className="border-2 border-black h-4/6 rounded bg-slate-50">
            <h1 className="text-center text-3xl font-semibold m-2">Welcome to Passivity</h1>
            <LoginForm />
        </div>
    </div>
  )
}

export default LoginCard