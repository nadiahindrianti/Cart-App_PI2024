import React from 'react';

function Footer({  }) {
    return (
        <footer className="bg-darkblue text-white p-6 mt-8">
            <div className="flex justify-between items-center">
                <span className="text-rosegold font-medium">© 2024 StoreMe. All rights reserved.</span>
                <div className="space-x-4">
                    <a href="#" className="text-yellow-400 hover:text-yellow-300">Privacy Policy</a>
                    <a href="#" className="text-yellow-400 hover:text-yellow-300">Terms of Service</a>
                    <a href="#" className="text-yellow-400 hover:text-yellow-300">Contact Us</a>
                </div>
            </div>
        </footer>

    );
}

export default Footer;