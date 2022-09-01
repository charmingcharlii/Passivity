import { useState, useEffect } from "react"
import { useQuery, useMutation } from "@apollo/client"
import { GET_USER } from "../utils/queries"
import { UPDATE_USER } from "../utils/mutations"
export default function Profile() {
    const { data } = useQuery(GET_USER)

    useEffect(() => {
        if (data) {
            setEmail(data.me.email)
            setName(data.me.username)
        }
    }, [])

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    const [changeForm, setChangeForm] = useState(false)
    
   const handleSubmit = (e) => {
    e.preventDefault()
    }

  return (
    <>
      <div className="min-h-full">

        <header className="bg-white shadow pt-[50px]">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Profile</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">
                {changeForm ?
                <form className="mt-4">
                    <label forhtml='name'>Username</label>
                    <input onChange={(e)=> {setName(e.target.value)}} value={name} type="text" className="placeholder:italic placeholder:text-slate-400 block mx-auto my-2 bg-white w-5/6 sm:w-3/6 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"></input>

                    <label forhtml='email'>Email</label>
                    <input value={email} onChange={(e)=>{
                        setEmail(e.target.value)}} name='email' className='placeholder:italic placeholder:text-slate-400 block mx-auto my-2 bg-white w-5/6 sm:w-3/6 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'></input>

                    <button onClick={()=>setChangeForm(false)} className="bg-purple-500 btn section-btn">Submit</button>
                </form> :
                <div>
                    <p className="my-4 text-2xl hover:cursor-pointer underline" onClick={()=>{setChangeForm(true)}}>Username: {name}</p>
                    <p className="text-2xl hover:cursor-pointer underline" onClick={()=>{setChangeForm(true)}}>Email: {email}</p>
                </div>
                    }
            </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  )
}
