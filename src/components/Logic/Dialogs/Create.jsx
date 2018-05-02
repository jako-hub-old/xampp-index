import React, {Fragment, Component} from 'react';
import {Dialog, Button} from 'material-ui';
import {Add} from 'material-ui-icons';
import Form from '../Form.jsx';
import {
    DialogContent,
    DialogContentText,
    DialogTitle
} from 'material-ui/Dialog';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open : false,
        };
    }

    handleClose() {
        this.setState({open: false});
    }

    openDialog() {
        this.setState({open: true});
    }

    handleFormSubmit(exercise) {
        const {onSubmit} = this.props;
        onSubmit(exercise);
        this.handleClose();
    }

    render() {
        const {open} = this.state,
              {muscles: categories, onSubmit} = this.props;
        return (
            <Fragment>
                <Button variant="fab" mini onClick={() => this.openDialog() }>
                    <Add/>
                </Button>
                <Dialog
                    open={open}
                    onClose={() => this.handleClose() }
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Create Exercise</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please fill form bellow
                        </DialogContentText>
                        <Form categories={categories} onSubmit={this.handleFormSubmit.bind(this)}/>
                    </DialogContent>
                </Dialog>
            </Fragment>
        );
    }
}