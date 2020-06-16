export const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: 16,
    margin: `0 0 8px 0`,
    borderRadius: 8,
    // change background colour if dragging
    background: isDragging ? 'white' : 'rgba(0,0,0,0.15)',

    // styles we need to apply on draggables
    ...draggableStyle
});

export const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'white',
    borderRadius: 8,
    textAlign: 'center',
    padding: 8,
    minWidth: 250,
    width: 250,
    margin: 5
});