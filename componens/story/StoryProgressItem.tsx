interface PropsType{
    text:string
    color:'pink'|'peach'|'green'|'purple'|'orange'|'yellow'|'lime'|'blue'|'red',
    number:number,
}

export default function StoryProgressItem({color, text,number}: PropsType){
    return(
        <div className='story-progress-item'>
           <span className={`story-progress-item-number ${color}`}>{number}</span>
            <p className={'story-progress-item-text'}>{text}</p>
        </div>
    )
}