import {useState} from 'react'

const RegistrationForm = () => {
    const [formData,setFormData] = useState({userName:"",email:"",password:""})
    const [errors,setErrors] = useState({})

    const [isSubmitting,setIsSubmitting] = useState(false)
    const [successMessage, setSuccessMessage] = useState("");
    
    const ValidateForm = () =>{
      const newErrors = {}
      //Checking userName
      if(!formData.userName){
        newErrors.username = "UserName is Required."
      }
      //Checking email
      if (!formData.email){
        newErrors.email = "email is Required"
      }else if(!formData.email.endsWith("gmail.com")){
        newErrors.email = "Enter Valid a Email"
      }
      //Checking password
      if(!formData.password){
        newErrors.password = "Enter the Password"
      }else if(formData.password.length < 8){
        newErrors.password = "Password must be at least 8 characters.";
      }

      return newErrors
    }

    const handleInputs = (e) => {
      const {name,value} = e.target
      setFormData((prev)=>({...prev,[name]:value}))
      //console.log(e.target.name)
    }
     // submitting the form
    const handleSubmit = (e) =>{
      e.preventDefault()
      const newErrors = ValidateForm()
      if(Object.keys(newErrors).length > 0){
        setErrors(newErrors)
        return
      }
      
      setIsSubmitting(true)

      setTimeout(()=>{
        setIsSubmitting(false)
        setFormData({userName:"",email:"",password:""})
        setErrors({})
        setSuccessMessage("Registration Successful")

      },2000)
    }


    return(
        <div className="flex flex-col justify-center items-center h-screen ">
           <h1 className='text-lg'>User Registration</h1>
           {successMessage && (<p className='text-green-500 text-center mb-3'>{successMessage}</p>)}
           <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="text-sm font-medium mb-1">UserName</label>
                <input type="text" value={formData.userName} name="userName" onChange={handleInputs} className="w-full border border-gray-400 p-2 rounded"/>
                {errors.username && (<p className="text-red-600 text-sm mt-1">{errors.username}</p>)}
              </div>
              <div className="mb-4">
                <label className="text-sm font-medium mb-1">Email</label>
                <input type="email" value={formData.email} name="email" onChange={handleInputs} className="w-full border border-gray-400 p-2 rounded" />
                {errors.email && (<p className="text-red-600 text-sm mt-1">{errors.email}</p>)}
              </div>
              <div className="mb-4">
                <label  className="text-sm font-medium mb-1">Password</label>
                <input type="password" value={formData.password} name="password" onChange={handleInputs}  className="w-full border border-gray-400 p-2 rounded"/>
                {errors.password && (<p className='text-red-600 text-sm mt-1'>{errors.password}</p>)}
              </div>
              <button type="submit" className={`w-full h-10 rounded text-white ${isSubmitting ?"bg-gray-500 cursor-not-allowed":"bg-blue-500 hover:bg-blue-600"}` }>
                {isSubmitting? "Submitting..." : "Register"}</button>
          </form>
           
        </div>
    )
}

export default RegistrationForm