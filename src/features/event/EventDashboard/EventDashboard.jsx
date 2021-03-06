import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import cuid from 'cuid';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import { createEvent, deleteEvent, updateEvent } from '../eventActions'
import LoadingComponent from "../../../app/layouts/LoadingComponent";
import EventActivity from "../EventActivity/EventActivity"

const mapState = (state) => ({
	events: state.events,
	loading: state.async.loading
})

const actions = {
	deleteEvent
}

class EventDashboard extends Component {

	handleDeleteEvent = eventId => () => {
		this.props.deleteEvent(eventId);
	}

	render() {
		const { events, loading } = this.props;
		if (loading) return <LoadingComponent inverted={true}/>
		return (
			<Grid>
				<Grid.Column width={10}>
					<EventList deleteEvent={this.handleDeleteEvent} events={events}/>
				</Grid.Column>
				<Grid.Column width={6}>
					<EventActivity/>
				</Grid.Column>
			</Grid>
		);
	}
}

export default connect(mapState, actions)(EventDashboard);