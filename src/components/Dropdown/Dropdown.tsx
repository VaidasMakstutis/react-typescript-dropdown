import React, { useState } from "react";
// import DropdownItem from "./DropdownItem";

export interface IDropdownProps {
    title: string,
    items: {id: number, name: string} []
    // multiselect: boolean
}

const Dropdown: React.FC<IDropdownProps> = (props) => {
    const {title, items} = props;
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);

    const toggle = () => setOpen(!open);

    const handleClicker = (item: any = true) => {}

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
            {open && (
                <ul className="dropdown-list">
                    {/* <DropdownItem /> */}
                    {items.map(item => {
                        return (
                        <li className="dropdown-list-item" key={item.id}>
                            <button type="button" onClick={() => handleClicker(item)}>
                            <span>{item.name}</span>
                            <span>Selected...</span>
                            </button>
                        </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default Dropdown;