import React, {Component} from "react";
import * as firebase from "firebase";

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            contacts: []
        }
    }

    componentWillMount() {
        const contactListRef = firebase.database().ref("ContactList");
        contactListRef.on("value", contactList => {
            const contactArr = [];
            let map = new Map();
            contactList.forEach(contact => {
                map.set(contact.key, []);
                contact.forEach(contactInfo => {
                    map.get(contact.key).push(contactInfo.key + ": " + contactInfo.val());
                });
            });
            // console.log(map);
            map.forEach((val, key) => {
                contactArr.push(<div className={"contacts"} key={key}>{key}</div>);
                val.forEach(value => {
                    contactArr.push(<div className={"contact"} key={value}>{value}</div>);
                })
            });
            this.setState({
                contacts: contactArr
            });
        });
    }

    render() {
        return (
            <div id="Contact">
                <div id="contactTitle">Contacts</div>
                <div className="contacts">
                    {this.state.contacts}
                </div>
            </div>
        );
    }
}

export default Contact;