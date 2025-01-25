import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@radix-ui/react-accordion";
import { Label } from "@radix-ui/react-label";
import { Link } from "react-router-dom";
import { CircleUser, Package, Settings, CreditCard, Gift, Star, Bell, Heart, LogOut } from "lucide-react";

function UserProfile() {
  return (
    <div className="flex min-h-screen bg-primary text-text">
      {/* Sidebar */}
      <div className="w-64 border-r lg:w-1/4 md:w-2/5 sm:w-full">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8mIcdPL2evdnmKKhzL94d0dvZXBq0M.png"
              alt="User avatar"
              className="rounded-full"
              width={32}
              height={32}
            />
            <span>Hello</span>
          </div>
        </div>
        <nav className="p-4 space-y-6">
          {/* Sidebar Links */}
          <Link
            href="#"
            className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-700 hover:text-blue-600"
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
            <Link href="#" className="block px-4 py-1.5 text-sm text-gray-700">
              Manage Addresses
            </Link>
            <Link href="#" className="block px-4 py-1.5 text-sm text-gray-700">
              PAN Card Information
            </Link>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-700">
              <CreditCard className="w-4 h-4" />
              PAYMENTS
            </div>
            <Link href="#" className="flex items-center justify-between px-4 py-1.5 text-sm text-gray-700">
              Gift Cards
              <span className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">₹0</span>
            </Link>
            <Link href="#" className="block px-4 py-1.5 text-sm text-gray-700">
              Saved UPI
            </Link>
            <Link href="#" className="block px-4 py-1.5 text-sm text-gray-700">
              Saved Cards
            </Link>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-700">
              <Gift className="w-4 h-4" />
              MY STUFF
            </div>
            <Link href="#" className="block px-4 py-1.5 text-sm text-gray-700">
              My Coupons
            </Link>
            <Link href="#" className="block px-4 py-1.5 text-sm text-gray-700">
              My Reviews & Ratings
            </Link>
            <Link href="#" className="block px-4 py-1.5 text-sm text-gray-700">
              All Notifications
            </Link>
            <Link href="#" className="block px-4 py-1.5 text-sm text-gray-700">
              My Wishlist
            </Link>
          </div>
          <div>
            <Link href="#" className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-700 hover:text-blue-600">
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
