import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from '../../redux/authReducer';




function UserProfile(props) {
    // const [userId, setUserId] = useState('')

    console.log(props)
    // console.log(userId)


    return (
        <div className="userProfile">
            <h1>Your Polymath Packages Collection</h1>

        </div>
    );
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { updateUser })(UserProfile);