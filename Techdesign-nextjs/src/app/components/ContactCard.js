export default function ContentCard ({name,description}){
    return(
        <div className="DB flex items-center gap-[8px]">
            <img src="/img1.png" className="w-[48px] h-[48px] rounded-[100px]"/>
            <h3>{name}John Cena</h3>
            <p>{description}</p>
        </div>
    )
}
