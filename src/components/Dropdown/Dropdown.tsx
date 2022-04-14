import React, { useState } from "react";
import DropdownItem from "./DropdownItem";

export interface IDropdownProps {
    title: string,
    items: {id: number, name: string} []
    // multiselect: boolean
}

const Dropdown = (props: IDropdownProps) => {
    const {title, items} = props;
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);

    const toggle = () => setOpen(!open);

    return (
        <div className="dropdown-wrapper">
            <div 
            tabIndex={0} 
            className="dropdown-header" 
            role="button" 
            onKeyPress={() => toggle()} 
            onClick={() => toggle()} 
            >
                <div className="dropdown-header_title">
                    <p className="dropdown-header_title_bold">{title}</p>
                </div>
                <div className="dropdown-header_action">
                    <p>{open ? "Close" : "Open"}</p>
                </div>
            </div>
            {open && <DropdownItem /> }
        </div>
    )
}

export default Dropdown;