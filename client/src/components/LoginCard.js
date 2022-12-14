import LoginForm from "./LoginForm"

const LoginCard = () => {
  return (
    <div className="pt-36 px-20 sm:p-20 mx-auto w-full md:w-5/6 lg:w-4/6">
        <div className="border-2 border-black h-4/6 rounded bg-slate-50 shadow-sm">
            <h1 className="text-center text-3xl lg:text-4xl font-semibold mx-4 mt-4">Welcome to Passivity</h1>
                <div className="px-14 pt-4 pb-8">
                    <LoginForm />
                </div>
        </div>
    </div>
  )
}

export default LoginCard