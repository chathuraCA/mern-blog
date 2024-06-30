import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex flex-col max-w-3xl gap-5 p-3 mx-auto md:flex-row md:items-center">
        <div className="flex-1">
          <Link className="text-4xl font-bold dark:text-white" to="/">
            <span className="px-2 py-1 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
              Chathura
            </span>
            Blog
          </Link>
          <p className="mt-5 font-bold">
            This project is a demo project. You can sign up with your email and
            password and google
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your Username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput type="text" placeholder="Email" id="email" />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput type="password" placeholder="Password" id="password" />
            </div>
<Button gradientDuoTone='purpleToPink' type="submit">Sign up</Button>
          </form>
          <div className="flex gap-2 mt-5 text-sm">
<span>Have and accout ?</span>
<Link to='/sign-in' className="text-blue-500">
Sign In
</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
