import React from "react";
import { Link, Head } from '@inertiajs/inertia-react';

const HomePage = (props) => {
  
    return(
        <div className="flex justify-center items-center min-h-screen bg-slade-50">
            <Head title={props.title} />
                <div className="">
                    {
                        props.news ? props.news.map((data, i) => {
                            return (
                                <div key={i} className="p-4 m-2 bg-white text-black shadow-md border rounded-sm">
                                    <p className="text-2xl">{data.title}</p>
                                    <p>{data.description}</p>
                                    <p className="text-sm">{data.category}</p>
                                    <p className="text-sm">{data.author}</p>
                                </div>
                            )
                        }) : <p>Data belum tersedia!</p>
                    }
                </div>
        </div>
    )
}

export default HomePage;