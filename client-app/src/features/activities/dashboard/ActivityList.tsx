import React from 'react'
import { Button, Item, Label, Segment } from 'semantic-ui-react'
import { Activity } from '../../../app/modules/activity'

interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityList(props: Props) {
    const {activities, selectActivity, deleteActivity} = props;
    return (
        <Segment>
            <Item.Group divided>
                {activities.map(activity => { 
                    const { id, title, date, description, category, city, venue } = activity;
                    return (
                        <Item key={id}>
                        <Item.Content>
                            <Item.Header as="a">
                                {title}
                            </Item.Header>
                            <Item.Meta>
                                {date}
                            </Item.Meta>
                            <Item.Description>
                                <div>{description}</div>
                                <div>{city}, {venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectActivity(activity.id)} floated="right" content="View" color="blue" />
                                <Button onClick={() => deleteActivity(activity.id)} floated="right" content="Delete" color="red" />
                                <Label basic content={category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                    )                 
                })}
            </Item.Group>
        </Segment>
    )
}
