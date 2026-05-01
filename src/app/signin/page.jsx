"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { GrGoogle } from "react-icons/gr";
import { useEffect, useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa6";
import { Bounce, toast } from "react-toastify";

export default function SignInPage() {
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        document.title = "Sign In | Tile Canvas";
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        // console.log({email, password});

        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: '/',
        });

        if (data) {
            toast.success(`Sign Up Successfully! Welcome ${data.user.name}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        if (error) {
            toast.error(`${error.message}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }

    };

    const handleGoogleSignIn = async () => {
        try {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/" // redirect after login
            });
        } catch (error) {
            toast.error("Google sign-in failed");
        }
    };

    return (
        <Card className="border mx-auto w-full max-w-md py-6 sm:py-8 md:py-10 px-5 sm:px-7 mt-5">
            <h1 className="text-center text-xl sm:text-2xl font-bold">Sign In</h1>

            <Form className="flex w-full mx-auto flex-col gap-4 mt-4" onSubmit={onSubmit}>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }

                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="Enter Your Email" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type={showPassword ? "text" : "password"}
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }

                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <div className="relative w-full">
                        <Input
                            placeholder="Enter your password"
                            className={'w-full'}
                        />

                        {/* 👁 Toggle Icon */}
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                        >
                            {showPassword ? <FaRegEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <Description>
                        Must be at least 8 characters with 1 uppercase and 1 number
                    </Description>
                    <FieldError />
                </TextField>

                <div className="flex flex-col sm:flex-row gap-2">
                    <Button type="submit" className="w-full sm:w-auto">
                        <Check />
                        Sign In
                    </Button>
                    <Button type="reset" variant="secondary" className="w-full sm:w-auto">
                        Reset
                    </Button>
                </div>

                <p className="text-center pt-2 text-xs sm:text-sm md:text-md">Don't have an ID yet! <Link className="text-blue-600 underline cursor-pointer" href={'/signup'}>Register Now!</Link></p>
            </Form>

            <p className="text-center my-3 text-sm sm:text-base">or</p>

            <div>
                <Button onClick={handleGoogleSignIn} className={'w-full'}><GrGoogle /> Sign In with Google</Button>
            </div>
        </Card>
    );
}