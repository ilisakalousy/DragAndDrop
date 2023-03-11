import React, { useState, useEffect } from 'react'
 
import { StyledWrapper, StyledButton, StyledInput, StyledTodo, CloseButton } from './styled';
import Draggable from 'react-draggable';
import randomColor from 'randomcolor';

function App() {

    const [item, setItem] = useState('');
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem('items')) || []
    );

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items]);

    const newItem = () => {
        if (item.trim() !== '') {
            const newItem = {
                id: Date.now(),
                item: item,
                color: randomColor({
                    luminosity: 'light'
                }),
                defaultPos: {
                    x: 500,
                    y: -500,
                }
            }
            setItems((items) => [...items, newItem]);
            setItem('');
        } 
    };

    const deleteNote = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const updatePosition = (data, idx) => {
        let newArr = [...items];
        newArr[idx].defaultPos = { x: data.x, y: data.y };
        setItems(newArr);
    }

  return (
    <>
        <StyledWrapper>
            <StyledInput 
                type="text"
                placeholder='Your task'
                onChange={e => setItem(e.target.value)}
                value={item}
            />
            <StyledButton
                onClick={() => newItem()}
            >
                Add task
            </StyledButton>
        </StyledWrapper>
        {
            items.map((item, idx) => {
                return (
                    <Draggable
                        key={idx}
                        defaultPosition={item.defaultPos}
                        onStop={(_, data) => {
                            updatePosition(data, idx)
                        }}
                    >
                        <div>
                            <StyledTodo style={{ backgroundColor: item.color }}>
                                {`${item.item}`}
                                <CloseButton
                                    onClick={() => deleteNote(item.id)}
                                >
                                X
                                </CloseButton>
                            </StyledTodo>
                        </div>
                    </Draggable>
                )
            })
        }
    </>
  );
};
 
export default App;
 