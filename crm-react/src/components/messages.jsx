import React from 'react';
import image1 from '../assets/images/profile.jpg';
import image2 from '../assets/images/cute.jpg';
import image3 from '../assets/images/19.jpg';
import image4 from '../assets/images/pi.avif';
import image5 from '../assets/images/piii.avif';


const messages = [
    { id: 1, name: "John Doe", description: "Hey, how are you?", image: image1 },
    { id: 2, name: "Jane Smith", description: "Are we still meeting tomorrow?", image: image2 },
    { id: 3, name: "Alice Johnson", description: "Can you review my code?", image: image3 },
    { id: 4, name: "Bob Brown", description: "I'm having trouble with the new feature.", image: image4 },
    { id: 5, name: "Charlie Davis", description: "The server is down again.", image: image5 },
];

const Messages = () => {
    return (
        <div className="container mx-auto px-4 sm:px-8 py-4 w-full md:w-1/2">
            <div className="py-2">
                {messages.map(message => (
                    <div key={message.id} className="flex items-center p-4 mb-4 bg-black shadow-md rounded-lg hover:bg-gray-800">
                        <img className="w-10 h-10 rounded-full mr-4 object-cover" src={message.image} alt={message.name} />
                        <div className="text-left">
                            <div className="text-white font-bold">{message.name}</div>
                            <div className="text-gray-400">{message.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Messages;
