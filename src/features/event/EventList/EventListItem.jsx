import React, {Component} from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventListAttend from './EventListAttend';
import { Link } from 'react-router-dom'
import format from 'date-fns/format'
class EventListItem extends Component {
    render() {
		const {event, deleteEvent} = this.props
        return (
            <div>
                <Segment.Group>
                    <Segment>
                        <Item.Group>
                            <Item>
                                <Item.Image size="tiny" circular src={event.hostPhotoURL}/>
                                <Item.Content>
                                    <Item.Header as="a">{event.title}</Item.Header>
                                    <Item.Description>
                                        Hosted by
                                        <a>{event.hostedBy}</a>
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Segment>
                    <Segment>
                        <span>
									 <Icon name="clock"/> {format(event.date, "dddd Do MMMM")} at {' '} 
									 {format(event.date, "HH:mm")}|
                            <Icon name="marker"/> {event.venue}
                            time
                        </span>
                    </Segment>
                    <Segment secondary>
								<List horizontal>
									{event.attendees && event.attendees.map((attendee) => (
										<EventListAttend key={attendee.id} attendee={attendee}/>
									))}
                        </List>
                    </Segment>
						  <Segment clearing>
						  <span>{event.description}</span>
								{/*<Button onClick={onEventEdit(event); console.log(event)} as="a" color="teal" floated="right" content="View"/>*/}
								{/*<Button onClick={function(event){onEventEdit(event); console.log(event)}} as="a" color="teal" floated="right" content="View"/>*/}
								<Button as={ Link } to={`/event/${event.id}`} color="teal" floated="right" content="View"/>
								<Button onClick={deleteEvent(event.id)} as="a" color="red" floated="right" content="Delete"/>
                    </Segment>
                </Segment.Group>
            </div>
        );
    }
}

export default EventListItem;