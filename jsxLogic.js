import React from 'react';
import ReactDom from 'react-dom';

const firstName = 'Ryan';
const lastName ='Mocke';
const myElement = (
    <div>
        <h1>Hello {formatName(firstName,lastName)},</h1>
        <h2>welcome to the world of react.js using jsx</h2>
        {setInterval(tick,1000)}
    </div>
);


ReactDom.render(
    myElement,
    document.getElementById('displayDiv')
    );

function formatName(fname,sname){
    return fname +' '+sname;
}
function tick()
{   
    let curDate = new Date().toLocaleString();
    const greyDivs = (
        <div>
            <div className="outerDiv">
                <div className="greyDiv">
                    <div className="text">the time is now</div>
                    <div className="text">{curDate}</div>
                </div>
            </div>
        </div>
    );
    ReactDom.render(
        greyDivs,
        document.getElementById('timeDiv')
        );
}

