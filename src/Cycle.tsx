import React, { useEffect, useState } from "react";

export default function Cycle() {
  const [ac, setAc] = useState(1)
  const [color1, setColor1] = useState("white");
  useEffect(() => {
    setColor1("#CAF6F6");
  }, []) 
  const [color2, setColor2] = useState("white");
  useEffect(() => {
    setColor2("#FEA593");
  
  }, [ac]) 
  const [color3, setColor3] = useState("white");
  useEffect(() => {
    setColor3("#A393FE");
  }, []) 
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", flexDirection: "row", marginLeft: 12 }}>
        <div
          className="mounting"
          style={{
            backgroundColor: color1,
          }}
        >
          <h3>Mounting</h3>
          <div className="life">constructor</div>
          <div className="life">getDerivedStateFromProps</div>
          <div className="life">Render</div>
          <div className="life">ComponentDidMount / Effect</div>
        </div>
        <div className="update" style={{
            backgroundColor: color2,
          }}>
          <h3>Updating</h3>
          <div className="life">getDerivedStateFromProps</div>
          <div className="life">shouldComponentUpdate</div>
          <div className="life">Render</div>
          <div className="life">getSnapshotBeforeUpdate</div>
          <div className="life">componentDidUpdate / Effect</div>
        </div>
        <div className="unmount" style={{
            backgroundColor: color3,
          }}>
          <h3>Unmount</h3>
          <div className="life">componentWillUnmount / Effect</div>
        </div>
      </div>
      <button onClick={() => setAc(2)}>Click</button>
    </div>
  );
}
function Header() {
  return <h1>React-Hook , Lifecycle</h1>;
}
