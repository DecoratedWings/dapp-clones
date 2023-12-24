import React from 'react';
import { Button } from '@chakra-ui/react';

interface SkipFilterButtonProps {
    targetId:string;
    text:string;
}

const SkipFilterButton: React.FC<SkipFilterButtonProps> = ({ targetId, text }) => {
    return (
        <Button
        as="a"
        href={`#${targetId}`}
        opacity={0} // Initially hidden
        position="absolute"
        zIndex={100}
        left={0}
        top={0}
        _focus={{
            opacity: 1, // Show when focused
            position: 'static', // Reset the position when focused
            boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)"
        }}
        variant="secondary"
        // background="white"
    >
       {text}
    </Button>
    );
}

export default SkipFilterButton;