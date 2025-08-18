
const HiSession =()=>{
  
    const profile_image = "src/images/profile-image.jpg"
    return(
        <>
        <div className="w-full  p-5 m-auto border-2 flex">            
            <div className="text-blue-900 flex flex-col gap-7 pb-4 z-0  border-b-amber-400 justify-center ">
              <h1 className="text-5xl">Hi There 👋 I am Emmanuel Niyonsaba</h1> 
              <p className="text-4xl text-blue-900"> I am junior software developer who enjoys building modern web applications with mordern programing language. I love solving problems, learning new technologies, and creating clean, user-friendly digital experiences.</p>
                <button className=" bg-blue-900 text-white w-20 p-2 rounded-2xl">About </button>
            </div>
            <img src={profile_image} alt="" className=" rounded-2xl w-4xs h-100"/>
            <div>
            </div>
        </div>

        </>
    )
}
export default HiSession