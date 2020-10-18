import React from 'react';
const Note = ({ author, title, id, content }) => {

    return (        
        <>
            <td dangerouslySetInnerHTML={{__html: content}} />
        </>
    );
}

export default Note;