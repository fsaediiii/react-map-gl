import Map from "../Map/map";

const mapStyle = {
  textAlign: "center",
  width: "100vw",
  height: "100vh",
};

function Home() {
  return (
    <div style={mapStyle}>
      <Map />
    </div>
  );
}

export default Home;
