
const HiSession =()=>{
  
    const profile_image = "src/images/profile-image.jpg"
    return(
        <>
        <div className="w-full bg-[url(/src/images/dev-background-image.jpg)] p-5 m-auto border-2 border-b-amber-400">            
            <div className="text-white flex flex-col gap-4 pb-4 z-0">
              <h1 className="text-5xl">Hi There 👩‍💻👋👋</h1> 
              <p className="text-4xl"> I am junior software developer who enjoys building modern web applications with mordern programing language. I love solving problems, learning new technologies, and creating clean, user-friendly digital experiences.</p>
            </div>
            <img src={profile_image} alt="" />
        </div>
        </>
    )
}
export default HiSession