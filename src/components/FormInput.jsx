import React, { useState } from 'react'
function FormInput() {
    return (
        <div>
            <div class=" bg-gray-100 flex items-center justify-center">
                <div class="container max-w-screen-lg mx-auto">
                    <div>
                        <h2 class="font-semibold text-xl text-gray-600">My website</h2>
                        <p class="text-gray-500 mb-6">samnangldn@gmail.com</p>

                        <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div class="text-gray-600">
                                    <p class="font-medium text-lg">Personal Details</p>
                                    <p>Please fill out all the fields.</p>
                                </div>

                                <div class="lg:col-span-2">
                                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        <div class="md:col-span-5">
                                            <label for="full_name">Full Name</label>
                                            <input type="text" name="name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                                        </div>

                                        <div class="md:col-span-5">
                                            <label for="email">Gender</label>
                                            <input type="text" name="gender" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                                        </div>

                                        <div class="md:col-span-5">
                                            <label for="email">Age</label>
                                            <input type="text" name="gender" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                        </div>


                                        <div class="md:col-span-5 text-right">
                                            <div class="inline-flex items-end">
                                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Submit</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormInput
