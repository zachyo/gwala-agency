import React, { useState } from "react";
import { Link } from "react-router-dom";

import ImageLight from "../assets/img/login-office.jpeg";
import ImageDark from "../assets/img/login-office-dark.jpeg";
import { Label, Input, Button } from "@windmill/react-ui";
// import { useLoginAgg } from "../services/auth/path";
import { toast } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import newEndpoints from "../api/auth";
import Spinner from "../components/Spinner/Spinner";
import { useAuthContext } from "../context";

function Login() {
  const formEmptyState = {
    email: "",
    password: "",
  };
  const [formState, setFormState] = useState(formEmptyState);
  const history = useHistory();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const { loginUser } = useAuthContext();

  const onSubmit = async () => {
    setIsLoggingIn(true);

    try {
      const { data } = await newEndpoints.login({
        email: formState.email,
        password: formState.password,
        // email: "annyaele@gmail.com",
        // password: "testPassword",
      });
      console.log(data);
      loginUser(data.data.token, data.data);
      toast.success(data.message);
    } catch (error) {
      if (error.code === "ERR_NETWORK") {
        toast.error("Network error");
      } else {
        toast.error(error.response.data.message);
      }
      setIsLoggingIn(false);
      return;
    }
    setIsLoggingIn(false);

    history.push(`/app/dashboard`);
  };
  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Login
              </h1>
              <Label>
                <span>Email</span>
                <Input
                  className="mt-1"
                  type="email"
                  placeholder="john@doe.com"
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                />
              </Label>

              <Label className="mt-4">
                <span>Password</span>
                <Input
                  className="mt-1"
                  type="password"
                  placeholder="***************"
                  onChange={(e) =>
                    setFormState({ ...formState, password: e.target.value })
                  }
                />
              </Label>

              <Button
                className="mt-4 flex gap-3 items-center justify-center"
                block
                onClick={() => {
                  console.log(formState);
                  onSubmit();
                }}
              >
                Log in
                {isLoggingIn && <Spinner />}
              </Button>

              <hr className="my-8" />

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/forgot-password"
                >
                  Forgot your password?
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Login;
