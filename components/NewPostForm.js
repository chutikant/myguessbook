import React from 'react'
class NewPostForm extends React.Component {

    state = {
        inputValue: '',
        textareaValue: ''
    }

    handleInputChange = (e) => {
        this.setState({inputValue: e.target.value})
    }
    handleTextareaChange = (e) => {
        this.setState({textareaValue: e.target.value})
    }
    //ถ้าไม่มี e มันจะ relaod page
    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.inputValue == '' || this.state.textareaValue == '')
        {
            alert('Please fill value');
            return false
        } 
        this.props.onCreatePost({
            title: this.state.inputValue,
            content: this.state.textareaValue
        })
        this.setState({
            inputValue: '',
            textareaValue:''
        })
    }

    render() {
        return (

            <div>
                <h4>New Post Form</h4>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            value={this.state.inputValue}
                            onChange={this.handleInputChange}
                            type="text"
                            name="create-title"
                            placeholder="Title" />
                    </div>
                    <div>
                        <textarea value={this.state.textareaValue} onChange={this.handleTextareaChange}/>
                    </div>
                    <div>
                        <button type="submit" >create form</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default NewPostForm