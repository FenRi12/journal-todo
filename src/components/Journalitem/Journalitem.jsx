import'./Journalitem.css'
export default function Journalitem({title,text,date}){
    return(
        <>
        <h2 className='journal-item_header'>{title}</h2>
        <div className='journal-item-body'>
            <p className='journal-item_date'>{date}</p>
            <p className='journal-item_text'>{text}</p>
        </div>
    
        </>
    )
}