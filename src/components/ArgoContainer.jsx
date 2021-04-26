import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default class ArgoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ name: e.target.value });
    };

    onSubmit(e) {
        e.preventDefault();
        const argoName = {
            name: this.state.name
        };
        axios.post('/', { argoName })
            .then(res => {
                res.json()
            });
    }

    render() {
        return (
            <div>
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
            </div>
        )
    }
}