import React from 'react';
import Modal from "./Modal.jsx";
import './Button.css'

function Button (props) {
    const [open, setOpen] = React.useState(false);
    const setS = (x) => setOpen(x);

    return (
        <>
            <div onClick={() => setOpen(true)} className="button">
                <div className="text" >
                    {props.name}
                </div>
            </div>
            {open && (
                <Modal setS={setS}></Modal>
            )}
        </>
    );
}

export default Button;