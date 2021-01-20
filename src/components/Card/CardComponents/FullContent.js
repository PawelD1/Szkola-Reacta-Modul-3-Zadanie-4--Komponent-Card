import React, { useState} from 'react';

function FullContent(props) {
    const {intro, content} = props;
    const [showMore, setShowMore] = useState(false);
    const [color,setColor]=useState('red');
    const [textColor,setTextColor]=useState('white');
    const [info, setInfo] = useState("Show more...");
    return(
        <div>
            <div>{intro}</div>
                <button
                label={{info}}
                style={{background:color,color:textColor}}
                onClick={() => {
                    setShowMore(!showMore);
                    if(showMore) {
                        setColor("red");
                        setTextColor('black');
                        setInfo("Show more...");
                    }
                    else {
                        setColor("orange");
                        setTextColor('white');
                        setInfo("Show less...");
                    }
                }
                    }>{info}
                </button>
                    <div>{showMore && content}
                </div>
        </div>
    )
}

export default FullContent;