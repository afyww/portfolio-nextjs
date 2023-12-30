import React, { useState } from 'react';

const Contactcard = () => {
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
                <div class="space-y-8">
                    <div class="flex space-x-5">
                        <div class="space-y-2">

                            <label class="text-white font-light">Your Name</label>
                            <input type="text" class="rounded-xl w-full py-2 bg-gray-600 px-2"
                                placeholder="Name" />
                        </div>
                        <div class="space-y-2">

                            <label class="text-white font-light">Your Email</label>
                            <input type="email" class="rounded-xl w-full py-2 bg-gray-600 px-2"
                                placeholder="Email" />
                        </div>
                    </div>
                    <div class="space-y-2">

                        <label class="text-white font-light">Your Message</label>
                        <textarea name="textarea" cols="40" rows="12" placeholder="Write your message..."
                            class="w-full rounded-xl py-2 px-2 bg-gray-600 "></textarea>
                    </div>
                    <div class="">
                        <button type="submit" class="bg-blue-800 text-white px-5 py-3 font-xl rounded-xl">Send Message</button>
                    </div>
                </div>
            </form>
            {notification.show && (
                <div
                    className={`mt-4 p-4 ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                        } text-white rounded-md`}
                >
                    {notification.message}
                </div>
            )}
        </div>

    )
}

export default Contactcard