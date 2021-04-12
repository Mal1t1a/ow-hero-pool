import React from 'react';
import logo from './logo.svg';
import './App.css';
import html2canvas from 'html2canvas';

var colourtypes = {
	"selected": "Selected",
	"red": "Never",
	"blue": "Primary",
	"purple": "Secondary",
	"orange": "If Needed"
};

class Colourbox extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			"colour": props.colour,
			"boxname": props.boxname,
			showname: props.showname,
			"onClicked": props.onClicked
		};

		// This binding is necessary to make `this` work in the callback
		this.onColourClicked = this.onColourClicked.bind(this);
	}

	onColourClicked(isset)
	{
		if (this.state.showname)
		{
			this.props.onClicked(this.state.colour);
		}
		else
		{
			this.setState({colour: window.selectedcolour});
		}
	}

	componentDidUpdate(prevProps)
	{
		if (this.props.colour != prevProps.colour)
		{
			this.setState({
				colour: this.props.colour
			});
		}
	}

	render()
	{
		if (this.state.showname)
		{
			return (
				<div onClick={this.onColourClicked} className="colourbox-container">
					<span className={["boxname", "text creamy-" + this.state.colour].join(" ")}>{this.state.boxname}</span>
					<div className={["colourbox", "bg creamy-" + this.state.colour, this.state.boxname].join(" ")} ></div>
				</div>
			);
		}
		else
		{
			return (
				<div onClick={this.onColourClicked} className="colourbox-container">
					<div className={["colourbox", "bg creamy-" + this.state.colour, this.state.boxname].join(" ")} ></div>
				</div>
			);
		}
	}
}


var colouredboxes = [
	"selected",
	"blue",
	"purple",
	"orange",
	"red"
];
window.selectedcolour = "blue";

class ColourBoxes extends React.Component
{
	constructor(props)
	{
		super(props);

		this.onSetColour = this.onSetColour.bind(this);
	}

	onSetColour(colour)
	{
		window.selectedcolour = colour;
		this.forceUpdate();
	}

	render() {
		var boxes = [
			"selected",
			"blue",
			"purple",
			"orange",
			"red"
		];
		for (var i = 0; i < boxes.length; i++)
		{
			if (i == 0)
			{
				boxes[i] = <Colourbox key={i} onClicked={this.onSetColour} showname={true} colour={window.selectedcolour} boxname={colourtypes[boxes[i]]} />;
			}
			else
			{
				boxes[i] = <Colourbox key={i} onClicked={this.onSetColour} showname={true} colour={boxes[i]} boxname={colourtypes[boxes[i]]} />;
			}
		}
		return (
			<div className="colouredboxes">
				{boxes}
			</div>
		);
	}
}


var heroes = [
	{
		name: "Tanks",
		startRange: "Off Tank",
		endRange: "Main Tank",
		heroes: [
			"Zarya",
			"Roadhog",
			"Sigma",
			"Wreckingball",
			"Dva",
			"Orisa",
			"Winston",
			"Reinhardt"
		]
	},
	{
		name: "DPS",
		startRange: "Hitscan",
		endRange: "Projectile",
		heroes: [
			"Ashe",
			"Mccree",
			"Widowmaker",
			"Soldier76",
			"Tracer",
			"Sombra",
			"Reaper",
			"Bastion",
			"Genji",
			"Mei",
			"Echo",
			"Junkrat",
			"Torbjorn",
			"Hanzo",
			"Doomfist",
			"Symmetra",
			"Pharah"
		]
	},
	{
		name: "Supports",
		startRange: "Main Support",
		endRange: "Flex Support",
		heroes: [
			"Brigitte",
			"Mercy",
			"Lucio",
			"Zenyatta",
			"Baptiste",
			"Ana",
			"Moira"
		]
	}
];

