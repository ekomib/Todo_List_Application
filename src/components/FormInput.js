import React from 'react';

export default class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleUploader = this.handleUploader.bind(this);
    this.state = {
      error: false,
    };
  }

  handleUploader(e) {
    e.preventDefault();
    let option = e.target.elements.option.value.trim();

    // option = option[0].toUpperCase() + option.slice(1).toLowerCase();

    e.target.elements.option.value = '';
    const error = this.props.handleUpload(option);

    this.setState(() => ({ error }));
    //OR
    // this.setState(() => {
    //   return { error };
    // });
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleUploader}>
          <input type="text" name="option" />
          <button>{this.props.formBtn}</button>
        </form>
      </div>
    );
  }
}
