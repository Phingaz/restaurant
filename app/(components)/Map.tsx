"use client";
import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import { useMediaQuery } from "./utils/useMediaQuery";
import Image from "next/image";

const Map = ({ data }: { data: any }) => {
  const isMobile = useMediaQuery(768);

  const customIcon = new Icon({
    iconUrl: "/assets/pin-solid.svg",
    iconSize: [40, 40],
  });

  return (
    <MapContainer
      center={data[0].position}
      zoom={isMobile ? 10 : 12}
      scrollWheelZoom={false}
      className={`${isMobile ? "h-[400px]" : "h-[600px]"} w-full`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      {data.map((marker: any, i: number) => (
        <Marker key={i} position={marker.position} icon={customIcon}>
          <Popup>
            <div className="flex justify-center items-center gap-5 py-2 px-1">
              <div className="flex-[4]">
                <h3>{marker.title}</h3>
                <p className="leading-snug">{marker.subtitle}</p>
              </div>
              <div className="flex-[6]">
                <Image
                  src={marker.image}
                  alt={marker.title}
                  width={0}
                  height={0}
                  unoptimized
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
