import React from 'react';


function BackToTop() {
    return (
        <div>
            <button 
            className="!fixed bottom-5 right-5  rounded-full bg-red-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition 
            duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
            id="btn-back-to-top">
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                className="h-4 w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
            </svg>
            </button>
            {/*
            <button id="to-top-button" onclick="goToTop()" title="Go To Top"
                className="hidden fixed z-50 bottom-10 right-10 p-4 border-0 w-14 h-14 rounded-full shadow-md bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
                </svg>
                <span className="sr-only">Go to top</span>
            </button>

            <script>
                // Get the 'to top' button element by ID
                var toTopButton = document.getElementById("to-top-button");

                // Check if the button exists
                if (toTopButton) {

                    // On scroll event, toggle button visibility based on scroll position
                    window.onscroll = function() {
                        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                            toTopButton.classList.remove("hidden");
                        } else {
                            toTopButton.classList.add("hidden");
                        }
                    };

                    // Function to scroll to the top of the page smoothly
                    window.goToTop = function() {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    };
                }
            </script>
            */}
        </div>
    )
}


export default BackToTop