import React from 'react';

class createPlaylist extends React.Component{
    
    constructor(props){
        super(props);

        this.state={
            name : "",
            type : "public",
            description : "",

            formState: {
                isFormValid : true,
                isNameValid : true,
                isDescriptionValid : true,
                // isTypeValid : true
            }
        };
        this.onChange= this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    onChange(event){
        let name = event.target.name;
        let updatedState = {};
        updatedState[name] = event.target.value;
        
        this.setState(updatedState)
    }

    validateForm(){
        let newFormState = {
            isFormValid:true,
            isNameValid: true,
            isDescriptionValid: true
        };

        if(!this.state.name){
            newFormState.isNameValid = false;
            newFormState.isFormValid = false;
        }

        if(!this.state.description){
            newFormState.isDescriptionValid = false;
            newFormState.isDescriptionValid = false;
        }

        this.setState({
            formState: newFormState
        });

        return newFormState.isFormValid;
    }

    handleSubmit(event){
        event.preventDefault();
        
        if(this.validateForm()){
            console.log("form is good");
        }else{
            console.log("form is having issue")
        }
    }

    render(){
        return(
         <div>
             <h2>Create New Playlist</h2>
             <hr/>
               
            {
                !this.state.formState.isFormValid &&  
                <div className="alert alert-danger"> Please Fill the form And submit again</div>
            }

             <form onSubmit={this.handleSubmit}>
                  <div className="form-group col-md-5">
                        <label htmlFor="">
                             Playlist Name:
                             <input name="name" 
                              onChange={this.onChange}
                              className= {`form-control ${!this.state.formState.isNameValid && "is-invalid" }`}
                              type="text"
                              />
                        </label>
                        <select name="type" onChange={this.onChange} className="form-control col-md-5">
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                            <option value="unlisted">Unlisted</option>
                        </select>
                 </div>
                 <div className="form-group col-md-5">
                      <label htmlFor="">
                          Description
                           <textarea name="description" 
                           onChange={this.onChange} 
                           cols="30"
                           rows="10"
                           className= {`form-control ${!this.state.formState.isDescriptionValid && "is-invalid" }`}></textarea>
                      </label> 
                      <button type="submit" className="btn btn-secondary">Create Playlist</button>
                 </div>
             </form>
        </div>
        )
    }
}

export default createPlaylist;