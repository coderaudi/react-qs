import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, FormGroup, Input, Label } from 'reactstrap';

class Notes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            allNotes: [],
            currentNote: "the_def_note",
            color: '#008f68',
        };
    }

    addNote = (e) => {
        console.log(this.state.currentNote);
    }

    onChangeData = (name , value)=>{
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <h1>Notes</h1>
                <div className="col-md-3">
                    <Card body>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <FormGroup>
                            <Label for="exampleText">Text Area</Label>
                            <Input
                                type="textarea"
                                name="currentNote"
                                id="exampleText"
                                value={this.state.currentNote}
                                onChange={ e => this.onChangeData( e.target.name, e.target.value)}
                            />
                        </FormGroup>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button onClick={e => this.addNote(e)}>Go somewhere</Button>
                    </Card>
                </div>

            </div>
        );
    }
}

export default Notes;