
 
 import React from 'react';
 import dogpic from './doggie.jpg';
 import './NewCssApp.css';
 import './Arrangeapp.css';



 function SeventhComponent() {
 	return (
 		<div className="container">
   			<div className="row">
				    <div className="column-66">
				      <h1 className="xlarge-font"><b>The App</b></h1>
				      <h1 className="large-font" style={{color:"MediumSeaGreen"}}><b>Why buy it?</b></h1>
				      <p> <span style={{font:"36px"}}>Take photos like a pro.
				      		</span> You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				      <button className="button">Download Application</button>
				    </div>
					    <div className="column-33">
					    <img src={dogpic} className=".seventhcompimage"  />
	        				
	    				</div>
			    </div>

 			</div>

 	);

 }

 export default SeventhComponent;