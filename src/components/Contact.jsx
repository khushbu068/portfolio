import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5" id="contact">
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-tight  text-orange-500 rounded-md">Contact Me</h2>
      </div>

      <div className="max-w-[800px] mx-auto">
        <div className="mt-6 bg-[#161616] rounded-xl">
          <div className="p-10">
            <form action="https://getform.io/f/bqoorllb" method="POST">
              <div className="grid grid-cols-1 gap-y-6">
             
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                  />
                </div>

                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Write your message here"
                    className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                    rows="4"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="text-xl w-full p-4 font-semibold text-white bg-gradient-to-r from-pink-500 to-orange-500 rounded-md"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
