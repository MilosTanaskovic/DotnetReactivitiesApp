import React from 'react'
import { Button, Item, Label, Segment } from 'semantic-ui-react'
import { Activity } from '../../../app/modules/activity'

interface Props {
    activities: Activity[];
}

export default function ActivityList({activities}: Props) {
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
                                <Button floated="right" content="View" color="blue" />
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
