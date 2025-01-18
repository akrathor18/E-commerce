import { useState } from "react";

function SignUp(params) {
    const [isVisible, setIsVisible] = useState(true); // State to toggle modal visibility
  const [activeTab, setActiveTab] = useState("login"); // State to switch between Log In and Sign Up

  // Function to toggle the modal
  const handleCloseClick = () => {
    setIsVisible(false);
  };

  // Function to set active tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    isVisible && (
      <section>
        <div className="mx-auto w-full max-w-3xl px-5 py-16 md:px-10 md:py-20">
          <div className="relative mx-auto max-w-xl bg-gray-100 px-8 py-12 text-center">
            {/* Close Button */}
            <svg
              className="absolute top-3 right-3 sm:top-7 sm:right-7 cursor-pointer"
              onClick={handleCloseClick}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.25 5.25L18.75 18.75"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.25 18.75L18.75 5.25"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            {/* Buttons */}
            <div className="max-w-60 mx-auto flex justify-between mb-10">
              <button
                className={`text-xl font-bold md:text-2xl pb-4 px-2 cursor-pointer ${activeTab === "login" ? "border-b-2 border-black" : "text-gray-500"}`}
                onClick={() => handleTabClick("login")}
              >
                Log In
              </button>
              <button
                className={`text-xl font-bold md:text-2xl pb-4 px-2 cursor-pointer ${activeTab === "signup" ? "border-b-2 border-black" : "text-gray-500"}`}
                onClick={() => handleTabClick("signup")}
              >
                Sign Up
              </button>
            </div>
            <div className="mx-auto w-full max-w-md">
              {/* Form */}
              <div className="mx-auto mb-4 max-w-md pb-4">
                <form name="wf-form-password" method="get">
                  <div className="relative flex flex-col">
                    <div className="font-bold mb-1 text-left">Email</div>
                    <input
                      type="email"
                      className="mb-6 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black placeholder:text-black"
                      placeholder="Email Address"
                      required=""
                    />
                  </div>
                  <div className="relative mb-4">
                    <div className="font-bold mb-1 text-left">Password</div>
                    <input
                      type="password"
                      className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black placeholder:text-black"
                      placeholder="Password (min 8 characters)"
                      required=""
                    />
                  </div>

                  <label className="mb-6 flex items-center justify-start pb-12 md:mb-10 lg:mb-1">
                    <input
                      type="checkbox"
                      name="checkbox"
                      className="float-left mr-2"
                    />
                    <span
                      className="inline-block cursor-pointer text-sm"
                      htmlFor="checkbox"
                    >
                      I agree to receive market lorem ipsum dolor from Flowspark
                    </span>
                  </label>
                  <input
                    type="submit"
                    value="Join Flowspark"
                    className="inline-block w-full cursor-pointer items-center rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
                  />
                </form>
              </div>
              <p className="text-sm max-w-80 mx-auto">
                By proceeding, you agree to Flowspark <span> </span>
                <a href="#" className="font-bold underline">
                  Terms of Use & Privacy Policy.
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  );
}

export default SignUp