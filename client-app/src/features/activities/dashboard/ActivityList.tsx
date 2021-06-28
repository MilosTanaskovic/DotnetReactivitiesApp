import { observer } from 'mobx-react-lite';
import React, {SyntheticEvent, useState} from 'react'
import { Button, Item, Label, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';

export default observer(function ActivityList() {
    const {activityStore} = useStore();
    const {deleteActivity, activitiesByDate, loading} = activityStore;

    const [target, setTarget] = useState('');

    const handleActivityDelete = (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

    return (
        <Segment>
            <Item.Group divided>
                {activitiesByDate.map(activity => { 
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
                                <Button onClick={() => activityStore.selectActivity(activity.id)} floated="right" content="View" color="blue" />
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
                })}
            </Item.Group>
        </Segment>
    )
});
