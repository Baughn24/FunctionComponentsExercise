//1a
function Ghostbusters(){
    return `Who you gonna call?`;
}
//1b
ReactDOM.render(
    <Ghostbusters/>,
    document.getElementById(`root`)
);
//2a
function Tagline(){
    return `We're ready to believe in you.`;
}
//2b
ReactDOM.render(
    <Tagline/>,
    document.getElementById(`root`)
);
//3a
function Janine(){
    return (
        <div>
            <h2>"I've quit better jobs than this."</h2>
            <h2>"Ghostbusters, whaddya want?"</h2>
        </div>
    )
}
//3b
ReactDOM.render(
    <Janine/>,
    document.getElementById(`root`)
);
//4a
function MassHysteria(){
    return (
        <div>
            <ul>"Forty years of darkness! Earthquakes! Volcanoes!"</ul>
            <ul>"The dead rising from the grave!"</ul>
            <ul>"Fire and brimstone coming down from the skies! Rivers and seas boiling!"</ul>
            <p>"Human sacrifice! Dogs and cats, living together! Mass hysteria!"</p>
        </div>
    )
}
//4b
ReactDOM.render(
    <MassHysteria/>,
    document.getElementById(`root`)
);
//5a
function GhostbustersLogo(){
    return <img/>;
}
//5b
ReactDOM.render(
    <GhostbustersLogo/>,
    document.getElementById(`root`)
);
//6a
function ToolsTalent(){
    //6b
    const w = We;
    //6c
    return (
        <div>
            <h1>"{w} had the tools."</h1>
            <h3>"{w} had the talent."</h3>
        </div>
    );
}
//6d
ReactDOM.render(
    <ToolsTalent/>,
    document.getElementById(`root`)
);
//7a
function GostbustersAll(){
    return (
<div>
<Ghostbusters/>
<Tagline/>
<Janine/>
<MassHysteria/>
<GhostbustersLogo/>
<ToolsTalent/>
</div>
    );
}
//7b
ReactDOM.render(
    <GhostbustersAll/>,
    document.getElementById(`root`)
);