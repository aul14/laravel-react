import React, {Fragment} from "react";
import { Link, Head } from '@inertiajs/inertia-react';
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Homepage/Newslist";
import Paginator from "@/Components/Homepage/Paginator";



const HomePage = (props) => {
    return(
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar />
                <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-3">
                    <NewsList news={props.news.data} />
                </div>
                <div className="flex justify-center items-center mt-4">
                    <Paginator meta={props.news.meta}  />
                </div>
        </div>
    )
}

export default HomePage;