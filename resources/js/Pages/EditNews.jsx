import React, {Fragment} from "react";
import { Link, Head } from '@inertiajs/inertia-react';
import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia";

class EditNews extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        formNews: {
            id: '',
            title: '',
            description: '',
            category: '',
        },
        isNotif: false
    }

    componentDidMount () {
        this.setState({
            formNews: {
                id: this.props.myNews.id,
                title: this.props.myNews.title,
                description: this.props.myNews.description,
                category: this.props.myNews.category,
            },
        })
        return;
    }

    
    handleFormChange = (event) => {
        let News = {...this.state.formNews};

        News[event.target.name] = event.target.value;

        this.setState({
            formNews: News
        })
    }

    handleSubmit = () => {
        Inertia.put('/news/update', this.state.formNews)
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
        return(
            <div className="min-h-screen bg-slate-50">
                <Head title={this.props.title} />
                <Navbar user={this.props.auth.user} />
                   
                    <div className="card w-full bg-base-100 shadow-xl m-2">
                        <div className="card-body">
                            <input type="text" defaultValue={this.state.formNews.title} onChange={this.handleFormChange} name="title" placeholder="Title" className="input input-bordered w-full m-2" />
                            <input type="text" defaultValue={this.state.formNews.description}  onChange={this.handleFormChange} name="description"  placeholder="Description" className="input input-bordered w-full m-2" />
                            <input type="text" defaultValue={this.state.formNews.category} onChange={this.handleFormChange} name="category" placeholder="Category" className="input input-bordered w-full m-2" />
                            <button className='btn btn-primary m-2' onClick={this.handleSubmit}>Update</button>
                        </div>
                    </div>
        
            </div>
        )
    }
}

export default EditNews;