import React from "react";
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";
import Debugging from "./Debugging";
import Fifteen from "./Fifteen";
import PairHelp from "./PairHelp";
import TicketDetail from "./TicketDetail";
import EditTicketForm from "./EditTicketForm";

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 0,
      mainTicketList: [],
      selectedTicket: null,
      editing: false,
    };
  }

  handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({
      mainTicketList: newMainTicketList,
      pageNumber: 0, // determine which page shows after adding the help req
    });
  };

  handleClick = () => {
    if (this.state.selectedTicket != null) {
      this.setState((prevState) => ({
        pageNumber: 0,
        selectedTicket: null,
        editing: false,
      }));
    } else if (this.state.pageNumber < 4) {
      this.setState((prevState) => ({
        pageNumber: parseInt(prevState.pageNumber) + 1,
      }));
    } else {
      this.setState({
        pageNumber: 0,
      });
    }
  };

  handleClickNo = () => {
    this.setState({
      pageNumber: 0,
    });
  };

  /*
  0: ticket list, button: "add ticket" -> 1
  1: Question one, button: "yes" -> 2
  2: question two, button: "yes" -> 3
  3: question three, button: "yes" -> 4
  4: form, button: "ticket list" -> 0
  */

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.mainTicketList.filter(
      (ticket) => ticket.id === id
    )[0];
    this.setState({ selectedTicket: selectedTicket });
  };

  handleDeletingTicket = (id) => {
    const newMainTicketList = this.state.mainTicketList.filter(
      (ticket) => ticket.id !== id
    );
    this.setState({
      mainTicketList: newMainTicketList,
      selectedTicket: null,
    });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleTicketEditingInList = (ticketToEdit) => {
    const editedMainTicketList = this.state.mainTicketList
      .filter((ticket) => ticket.id !== this.state.selectedTicket.id)
      .concat(ticketToEdit);
    this.setState({
      mainTicketList: editedMainTicketList,
      editing: false,
      selectedTicket: null,
    });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let NoButtonText = null;
    if (this.state.editing) {
      currentlyVisibleState = (
        <EditTicketForm
          ticket={this.state.selectedTicket}
          onEditTicket={this.handleTicketEditingInList}
        />
      );
      buttonText = "Return to Ticket List";
    } else if (this.state.selectedTicket != null) {
      currentlyVisibleState = (
        <TicketDetail
          ticket={this.state.selectedTicket}
          onClickingDelete={this.handleDeletingTicket}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = "Return to Ticket List";
    } else if (this.state.pageNumber === 0) {
      currentlyVisibleState = (
        <TicketList
          ticketList={this.state.mainTicketList}
          onTicketSelection={this.handleChangingSelectedTicket}
        />
      );
      buttonText = "Add Ticket";
    } else if (this.state.pageNumber === 1) {
      currentlyVisibleState = <Debugging />;
      buttonText = "Yes";
      NoButtonText = "No";
    } else if (this.state.pageNumber === 2) {
      currentlyVisibleState = <PairHelp />;
      buttonText = "Yes";
      NoButtonText = "No";
    } else if (this.state.pageNumber === 3) {
      currentlyVisibleState = <Fifteen />;
      buttonText = "Yes";
      NoButtonText = "No";
    } else {
      currentlyVisibleState = (
        <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />
      );
      buttonText = "Return to Ticket List";
    }

    if (this.state.pageNumber > 0 && this.state.pageNumber < 4) {
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>{" "}
          {/* new code */}
          <button onClick={this.handleClickNo}>{NoButtonText}</button>{" "}
          {/* new code */}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );
    }
  }
}

export default TicketControl;
