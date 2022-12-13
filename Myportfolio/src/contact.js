import react from 'react'

export default function Contacts(){
    const [contactValues, setContactvalues] = react.useState({
        fullname:"",
        email:"",
        message:""
    })
    const [formerrors, setformerrors] = react.useState({})
    const [isSubmit, setIsSubmit] = react.useState(false)



    const handleChange = (e) => {
            const {name, value} = e.target
            setContactvalues(prev => {
                return  {...contactValues, [name]:value}
            })
    }

 
        react.useEffect(() =>{
            if(Object.keys(formerrors).length === 0 && isSubmit){
               
            }
        },[] )


    const handleSubmit = (e) =>{
            e.preventDefault()
            setformerrors(validation(contactValues))
            setIsSubmit(true)
            setContactvalues({
                fullname:"",
                email:"",
                message:""
            })
    }
    function Reset(params) {
        setTimeout(() => {
            document.getElementById("message").innerHTML = ""
        }, 5000);
        Reload()
    }
    function Reload(params) {
        setTimeout(() => {
              window.location.reload()
            
        }, 6000);
    }
    const validation = (values) => {
        const error = {}
        if(!values.fullname){
            error.fullname = "please fullname is required"
        }
        if(!values.email){
            error.email = "please email is required"
        }
        if(!values.message){
            error.message = "please message is required"
        }
        return error
    }

    return(
        <>
        <hr className="mx-auto w-1/2 mt-1 bg-indigo-900 border-solid" />
        <h2 id='contact' className="text-center text-indigo-900 dark:text-indigo-300 text-7xl scroll-m-14" >Contact</h2>
        <section className="flex flex-col-reverse justify-center sm:flex-row items-center p-6 gap-8 widescreen:section-min-height tallscreen:section-min-height">
                    <div   className=''>
               
                        <span className='text-slate-900 font-bold'>pelumiogunsina4@gmail.com</span>
                        <h4 className='text-slate-900 font-bold'>Based in:</h4>
                        <span className='text-slate-900 font-bold'>Lagos State, Nigeria</span>
                        <div></div>
                    </div>  
                    <div className='contact-container-div'>
            {Object.keys(formerrors).length === 0 && isSubmit? (<div id='message' className='bg-green-900 text-white'>Message Sent Successfully </div>):
                null
            }
            
           
        
            <div  className='w-80 h-auto'>
                <form className='frm' onSubmit={handleSubmit}>
                        <label className='text-slate-900 font-bold'>FullName:</label>
                        <input 
                            type="text" 
                            placeholder = "FullName"
                            name='fullname'
                            value={contactValues.fullname}
                            onChange = {handleChange}
                            className = "w-80 h-7"
                        />  
                        <p style={{color: "red"}}>{formerrors.fullname}</p> 
                        <label className='text-slate-900 font-bold'>Email:</label>
                        <input 
                            type="email" 
                            placeholder = "Email"
                            name='email'
                            value={contactValues.email}
                            onChange = {handleChange}
                            className = "w-80 h-7"
                        />  
                        <p style={{color: "red"}}>{formerrors.email}</p> 
                        <label className='text-slate-900 font-bold'>Message:</label>
                        <textarea 
                            placeholder='Message' 
                            name='message'
                            value={contactValues.message} 
                            onChange = {handleChange}
                            className = "w-80 h-20"
                         />
                         <p style={{color: "red"}}>{formerrors.message}</p> 
                        <button onClick={Reset} className='w-60 h-10 text-3xl text-white rounded-3xl
                         hover:bg-gray-500 active:bg-rose-600 border-gray-900 
                         active:translate-y-1  bg-gray-900'>Send Message</button>           
                    
                </form>   
                </div>   
            </div>
       
        </section>
            
        
            
        </>
    )

}