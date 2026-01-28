import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'

const ContactSection = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = `New Portfolio Message from ${formData.name}`;
        const body = `Name: ${formData.name} Email: ${formData.email} Message:${formData.message}`;
        window.location.href = `mailto:shashikantshirsath08@gmail.com?subject=${
            encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  return (
    <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Get In <span className='text-primary'> Touch</span></h2>

            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                Have a project in mind or just want to say hello? Feel free to reach out to me via email
                , or fill out the form below.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className='space-y-8'>
                    <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>

                    <div className='space-y-6 justify-center'>
                        {/* email */}
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Mail className='h-6 w-6 text-primary'/> {" "}
                            </div>
                            <div>
                                <h4 className='font-medium text-start'> Email</h4>
                                <a 
                                    href="mailto:shashikantshirsath08@gmail.com"
                                    className='text-muted-foreground hover:text-primary transition-colors'>
                                    shashikantshirsath08@gmail.com
                                </a>
                            </div>
                        </div>
                        {/* phone */}
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Phone className='h-6 w-6 text-primary'/> {" "}
                            </div>
                            <div>
                                <h4 className='font-medium text-start'> Phone</h4>
                                <a 
                                    href="tel:+919356689459"
                                    className='text-muted-foreground hover:text-primary transition-colors'>
                                    +91 9356689459
                                </a>
                            </div>
                        </div>
                        {/* location */}
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <MapPin className='h-6 w-6 text-primary'/> {" "}
                            </div>
                            <div>
                                <h4 className='font-medium text-start'> Location</h4>
                                <p className='text-muted-foreground hover:text-primary transition-colors'>
                                    Pune, Maharashtra, India
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* social media */}
                    <div className='pt-8'>
                        <h4 className='font-medium mb-4'>Connect With Me</h4>
                        <div className='flex space-x-4 justify-center'>
                            <a href='https://linkedin.com/in/ShashikantShirsath' target='_blank'>
                                <Linkedin />
                            </a>
                            <a href='https://github.com/ShashikantShirsath' target='_blank'>
                                <Github />
                            </a>
                            <a href='#'>
                                <Instagram />
                            </a>
                        </div>
                    </div>
                </div>
                {/* contact form */}
                <div className='bg-card p-8 rounded-lg shadow-xs'>
                    <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>

                    <form className='space-y-6' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className='block text-sm font-medium mb-2 text-left'> Your Name</label>
                            <input 
                                type="text" 
                                id='name' 
                                name='name' 
                                required 
                                className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                                placeholder='John Doe'
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className='block text-sm font-medium mb-2 text-left'> Your Email</label>
                            <input 
                                type="text" 
                                id='email' 
                                name='email' 
                                required 
                                className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                                placeholder='example@example.com'
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className='block text-sm font-medium mb-2 text-left'> Your Message </label>
                            <textarea 
                                id='message' 
                                name='message' 
                                required 
                                className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                                placeholder="Hello, I'd like to get in touch with you."
                                onChange={handleChange}
                            />
                        </div>

                        <button
                            type='submit'
                            className={cn("cosmic-button w-full flex items-center justify-center gap-2 hover:cursor-pointer")}
                        >
                            Send Message
                            <Send className='h-5 w-5'/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactSection
