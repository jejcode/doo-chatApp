import React from 'react'
const Header = (props) => {
    return (
        <div className="row my-4 text-center text-bg-secondary rounded">
            <div className="col p-4">
                    {props.children}
            </div>
        </div>
    )
}

export default Header