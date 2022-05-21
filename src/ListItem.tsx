import React, { useState } from 'react';

export function ListItem(props: { name: string }) {
    const [isChanging, setIsChanging] = useState(false);

    const [tmpText, setTmpText] = useState(props.name);

    const [text, setText] = useState(props.name);

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setText(tmpText);
            setIsChanging(false);
        }
        if (e.key === `Escape`) {
            setTmpText(text);
            setIsChanging(false);
        }
    };

    return isChanging ? (
        <div>
            <input
                value={tmpText}
                onChange={(e) => setTmpText(e.target.value)}
                onKeyDown={onKeyDown}
            />
        </div>
    ) : (
        <div onClick={() => setIsChanging(true)}>{text}</div>
    );
}
