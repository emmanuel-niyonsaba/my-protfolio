
const HiSession =()=>{
  
    const profile_image = "src/images/profile-image.jpg"
    return(
        <>
        <div className=" p-5 m-auto flex bg-blue-900 ">            
            <div className="text-white flex flex-col gap-7 pb-4 z-0 justify-center ">
              <h1 className="text-5xl">Hi There 👋 I am <b className=" text-red-400">Emmanuel Niyonsaba</b></h1> 
              <p className="text-4xl text-white"> I am junior software developer who enjoys building modern web applications with mordern programing language. I love solving problems, learning new technologies, and creating clean, user-friendly digital experiences.</p>
                <button className=" bg-blue-800 text-white w-20 p-2 rounded-2xl">About </button>
            </div>
            <img src={profile_image} alt="" className=" rounded-2xl w-4xs h-100"/>
            <div>
            </div>
        </div>

        </>
    )
}
export default HiSession