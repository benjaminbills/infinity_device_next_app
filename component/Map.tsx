import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '200px',
  height: '200px',
};

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_MAP_API}`,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <MapOut />;
}

function MapOut() {
  const center = useMemo(
    () => ({ lat: -1.2967846592389902, lng: 36.806933985281354 }),
    []
  );
  return (
    <GoogleMap
      zoom={18.7}
      center={center}
      mapContainerClassName='map-container'
    >
      <Marker position={center} />
    </GoogleMap>
  );
}

export default Map;
