import React, { useReducer, useState } from 'react';


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { ...action.data, complete: false }];
        case "DELETE":
            return state.filter(item => item.id !== action.id);
        case "UPDATE":
            return state.map(item => item.id === action.data.id ? { ...item, title: action.data.title } : item);
        case "TOGGLE_COMPLETE":
            return state.map(item => item.id === action.id ? { ...item, complete: !item.complete } : item);
        case "CHECKOUT":
            return state.filter(item => !item.complete); 
        default:
            return state;
    }
};

const Uitodo = () => {
    const [input, setInput] = useState({ id: '', title: '' });
    const [items, dispatch] = useReducer(reducer, []);

    const handleAction = (type) => {
        switch (type) {
            case 'ADD':
                if (input.id.trim() !== '' && input.title.trim() !== '') {
                    if (items.find(item => item.id === input.id)) {
                        alert("ID must be unique.");
                    } else {
                        dispatch({ type: "ADD", data: input });
                        resetInput();
                    }
                } else {
                    alert("Please enter both ID and title.");
                }
                break;
            case 'DELETE':
                dispatch({ type: "DELETE", id: input.id });
                resetInput();
                break;
            case 'UPDATE':
                if (input.id.trim() !== '' && input.title.trim() !== '') {
                    dispatch({ type: "UPDATE", data: input });
                    resetInput();
                } else {
                    alert("Please enter both ID and title.");
                }
                break;
            default:
                break;
        }
    };

    const handleCheckout = () => {
        dispatch({ type: "CHECKOUT" });
    };

    const resetInput = () => {
        setInput({ id: '', title: '' }); 
    };

    const toggleComplete = (id)=> {
        dispatch({ type: "TOGGLE_COMPLETE", id });
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif',backgroundColor:'#d1c7c7', maxWidth: '500px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
            <h1 style={{ textAlign: 'center' }}>Todo List</h1>
            <div style={{ marginBottom: '10px' }}>
                <input
                    type="text"
                    placeholder="Enter ID"
                    style={{ marginRight: '10px' }}
                    value={input.id}
                    onChange={(e) => setInput(prevState => ({ ...prevState, id: e.target.value }))}
                />
                <input
                    type='text'
                    placeholder="Enter Title"
                    value={input.title}
                    onChange={(e) => setInput(prevState => ({ ...prevState, title: e.target.value }))}
                /><br/><br/>
            
        
                <button style={{backgroundColor:'#767697',margin:'20px'}} onClick={() => handleAction('ADD')}>Add</button>
                <button style={{backgroundColor:'#767697',margin:'20px'}} onClick={() => handleAction('UPDATE')}>Edit</button>
                <button style={{backgroundColor:'#767697',margin:'20px'}}onClick={() => handleAction('DELETE')}>Delete</button>
            </div>
            <div style={{ textAlign: 'center' }}>
                <button style={{ backgroundColor: '#6c8f6e', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }} onClick={handleCheckout}>Checkout</button>
            </div>
            <ul>
                {items.map(item => (
                    <li key={item.id} style={{ textDecoration: item.complete ? 'line-through' : 'none' }}>
                        <input
                            type="checkbox"
                            checked={item.complete}
                            onChange={() => toggleComplete(item.id)}
                            style={{ marginRight: '10px' }}
                        />
                        <span style={{ marginRight: '10px' }}>{item.id}</span>
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Uitodo;