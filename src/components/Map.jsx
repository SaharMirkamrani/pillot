import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styles from '../styles/main.module.css';

const Map = () => {
  return (
    <div className="mt-5 flex flex-col justify-center mx-auto">
      <label className="text-right my-2 mr-3">نقشه</label>
      <MapContainer
        className={styles.mapContainer}
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
