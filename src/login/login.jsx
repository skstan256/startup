import React from 'react';

export function Login() {
    const [text, updateText] = React.useState("unknown");

    const onChange = (e) => {
        updateText(e.target.value);
    }

    const Username = ({input}) => {
        return (
            <div>
                <p>Username: {input}</p>
            </div>
        );
    };
    return (
        <main className='container-fuid bg-secondary text-center'>
            <div>Login Component</div>
            <Username input={text} />
            <input type="text" onChange={(e) => onChange(e)} value={text} />
        </main>
    );
}