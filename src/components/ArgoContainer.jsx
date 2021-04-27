import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './argostyle.css';
import ArgoList from './ArgoList';

export default class ArgoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            user: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ name: e.target.value });
    };

    onSubmit(e) {
        e.preventDefault();
        const name = this.state.name;
        axios.post('http://localhost:3001/argo', {name})
            .then(res => res.data)
            .then(res => {
                alert(`New member added with success !`);
            })
            .catch(e => {
                console.error(e);
                alert(`Error while adding a member : ${e.message}`);
            }, []);
    }

    render() {
        return (
            <div className="ArgoContainer">
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>
                            Ajouter un(e) argonaute
                        </label>
                        <input
                        placeholder="Nom de l'argonaute"
                        name="name"
                        id="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.onChange}
                        />
                    </div>
                    <button>
                        Ajouter
                    </button>
                </form>
                <div>
                    <ArgoList />
                </div>
            </div>
        )
    }
}