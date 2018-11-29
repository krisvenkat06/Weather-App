import React, { Component } from 'react';
import './SearchCityComponent.css'
class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };

    static defaultProps = {
    }
    render() {
        return (
            <div className="search-panel">
                <div className="form-group">
                  <input type="text" placeholder="Search City.."
                    className="form-control searchinput" name="cityInput" id="" aria-describedby="helpId"/>
                  <button type="button" className="btn btn-primary icon">Search</button>
                </div>
            </div>
        );
    }
}

export default SearchComponent;