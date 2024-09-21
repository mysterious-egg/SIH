import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

function ClientLoginform() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { loginWithRedirect } = useAuth0();

    const submit = async (data) => {
        localStorage.setItem("Role", "Client");
        localStorage.setItem("Email", data.email);

        try {
            const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/ClientLogin`, data);
            localStorage.setItem("Token", res.data.token);
            // Redirect after successful login
            navigate("/DesignPage"); // Change this to your desired route
        } catch (err) {
            alert(err.response.data || "Login failed");
        }
    };

    async function handleLoginWithRedirect() {
        localStorage.setItem("Role", "Client");
        await loginWithRedirect();
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Client Login</h1>
                <button 
                    onClick={handleLoginWithRedirect} 
                    className="flex items-center justify-center bg-blue-500 text-white py-2 rounded-md w-full mb-4"
                >
                    {/* Add Google logo here if desired */}
                    <h3>Login with Google</h3>
                </button>
                <p className="text-center mb-4">Don't have an account? <Link to="/Signup" className="text-blue-500">Signup</Link></p>
                <form onSubmit={handleSubmit(submit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input 
                            type='email' 
                            {...register("email", { required: "Email is required" })} 
                            placeholder="Enter Email" 
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input 
                            type='password' 
                            {...register("password", { required: "Password is required" })} 
                            placeholder="Enter Password" 
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>
                    <button 
                        type='submit' 
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Log In
                    </button>
                </form>
            </div>
            {/* You can include an image or other elements here */}
            {/* <div>
                <img src="path_to_your_image" alt="Client form" />
            </div> */}
        </div>
    );
}

export default ClientLoginform;
