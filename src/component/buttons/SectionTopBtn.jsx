

function SectionTopBtn({text,lineColor,textClass}) {
    return (
        <>
            <button className={`flex gap-1 h-4 w-1/3 text-lg items-center font-semibold ${textClass}`}>
                {text} <hr className={`h-1 w-16 ${lineColor}`}/>
            </button>
        </>
  )
}
export default SectionTopBtn
