import React, {useMemo, useRef, useState} from 'react';
import JoditEditor from 'jodit-react';

const App = ({placeholder}) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const config = useMemo(
        () => ({
            readonly: false, // all options from https://xdsoft.net/jodit/docs/,
            placeholder: placeholder || 'Start typing...',
            height: '100vh',
            theme:'dark',
            toolbarButtonSize: 'large'
        }),
        [placeholder]
    );

    const handleContentChange = (newContent) => {
        setContent(newContent);
        // Any additional actions you want to perform when content changes
    };

    return (
        <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={(newContent) => handleContentChange(newContent)} // Update content on blur
            onChange={(newContent) => handleContentChange(newContent)} // Uncomment this line for real-time updates
        />
    );
};

export default App;

