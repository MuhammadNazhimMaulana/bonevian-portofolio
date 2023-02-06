import { Link } from 'react-router-dom';

const Contact = () => {
    return ( 
        <div className="mb-auto mt-4 md:mt-20 text-slate-200 md:flex">
            <div class="md:flex-1">
                <h1 className="text-center text-xl md:text-4xl mt-3 mb-7 font-bold">Contact</h1>
                <p className="ml-7 mb-2">Email: nazhimmaulanamuhammad@gmail.com</p>
                <p className="ml-7 mb-2">Discord: Bone#1357</p>
            </div>

            <div className="md:flex-1 p-8">
                <div className="block mb-6">
                    <label className="block text-slate-200 text-sm font-bold mb-2" for="username">Name</label>
                    <input className="mt-1 block text-primary w-full rounded-md border-gray-300 shadow-sm focus:border-primary" id="username" type="text" placeholder="Username" />
                </div>
                <div className="block mb-6">
                    <label className="block text-slate-200 text-sm font-bold mb-2" for="email">Email</label>
                    <input className="mt-1 block text-primary w-full rounded-md border-gray-300 shadow-sm focus:border-primary" id="email" type="email" placeholder="Email" />
                </div>
                <div className="block mb-6">
                    <label className="block text-slate-200 text-sm font-bold mb-2" for="email">Message</label>
                    <textarea className="mt-1 block w-full rounded-md border-primary shadow-sm focus:border-primary" name="message" id="message" cols="30" rows="5"></textarea>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;