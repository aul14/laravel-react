import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        formNews: {
            title: '',
            description: '',
            category: '',
        },
        isNotif: false
    }

    handleFormChange = (event) => {
        let News = {...this.state.formNews};

        News[event.target.name] = event.target.value;

        this.setState({
            formNews: News
        })
    }

    handleSubmit = () => {
        Inertia.post('/news', this.state.formNews)
        this.setState({
            formNews: {
                title: '',
                description: '',
                category: '',
            },
            isNotif: true
        })
    }

    render() {
        return (
            <AuthenticatedLayout
            auth={this.props.auth}
            errors={this.props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {this.state.isNotif && 
                            <div className="alert alert-success shadow-lg">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>{this.props.flash.message}</span>
                                </div>
                            </div>
                        }
                        <input type="text" value={this.state.formNews.title} onChange={this.handleFormChange} name="title" placeholder="Title" className="input input-bordered w-full m-2" />
                        <input type="text" value={this.state.formNews.description}  onChange={this.handleFormChange} name="description"  placeholder="Description" className="input input-bordered w-full m-2" />
                        <input type="text" value={this.state.formNews.category} onChange={this.handleFormChange} name="category" placeholder="Category" className="input input-bordered w-full m-2" />
                        <button className='btn btn-primary m-2' onClick={this.handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
        )
    }
} 

export default Dashboard;
