import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@radix-ui/react-accordion";
import { Label } from "@radix-ui/react-label";
import { Link } from "react-router-dom";
import { CircleUser, Package, Settings, CreditCard, Gift, Star, Bell, Heart, LogOut } from "lucide-react";

function UserProfile() {
  document.title='My Profile'
  return (
    <div className="flex min-h-screen bg-primary text-text">
      {/* Sidebar */}
      <div className="w-64 border-r lg:w-1/4 md:w-2/5 sm:w-full">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

            <span>Hello</span>
          </div>
        </div>
        <nav className="p-4 space-y-6">
          {/* Sidebar Links */}
          <Link
            href="#"
            className="flex items-center gap-2 px-2 py-1.5 text-sm text-text hover:text-blue-600"
          >
            <Package className="w-4 h-4" />
            MY ORDERS
          </Link>
          <div className="space-y-1">
            <Link
              href="#"
              className="flex items-center gap-2 px-2 py-1.5 text-sm text-blue-600 font-medium"
            >
              <Settings className="w-4 h-4" />
              ACCOUNT SETTINGS
            </Link>
            <Link href="#" className="block px-4 py-1.5 text-sm text-blue-600">
              Profile Information
            </Link>
            <Link href="#" className="block px-4 py-1.5 text-sm text-text">
              Manage Addresses
            </Link>
            <Link href="#" className="block px-4 py-1.5 text-sm text-text">
              PAN Card Information
            </Link>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 px-2 py-1.5 text-sm text-text">
              <CreditCard className="w-4 h-4" />
              PAYMENTS
            </div>
            <Link href="#" className="flex items-center justify-between px-4 py-1.5 text-sm text-text">
              Gift Cards
              <span className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">₹0</span>
            </Link>
            <Link href="#" className="block px-4 py-1.5 text-sm text-text">
              Saved UPI
            </Link>
            <Link href="#" className="block px-4 py-1.5 text-sm text-text">
              Saved Cards
            </Link>
          </div>
          
          <div>
            <Link href="#" className="flex items-center gap-2 px-2 py-1.5 text-lg text-red-600 hover:text-red-700">
              <LogOut className="w-4 h-4" />
              Logout
            </Link>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-secondary">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-lg font-medium">Personal Information</h1>
            <button className="text-sm text-blue-600">Edit</button>
          </div>

          <div className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="mt-1 block w-full rounded-md border bg-primary border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="mt-1 block w-full rounded-md border bg-primary border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
              />
            </div>

            {/* Gender Selection */}
            <div>
              <div className="mb-2">Your Gender</div>
              <div className="flex gap-5">
                <div className="flex items-center space-x-2">
                  <input type="radio" value="male" id="male" name="gender" />
                  <Label htmlFor="male">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" value="female" id="female" name="gender" />
                  <Label htmlFor="female">Female</Label>
                </div>
              </div>
            </div>

            {/* Email Address */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div>Email Address</div>
                <button className="text-sm text-blue-600">Edit</button>
              </div>
              <input
                type="email"
                className="mt-1 block w-full md:w-3/6 rounded-md border bg-primary border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div>Mobile Number</div>
                <button className="text-sm text-blue-600">Edit</button>
              </div>
              <input
                type="tel"
                defaultValue=""
                className="mt-1 block w-full md:w-3/6 rounded-md border bg-primary border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
              />
            </div>

            {/* FAQs */}
            <div className="mt-8">
              <h2 className="text-lg font-medium mb-4 text-text">FAQs</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    What happens when I update my email address (or mobile number)?
                  </AccordionTrigger>
                  <AccordionContent>
                    Your login email id (or mobile number) changes, likewise. You&apos;ll receive all your account
                    related communication on your updated email address (or mobile number).
                  </AccordionContent>
                </AccordionItem>
                {/* More Accordion Items */}
              </Accordion>
            </div>

            {/* Account Actions */}
            <div className="space-y-2 mt-8">
              <button className="text-blue-600 hover:underline block">Deactivate Account</button>
              <button className="text-red-600 hover:underline block">Delete Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
