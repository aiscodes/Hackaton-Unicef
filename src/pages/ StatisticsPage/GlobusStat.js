import React, { useState } from 'react';
import ReactGlobe from 'react-globe';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

export default function GlobusStat() {
  const [event, setEvent] = useState(null);
  const [details, setDetails] = useState(null);
  const [globe, setGlobe] = useState(null);
  const markers = [
    {
      id: 'marker1',
      city: 'Кыргызстан',
      color: 'red',
      coordinates: [	42.884420, 74.576620 ],
      value: 88178,
    },
    {
      id: 'marker2',
      city: 'США',
      color: 'purple',
      coordinates:[39.7837304, -100.4458825],
      value: 34307228,
    },
    {
      id: 'marker3',
      city: 'Индия',
      color: 'black',
      coordinates: [22.146730735244557, 78.40585631228514],
      value: 197415653,
    },
    {
      id: 'marker4',
      city: 'Франция',
      color: 'gold',
      coordinates:  [46.603354, 1.8883335],
      value: 29849065,
    },
    {
      id: 'marker5',
      city: 'Россия',
      color: 'green',
      coordinates:  [64.6863136, 97.7453061],
      value: 18274820,
    },
    {
      id: 'marker6',
      city: 'Великобритания',
      color: 'blue',
      coordinates: [54.7023545, -3.2765753],
      value: 41088485,
    },
  ];

  const options = { markerTooltipRenderer };

  function onClickMarker(marker, markerObject, event) {
    setEvent({
      type: 'CLICK',
      marker,
      markerObjectID: markerObject.uuid,
      pointerEventPosition: { x: event.clientX, y: event.clientY },
    });
    setDetails(markerTooltipRenderer(marker));
  }
  function markerTooltipRenderer(marker) {
    return `Country: ${marker.city} (Vaccinated: ${marker.value})`;
  }
  function onDefocus(previousFocus) {
    setEvent({
      type: 'DEFOCUS',
      previousFocus,
    });
    setDetails(null);
  }

  return (
    <div>
      <ReactGlobe
        width="100%"
        height="75vh"
        globeBackgroundTexture="https://your/own/background.jpg"
        markers={markers}
        options={options}
        onClickMarker={onClickMarker}
        onDefocus={onDefocus}
        onGetGlobe={setGlobe}
      />
      {details && (
        <div
          style={{
            background: 'white',
            position: 'absolute',
            fontSize: 20,
            bottom: 0,
            right: 0,
            padding: 12,
          }}
        >
          <p>{details}</p>
        </div>
      )}
    </div>
  );
}
