import React, { Component } from 'react'
import './recipeInput.css'

class RecipeInput extends Component {
    static defaultProps = {
        onClose() {},
        onSave() {}
    }

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            instructions: "",
            ingredients: [''],
            img: ''
        };

        this.handleChangeIng = this.handleChangeIng.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleNewIngredient = this.handleNewIngredient.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleChangeIng(e) {}

    handleSubmit(e) {

    }

    handleNewIngredient(e) {

    }

    render() {
        const { title, instructions, img, ingredients } = this.state;
        const {onClose} = this.props;
        let inputs = ingredients.map((ing, i) => (
            <div 
                className = "recipe-form-line"
                key={`ingredient-${i}`}
            >
            <label>{i+1}.
                <input
                    type="text"
                    name={`ingredient-${i}`}
                    value={ing}
                    size={45}
                    autoComplete="off"
                    placeholder="Ingredient"
                    onChange={this.handleChangeIng}
                />
            </label>
            </div>

        ));
        return (
            <div className='recipe-form-container'>
                <form className='recipe-form' onSumbit={this.handleSubmit}>
                    <button
                        type="button"
                        className="close-button"
                        onClick={onClose}
                    >
                    X
                    </button>
                    <div className='recipe-form-line'>
                        <label htmlFor='recipe-title-input'>Title</label>
                        <input
                            id='recipe-title-input'
                            key='title'
                            name='title'
                            type='text'
                            value={title}
                            size={42}
                            autoComplete="off"
                            onChange={this.handleInputChange}
                        />
                        <label
                            htmlFor='recipe-instructions-input'
                            style={{marginTop:'5px'}}
                        >
                            Instructions
                        </label>
                    </div>
                        <textarea
                            key='instructions'
                            id='recipe-instructions-input'
                            type='Instructions'
                            name='instructions'
                            rows='8'
                            cols='50'
                            autoComplete='off'
                            value={instructions}
                            onChange={this.handleInputChange}
                        />
                        
                        {inputs}
                        
                        <button
                            type="button"
                            onClick={this.handleNewIngredient}
                            className="buttons"
                        >
                        +
                        </button>
                        <div className='recipe-form-line'>
                            <label htmlFor='recipe-img-input'>Image Url</label>
                            <input
                                id='recipe-img-input'
                                type='text'
                                placeholder=''
                                name='img'
                                value={img}
                                size={36}
                                autoComplete='off'
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <button
                            type="submit"
                            classname="buttons"
                            style={{alignSelf:'flex-end',marginRight:0}}
                        >
                        SAVE
                        </button>
                </form>
            </div>
        );
    }
}

export default RecipeInput;