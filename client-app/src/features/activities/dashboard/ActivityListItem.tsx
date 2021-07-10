import React, { SyntheticEvent, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Item, Label } from 'semantic-ui-react';
import { Activity } from '../../../app/modules/activity';
import { useStore } from '../../../app/stores/store';

interface Props {
    activity: Activity
}
export default function ActivityListItem({activity}: Props) {
    const { id, title, date, description, category, city, venue } = activity;

    const {activityStore} = useStore();
    const {deleteActivity, loading} = activityStore;

    const [target, setTarget] = useState('');

    const handleActivityDelete = (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

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
                    <Button as={Link} to={`/activities/${activity.id}`} floated="right" content="View" color="blue" />
                    <Button 
                        name={activity.id}
                        loading={loading && target === activity.id} 
                        onClick={(e) => handleActivityDelete(e, activity.id)} 
                        floated="right" 
                        content="Delete" 
                        color="red" 
                    />
                    <Label basic content={category} />
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}
