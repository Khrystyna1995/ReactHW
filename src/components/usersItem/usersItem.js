import React, {Component} from 'react';

class UsersItem extends Component {

    state = {isChanged: this.props.usersItem.isChanged}

    constructor(props) {
        super(props);

    }

    status = (usersItem) => {
        usersItem.isChanged = !usersItem.isChanged;
        this.setState({isChanged: !this.props.usersItem.isChanged})
    }
    render() {
        let {usersItem} = this.props;

        return (
            <div style={{color: "#007788"}}>
                {
                    usersItem.isChanged && (
                        <div>
                        <div >
                            <span>NAME:</span><span>{usersItem.name}</span>
                            <p>AGE:<span>{usersItem.age}</span></p>
                            <p style={{fontWeight: "900"}}>STATUS:<span>{usersItem.status.toString()}</span></p>
                        </div>
                        </div>
                    )
                }
                {
                    !usersItem.isChanged && (
                        <div>
                            <div>
                                <span>NAME:</span><span>{usersItem.name}</span>
                                <p>AGE:<span>{usersItem.age}</span></p>
                                <p>STATUS:<span>{usersItem.status.toString()}</span></p>
                            </div>
                        </div>
                    )
                }
                <button onClick={() => {return this.status(usersItem)}}>Change</button>
            </div>
        );
    }
}

export default UsersItem;



//     state = {isChanged: this.props.isChanged}
//
//     constructor(props) {
//         super(props);
//     }
//     status = (usersItem) => {
//         usersItem.isChanged = !usersItem.isChanged;
//         this.setState({isChanged: !this.props.usersItem.isChanged})
//     };
//     render() {
//         let {usersItem} = this.props;
//
//         return (
//             <div> {
//                 usersItem.isChanged && (
//                     <div>
//                         <h2>NAME: {usersItem.name}</h2>
//                         <p>AGE: {usersItem.age}</p>
//                         <p fontweight="bold">STATUS: {usersItem.status.toString()}</p>
//                     </div>
//                 )
//             }
//             {
//                 !usersItem.isChanged && (
//                     <div>
//                         <h2>NAME: {usersItem.name}</h2>
//                         <p>AGE: {usersItem.age}</p>
//                         <p fontweight="normal">STATUS: {usersItem.status.toString()}</p>
//                     </div>
//                 )
//             }
//                 <button onClick={() => {return this.status(usersItem)}}>Change</button>
//             </div>
//         );
// }





