import React from 'react';
import { Button } from 'semantic-ui-react';

const LinkButton = () => {
    return (
        < center >
            <a href="https://drive.google.com/drive/folders/1-6WZ93kh1Gsf4urcewUmakBFAiMhLHXv?usp=sharing" target="_blank" style={{ 'color': 'white' }}>
                <Button
                    size="medium"
                    style={{ marginBottom: 20, width: 150, backgroundColor: "#1897D4", color: "#ffffff" }}
                >
                    Berkas Offline
            </Button>
            </a>
        </center >
    );
}

export default LinkButton;