// legion.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddCharacter from '../../components/AddCharacter';
import { Card, CardHeader, CardBody, CardFooter, Box, Heading, Flex } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react';
import Layout from '../../Layout.jsx';


// const [character, setCharacter] = useState(null)

function Legion() {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        // Retrieve characters from localStorage
        // const storedCharacters = JSON.parse(localStorage.getItem('Characters')) || [];
        const characters = JSON.parse(localStorage.getItem('Characters'));
        setCharacters(characters)
    }, []);

    return (
        <Layout>
            <div className="Legion">
                LEGION
                <AddCharacter />
                <Flex>
                    {characters.map((character, index) => (
                        <Box key={index}>
                            <Card>
                                <CardHeader>
                                    <Heading size='xs' textTransform='uppercase'>
                                        {character.characterName}
                                    </Heading>
                                </CardHeader>
                                {/* Display character details */}
                                <CardBody>
                                    <Text>Class: {character.characterClass}</Text>
                                </CardBody>

                            </Card>
                        </Box>
                    ))
                    }
                </Flex>
                {/* Add other components or content as needed */}
            </div >
        </Layout>
    )
}

export default Legion;