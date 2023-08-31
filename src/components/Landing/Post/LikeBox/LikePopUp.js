// Popup.js
import React, { useEffect } from 'react';
import './Popup.css';
import { getLikers } from '../../../../api/postRequest';
import { useState } from 'react';
import spinner from '../../../images/spinner.gif';

const Popup = ({ onClose, postId, setProgress, likesCount }) => {

    const [likersList, setLikersList] = useState([]);
    const [fetchingLikers, setFetchingLikers] = useState(true);

    const fetchLikers = async () => {
        try {
            setFetchingLikers(true);
            setProgress(35);
            const data = await getLikers(postId);
            const likersData = data.data.result;
            setLikersList(likersData);
            setProgress(100);
            setFetchingLikers(false);
        }
        catch(err) {
            console.log("Unable to fetch likers ",err);
        }
    }

    useEffect(() => {
        fetchLikers();
    },[])

    return (
        <div className="popup" >
            <div className="popup-content" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h2>Likes ({likesCount})</h2>
                <p>{(fetchingLikers===false && likersList.length === 0) ? "No likes" : ""}</p>
                {fetchingLikers && <img src={spinner} style={{ height: "72px", width: "72px"}} alt='loading'/>}
                {likersList.map((item) => {
                    return <div key={item._id}><b>{item.firstname + " " + item.lastname}</b></div>
                })}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Popup;
