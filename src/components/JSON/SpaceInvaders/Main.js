import React, { useState, useEffect } from 'react';

import Challenge from '../../Challenge';
import Editor from '../../Editor';
import SpaceInvaders from './SpaceInvaders';

const challenge = 'Space Invaders'

const steps = [
    {
        title: challenge,
        subtitle: 'Introdução',
        description: 'Vamos iniciar ae krl',
        initProperties: {}
    }
]


function Main(props) {
    const [step, setStep] = useState(0);
    const [editorValue, setEditorValue] = useState("");
    const [resultProperties, setResultProperties] = useState(steps[step].initProperties);

    const setEditor = (value) => {
        if (value == editorValue) return;

        try {
            //console.log('ué', editorValue,value, resultProperties)
            let newProperties = JSON.parse(value)
            setResultProperties(newProperties)
        } catch(e) {}

        setEditorValue(value)
    }

    console.log('novo',editorValue,resultProperties)
    
    return (
        <div style={{height: '100%'}}>
            <Challenge 
                title={steps[step].title} 
                subtitle={steps[step].subtitle} 
                description={steps[step].description} 
                editor={
                    <Editor 
                        mode="json" 
                        value={editorValue}
                        onChange={setEditor}
                    />
                }
                result={<SpaceInvaders properties={resultProperties}/>}
            />
        </div>
    )
}

export default Main;