import React, { useEffect, useState } from 'react'
import { api } from '../api/api';
export default function TableComponent() {
    const [data, setData] = useState([]);
    const fetchData=()=>{
        api.get("person")
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
         // console.error('Error fetching data:', error);
        });
    }
  useEffect(() => {
     const interval=setInterval(fetchData,5000);
     return ()=>{
        clearInterval(interval)
     }
  }, []);
 // console.log(data);
    return (
        <div><div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table class="min-w-full text-center text-sm font-light">
                            <thead class="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" class="px-6 py-4">Name</th>
                                    <th scope="col" class="px-6 py-4">Gender</th>
                                    <th scope="col" class="px-6 py-4">Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((per=>(
                                        <tr class="border-b dark:border-neutral-500">
                                        <td class="whitespace-nowrap px-6 py-4 font-medium">
                                           {per.name}
                                        </td>
                                        <td class="whitespace-nowrap px-6 py-4">{per.gender}</td>
                                        <td class="whitespace-nowrap px-6 py-4">{per.age}</td>
                                    </tr>
                                    )))
                                }
                              
                    
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div></div>
    )
}
