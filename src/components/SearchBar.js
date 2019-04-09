import React from 'react';

class SearchBar extends React.Component {
    state ={
        term : ''
    }
    
    onFormSubmit = (e) => { 
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        return(
            <div className="ui segment" onSubmit={(e) => this.onFormSubmit(e)}>
                <form className="ui form">
                    <div className="field">
                        <label>INPUT: </label>
                        <input type="text" onChange={(e) => this.setState({term: e.target.value})} value={this.state.term}/>
                    </div>               
                </form>
            </div>
        );
    }
}
export default SearchBar;