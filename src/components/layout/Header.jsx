import React from 'react';
import {AppBar, Toolbar, Typography} from 'material-ui';
import {purple} from 'material-ui/colors';
import Create from '../Logic/Dialogs/Create.jsx';


export default ({muscles, onCreateExercise}) =>
    <AppBar position="static" style={{backgroundColor: purple[500]}}>
        <Toolbar>
            <Typography variant="title" color="inherit" style={{flex:1}}>
                Xampp dashboard
            </Typography>
            <Create muscles={muscles} onSubmit={onCreateExercise} />
        </Toolbar>
    </AppBar>