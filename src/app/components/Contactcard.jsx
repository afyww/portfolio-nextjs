import React, { useState } from 'react';

const ContactCard = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [notification, setNotification] = useState({
        show: false,
        type: 'success', // or 'error'
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validate form data
        if (!formData.name || !formData.email || !formData.message) {
            setNotification({
                show: true,
                type: 'error',
                message: 'Please fill in all required fields',
            });
            return;
        }
    
        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                setNotification({
                    show: true,
                    type: 'success',
                    message: 'Email sent successfully',
                });
            } else {
                setNotification({
                    show: true,
                    type: 'error',
                    message: 'Failed to send email',
                });
            }
        } catch (error) {
            setNotification({
                show: true,
                type: 'error',
                message: 'Error sending email',
            });
            console.error('Error sending email:', error);
        }
    };
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="space-y-8">
                    <div className="flex space-x-5">
                        <div className="space-y-2">
                            <label className="text-white font-light">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="rounded-xl w-full py-2 bg-gray-600 px-2"
                                placeholder="Name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-white font-light">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="rounded-xl w-full py-2 bg-gray-600 px-2"
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-white font-light">Your Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            cols="40"
                            rows="12"
                            placeholder="Write your message..."
                            className="w-full rounded-xl py-2 px-2 bg-gray-600"
                        ></textarea>
                    </div>
                    <div>
                        <button type="submit" className="bg-blue-800 text-white px-5 py-3 font-xl rounded-xl">
                            Send Message
                        </button>
                    </div>
                </div>
            </form>
            {notification.show && (
                <div
                    className={`mt-4 p-4 ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white rounded-md`}
                >
                    {notification.message}
                </div>
            )}
        </div>
    );
};

export default ContactCard;
