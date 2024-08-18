import Card from './Card';

export default function Board({ cards , cardClick }) {

    return (
        <>
            <div className='flex flex-row'>
                {cards.slice(0,6).map((card) => (

                    <Card key={card.id} image={card.images.small} cardClick={()=>cardClick(card.id)}/>
                ))}
            </div>
            <div className='flex flex-row'>
                {cards.slice(6,12).map((card) => (
                    <Card key={card.id} image={card.images.small} cardClick={()=>cardClick(card.id)}/>
                ))}
            </div>
        </>
    )

}