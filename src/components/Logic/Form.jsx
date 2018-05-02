import React, {Component} from 'react';
import {FormControl} from 'material-ui/Form';
import {InputLabel} from 'material-ui/Input';
import {MenuItem} from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
import {TextField, Select, Button} from 'material-ui';

const styles = theme => ({
    formControl: {
        width: 300
    }
});

class Form extends Component{
    constructor(props) {
        super(props);
        this.state = this.getInitState();
    }

    getInitState() {
        const {exercise} = this.props;
        return exercise? exercise : {
            title: '',
            description: '',
            muscles: '',
        };
    }

    componentWillReceiveProps({exercise}) {
        this.setState({
            ...exercise
        });
    }

    handleSubmit() {
        // TODO: Validations
        const {onSubmit} = this.props;
        onSubmit({
            id: this.state.title.toLowerCase().replace(/ /g, '-'),
            ...this.state,
        });
        this.setState(this.getInitState());
        //this.handleClose();
    }

    handleChange (name, {target: {value}}) {
        this.setState({
            ...this.state.exercise,
            [name]: value,
        });
    };

    render() {
        const {title, description, muscles} = this.state;
        const {
            classes,
            categories,
            exercise,
        } = this.props;
        return (
            <form action="">
                <TextField
                    label="Título"
                    value={title}
                    onChange={(e) => this.handleChange('title', e)}
                    margin="normal"
                    className={classes.formControl}
                />
                <br />
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="muscles">Muscle</InputLabel>
                    <Select
                        value={muscles}
                        onChange={(e) => this.handleChange('muscles', e) }
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {categories.map(category =>
                            <MenuItem key={category} value={category}>{category}</MenuItem>
                        )}
                    </Select>
                </FormControl>
                <br />
                <TextField
                    label="Descripción"
                    multiline
                    rowsMax="4"
                    value={description}
                    onChange={(e) => this.handleChange('description', e)}
                    margin="normal"
                    className={classes.formControl}/>
                <br />
                <Button onClick={() => this.handleSubmit() } color="primary" variant="raised">
                    {exercise? "Edit" : "Create"}
                </Button>
            </form>
        );
    }
}
export default withStyles(styles)(Form);