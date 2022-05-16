<template>
    <GoogleMap 
        v-if="center && markerOptions"
        :api-key="GOOGLE_MAPS_API_KEY" 
        style="width: 100%; height: 500px" 
        :center="center" 
        :zoom="12"
    >
    <Marker  :options="markerOptions"> 
      <InfoWindow>
        <div id="contet">
          <div id="siteNotice"></div>
          <h3 id="firstHeading" class="firstHeading">{{airport.name}}</h3>
          <div id="bodyContent">
            <h5>Location: {{airport.city + ", " + airport. state_full}}</h5>
            <h5>Elevation: {{airport.elevation}} ft </h5>
            <h5>Manager: {{airport.manager}}</h5>
            <h5>Manager phone: {{airport.managerPhone}} </h5>
          </div>
        </div>
      </InfoWindow>     
    </Marker>
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker, InfoWindow  } from "vue3-google-map";
const GOOGLE_MAPS_API_KEY = process.env.VUE_APP_GOOGLE_MAPS_API_KEY

export default defineComponent({
    name: "MapContainer",
    props: {
        center: Object,
        airport: Object
    },
    data: () => ({
      markerOptions: null,
      GOOGLE_MAPS_API_KEY: GOOGLE_MAPS_API_KEY
    }),
  components: { GoogleMap, Marker, InfoWindow  },
  mounted(){
    this.setMarkerOptions()
  },
  methods: {
    setMarkerOptions() {
      this.markerOptions = { position: this.center, label: "A" }
      console.log(this.GOOGLE_MAPS_API_KEY, "Key")
      console.log(this.markerOptions, "Options")
      console.log(this.center, "Center")
    }
  }
  // setup() {
  //   console.log(this.lat, this.lng)
  //   const center = { lat: this.lat, lng: this.lng };
  //   const markerOptions = { position: center, label: "L", title: "LADY LIBERTY" };
  //   const GOOGLE_MAPS_API_KEY = process.env.VUE_APP_GOOGLE_MAPS_API_KEY
  //   return { center, markerOptions, GOOGLE_MAPS_API_KEY  };
  // },
});
</script>