function HeroGroup(props)
{
	var icon;
	switch (props.name)
	{
		case "Tanks":
			icon = <svg className="icon" viewBox="0 0 32 32" role="presentation">
						<title>Tank</title>
						<path d="M29,10.7c0,2.1,0,4.1,0,6.2c0,0.6-0.1,1.1-0.4,1.6c-2.9,5.3-6.8,9.7-11.8,13.2c-0.6,0.4-1,0.4-1.6,0
					c-4.9-3.4-8.8-7.8-11.7-13c-0.3-0.6-0.4-1.2-0.4-1.8c0-3.9,0.1-7.8,0-11.7C3,2.3,5.2,1.9,7.1,1.4C10.4,0.6,13.3,0,16.6,0
					c3.1,0,7.7,1.1,9.4,1.6c1.3,0.4,2.7,0.9,2.9,2.2C29,4.9,28.9,6,29,7.1C29,8.3,29,9.5,29,10.7C29,10.7,29,10.7,29,10.7z"></path>
					</svg>;
		break;
		case "DPS":
			icon = <svg className="icon" viewBox="0 0 32 32" role="presentation">
						<title>Damage</title>
						<g>
							<rect x="2.1" y="28.1" width="7.1" height="3.9"></rect>
							<path d="M9.1,7c0,0,0-0.5,0-0.7C8.6,1.5,5.6,0,5.6,0s-3,1.5-3.5,6.3c0,0.2,0,0.7,0,0.7v18.4h3.5h3.5V7z"></path>
						</g>
						<g>
							<rect x="12.5" y="28.1" width="7.1" height="3.9"></rect>
							<path d="M19.5,7c0,0,0-0.5,0-0.7C19,1.5,16,0,16,0s-3,1.5-3.5,6.3c0,0.2,0,0.7,0,0.7v18.4H16h3.5V7z"></path>
						</g>
						<g>
							<rect x="22.9" y="28.1" width="7.1" height="3.9"></rect>
							<path d="M29.9,7c0,0,0-0.5,0-0.7C29.4,1.5,26.4,0,26.4,0s-3,1.5-3.5,6.3c0,0.2,0,0.7,0,0.7v18.4h3.5h3.5V7z"></path>
						</g>
					</svg>
		break;
		case "Supports":
			icon = <svg className="icon" viewBox="0 0 32 32" role="presentation">
						<title>Support</title>
						<path fillRule="evenodd" d="M29.3,10.2h-7.5V2.7c0-1.5-1.2-2.7-2.7-2.7h-6.3c-1.5,0-2.7,1.2-2.7,2.7v7.5H2.7
					c-1.5,0-2.7,1.2-2.7,2.7v6.3c0,1.5,1.2,2.7,2.7,2.7h7.5v7.5c0,1.5,1.2,2.7,2.7,2.7h6.3c1.5,0,2.7-1.2,2.7-2.7v-7.5h7.5
					c1.5,0,2.7-1.2,2.7-2.7v-6.3C32,11.4,30.8,10.2,29.3,10.2z"></path>
					</svg>
		break;
	}
	return (
		<div className="group">
			<h1 className="groupname">{icon} {props.name}</h1>
			{props.heroes}
		</div>
	);
}

class HeroPortrait extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {name: props.name, colour: props.colour};

		this.onHeroClicked = this.onHeroClicked.bind(this);
	}

	onHeroClicked()
	{
		this.setState({colour: window.selectedcolour});
	}

	render()
	{
		return (
			<div onClick={this.onHeroClicked} className="hero">
				<img src={'./imgs/' + this.state.name + '.png'} className="portrait" alt={this.state.name} />
				<Colourbox colour={this.state.colour} showname={false}/>
			</div>	
		);
	}
}

var groups = [];
for (var i = 0; i < heroes.length; i++)
{
	var newgroup = heroes[i];
	for (var j = 0; j < newgroup.heroes.length; j++)
	{
		var char = <HeroPortrait key={j} name={newgroup.heroes[j]} />;
		newgroup.heroes[j] = char;
	}
	newgroup = <HeroGroup key={i} name={newgroup.name} start={newgroup.startRange} end={newgroup.endRange} heroes={newgroup.heroes} />;
	groups.push(newgroup);
}

class App extends React.Component
{
	constructor(props)
	{
		super (props);
	}

	onCaptureClicked()
	{
		document.querySelector("html").classList.add("hide-scrollbar");
		html2canvas(document.querySelector(".App"), {x: 0, y: 0}).then(canvas => {
			document.querySelector("html").classList.remove("hide-scrollbar");
			
			var newdiv = document.createElement("div");
			var closebutton = document.createElement("img");
			closebutton.className = "closeshot";
			closebutton.src = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPgo=";
			closebutton.addEventListener("click", (e) => {
				newdiv.remove();
			});
			newdiv.className = "saveshot";

			canvas.style.width = null;
			canvas.style.height = null;
			canvas.style.opacity = 0;
			canvas.style.transform = "scale(0)";

			newdiv.appendChild(closebutton);
			newdiv.appendChild(canvas);
			newdiv.addEventListener("click", (e) => {
				newdiv.remove();
			});
			document.body.appendChild(newdiv);
			
			setTimeout(() => {
				canvas.style.opacity = null;
				canvas.style.transform = null;
			}, 1);
		});
	}

	render()
	{
		return (
			<div className="App">
				<div className="App-Content">
					<header>
						<h1>Overwatch Hero Pool</h1>
						<p>Click one of the boxes below to start labeling your hero pool</p>
					</header>
					<section>
						<ColourBoxes />
					</section>
					<section>
						{groups}
					</section>
					<footer>
						<h2>Made by: <a href="https://www.twitch.tv/mal1t1a">Mal1t1a</a> with <a href="https://reactjs.org/">React</a></h2>
					</footer>
				</div>
				<div data-html2canvas-ignore="true" className="screenshot" onClick={this.onCaptureClicked}>
					<img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMuMiIvPgogICAgPHBhdGggZD0iTTkgMkw3LjE3IDRINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yaC0zLjE3TDE1IDJIOXptMyAxNWMtMi43NiAwLTUtMi4yNC01LTVzMi4yNC01IDUtNSA1IDIuMjQgNSA1LTIuMjQgNS01IDV6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPgo=" />
				</div>
			</div>
		);
	}
}

export default App;
