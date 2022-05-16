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
            <p><strong>Location:</strong> {{airport.city + ", " + airport. state_full}}</p>
            <p><strong>Elevation:</strong> {{airport.elevation}} ft </p>
            <p><strong>Manager:</strong> {{airport.manager}}</p>
            <p><strong>Manager phone:</strong> {{airport.managerPhone}} </p>
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
});
</script>