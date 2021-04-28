import React from 'react';
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
                <form onSubmit={this.onSubmit} className="ArgoContainer-form">
                    <h3>
                        Ajouter un(e) argonaute
                    </h3>
                    <div className="ArgoContainer-addArgo">
                        <label>
                            Veuillez saisir un nom :
                        </label>
                        <input
                        placeholder="Charalampos"
                        name="name"
                        id="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.onChange}
                        />
                    </div>
                    <div className="ArgoContainer-addArgo-button">
                        <button>
                            Ajouter
                        </button>
                    </div>
                </form>
                <div className="ArgoList-container">
                    <ArgoList />
                </div>
            </div>
        )
    }
}