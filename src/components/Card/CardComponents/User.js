import React from 'react';

function User(props){
    const {firstLetter, title, date} =props;
    const styles = {
        display: "flex",
        justifyContent: "space-around",
        padding: 2,
        alignItems: 'center',
        user: {
            color: "#fff",
            width: 50,
            height: 50,
            display: "flex",
            background: "orange",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
        },
        titlePosition: {
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
        },
        datePosition: {
            borderStyle: 'solid',
            borderColor:"orange",
            borderWidth: 3,
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
        },
        info: {
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            textAlign:'center'
        }
    }
    return (
        <header style={styles}>
            <h3 style={styles.user}>{firstLetter}</h3>
            {/* na firstLetter, czyli literę wewnątrz kółka zadziała align-items (wyśrodkowanie w pionie-y) i justify-content(wyśrodkowanie w poziomie) */}
            <div style={styles.info}>
            <h2 style={styles.titlePosition}>
                {title}
                <div style={{marginLeft: 8}}>
                <h6 style={styles.datePosition}>
                    {date}
                </h6> 
                </div>
            </h2>
            </div>
        </header>
    )
}

export default User;