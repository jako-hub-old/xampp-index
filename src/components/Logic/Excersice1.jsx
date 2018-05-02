import React, {Fragment} from 'react';
import Grid from 'material-ui/Grid';
import {Paper, Typography, List, IconButton} from 'material-ui';
import {ListItem, ListItemText, ListItemSecondaryAction} from 'material-ui/List';
import {Delete, Edit} from 'material-ui-icons';
import Form from './Form.jsx';

const styles = {
    Paper: {
        padding: 20,
        margin: 10,
        height: 500,
        marginBottom: 10,
        overflowY: "auto",
    }
};
export default ({
                    exercices,
                    category,
                    onSelect,
                    deleteExercise,
                    editExercise,
                    handleEdit,
                    cancelEdit,
                    editMode,
                    muscles,
                    exercise,
                    exercise: {
                        id,
                        title= "Welcome!",
                        description= "Please select an exercise from the left panel."
                    }}) =>
    <Grid container>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {exercices.map((group) =>
                    !category || category === group[0]
                    ?
                        <Fragment key={group[0]}>
                            <Typography variant="headline" key={"cat-" + group[0]}>
                                {group[0]}
                            </Typography>
                            <List component="ul">
                                {group[1].map(({id, title}) =>
                                    <ListItem key={id} button onClick={() => onSelect(id)}>
                                        <ListItemText primary={title} />
                                        <ListItemSecondaryAction>
                                            <IconButton onClick={() => editExercise(id) }>
                                                <Edit/>
                                            </IconButton>
                                            <IconButton onClick={() => deleteExercise(id) }>
                                                <Delete/>
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                )}
                            </List>
                        </Fragment>
                    : null
                )}
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {editMode?
                <Fragment>
                    <Form categories={muscles} onSubmit={handleEdit} exercise={exercise} />
                </Fragment>
                :
                <Fragment>
                    <Typography variant="display1">{title}</Typography>
                    <Typography variant="subheading" style={{marginTop:20}}>
                        {description}
                    </Typography>
                </Fragment>
                }
            </Paper>
        </Grid>
    </Grid>