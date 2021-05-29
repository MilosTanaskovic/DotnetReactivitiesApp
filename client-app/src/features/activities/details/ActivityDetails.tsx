import React from 'react'
import { Button, Card, Icon, Image } from 'semantic-ui-react'
import { Activity } from '../../../app/modules/activity'

interface Props {
    activity: Activity;
    cancelSelectActivity: () => void;
}

export default function ActivityDetails(props: Props) {
    const { activity, cancelSelectActivity } = props
    const { category, title, date, description } = activity;
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${category}.jpg`} />
            <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>
                <span>{date}</span>
            </Card.Meta>
            <Card.Description>
                {description}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths="2">
                    <Button basic color="blue" content="Edit" />
                    <Button onClick={cancelSelectActivity} basic color="grey" content="Cancel" />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}
