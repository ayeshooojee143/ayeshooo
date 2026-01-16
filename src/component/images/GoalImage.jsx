function GoalImage({src}){
    return (
        <>
            <div className="pt-1 overflow-hidden rounded-full">
                <img className="h-20 md:h-16 rounded-full w-20" src={src} alt="my client" /> 
            </div>
        </>
    )
}
export default GoalImage;