(function () {
  window.google = window.google || {
    maps: {
      Map: function () {},
      LatLng: function () {},
      MapTypeId: { ROADMAP: "" },
      Marker: function ({ position }) {
        return {
          getPosition: () => ({
            lat: () => position.lat,
            lng: () => position.lng,
          }),
        };
      },
    },
  };
})();
