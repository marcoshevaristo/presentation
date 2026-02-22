"use client";

import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log("Form submitted:", formData);
        alert("Message sent! (This is a demo - connect your backend)");
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    Get In Touch
                </h2>
                <div className="max-w-2xl mx-auto">
                    <p className="text-center text-zinc-600 dark:text-zinc-400 mb-8 text-lg">
                        Have a project in mind or want to collaborate? Feel free to reach out!
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium mb-2"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-zinc-900"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-zinc-900"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-zinc-900"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                            Send Message
                        </button>
                    </form>
                    <div className="mt-12 text-center">
                        <div className="flex justify-center gap-6">
                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://twitter.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
