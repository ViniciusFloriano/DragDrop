import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import {getItemStyle, getListStyle} from '../utils/DroppableStyle';


export default function DroppableList({items, id, title, setTitle, fixed, deleteCard}) {
    return (
        <Droppable droppableId={id}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}>
                    <div className="CardHeader">
                        {(()=> {
                        return fixed?<h3>{title}</h3>:<input placeholder="Selecione o cargo" id={id} value={title} onChange={e => setTitle(e.target.value, id)}/>
                        })()}
                        <button onClick={()=> deleteCard(id)}>X</button>
                    </div>
                    {items.map((item, index) => (
                        <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={getItemStyle(
                                        snapshot.isDragging,
                                        provided.draggableProps.style
                                    )}>
                                    {item.content}
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}
