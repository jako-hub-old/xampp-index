import React, {Component} from 'react';
import {Paper, Tabs} from 'material-ui';
import {Tab} from 'material-ui/Tabs';
import {muscles} from "../../store";

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab : 0
        };
    }
    render() {
        const {category, muscles, onSelected} = this.props;
        const index = category
            ? muscles.findIndex(group => group === category) + 1 : 0;
        const onIndexSelect = (e, index) => {
            return onSelected(index === 0? '' : muscles[index - 1]);
        };

        return (
            <Paper indicator="tab-1">
                <Tabs
                    onChange={ onIndexSelect }
                    value={index}
                    centered
                    indicatorColor="primary"
                    >
                    <Tab label="All"/>
                    {muscles.map(group =>
                        <Tab key={group} label={group}/>
                    )}
                </Tabs>
            </Paper>
        );
    }
}
