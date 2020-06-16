import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import DroppableList from './components/DroppableList';
import {DeleteCard, DeleteCardError, AddCard} from './components/Dialogs';
import './global.css';

function App() {
    const [cards, setCards] = useState([{ items: [{id: "func-1", content:"Claudio"}, {id: "func-2", content:"Jonas"}], title:"Sem cargo", fixed:true }]);
    const [openDeleteCard, setOpenDeleteCard] = useState(false);
    const [openDeleteCardError, setOpenDeleteCardError] = useState(false);
    const [openAddCard, setOpenAddCard] = useState(false);
    const [id, setId] = React.useState(0);

    const onDragEnd = result => {
        const { source, destination } = result;
        if (!destination) {
            return;
        } 
        else if (source.droppableId === destination.droppableId) {
            let newCards = cards;
            const [removed] = newCards[source.droppableId].items.splice(source.index, 1);
            newCards[source.droppableId].items.splice(destination.index, 0, removed);
            setCards(newCards);
        }
        else {
            let newCards = cards;
            const [removed] = newCards[source.droppableId].items.splice(source.index, 1);
            newCards[destination.droppableId].items.splice(destination.index, 0, removed);
            setCards(newCards);
        }
    };
    
    function addCard() {
        setOpenAddCard(true);
    }

    function confirmAdd (title) {
        setCards(card => [...card, {items: [], title}]);
        setOpenAddCard(false);
    }

    function deleteCard(id) {
        if(cards[id].items.length !== 0){
            setOpenDeleteCardError(true)
            return;
        }
        else {
            setId(id);
            setOpenDeleteCard(true);
            return;
        }
    }

    function confirmDelete() {
        setCards(card => {
            card.splice(id, 1);
            return [...card];
        });
        setOpenDeleteCard(false);
    }

    function setTitle(value, id) {
        setCards(card => {
            card[id].title = value;
            return [...card];
        }); 
    }
    
    return (
        <div>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="DragDropContent">
                    {cards.map(card=>(
                        <DroppableList setTitle={setTitle} deleteCard={id=> deleteCard(id)} {...card} key={cards.indexOf(card)} id={cards.indexOf(card).toString()} />
                    ))}
                    <button className="ButtonAddCard" onClick={addCard}>Adicionar Cargo</button>
                </div>
            </DragDropContext>
            <DeleteCard open={openDeleteCard} setOpen={setOpenDeleteCard} confirmDelete={confirmDelete} />
            <DeleteCardError open={openDeleteCardError} setOpen={setOpenDeleteCardError} />
            <AddCard open={openAddCard} setOpen={setOpenAddCard} confirmAdd={confirmAdd} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
