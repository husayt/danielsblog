<template>
  <div class="container mx-auto mt-3 lg:px-10">
    <div class="overflow-hidden bg-white shadow sm:rounded-lg">
      <div class="px-4 py-5 text-center sm:px-6">
        <figure>
          <img
            class="w-full rounded-lg"
            :src="property.photos[0].filename"
            alt=""
          />
          <!-- <figcaption>
            Sagittis scelerisque nulla cursus in enim consectetur quam.
          </figcaption> -->
        </figure>
      </div>
      <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 class="text-lg font-medium leading-6 text-gray-900">
          {{ property.reference }}
        </h3>
        <p class="max-w-2xl mt-1 text-sm leading-5 text-gray-500">
          {{ property.line1 }}
        </p>
      </div>
      <div class="px-4 py-5 sm:px-6">
        <dl class="grid grid-cols-1 row-gap-8 col-gap-4 sm:grid-cols-2">
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium leading-5 text-gray-500">
              Category
            </dt>
            <dd class="mt-1 text-sm leading-5 text-gray-900">
              {{ property.propertyType }}
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium leading-5 text-gray-500">Area</dt>
            <dd class="mt-1 text-sm leading-5 text-gray-900">
              {{ property.town }}
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium leading-5 text-gray-500">Type</dt>
            <dd class="mt-1 text-sm leading-5 text-gray-900">
              {{ property.listingType }}
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium leading-5 text-gray-500">Price:</dt>
            <dd class="mt-1 text-sm leading-5 text-gray-900">
              &pound; {{ property.price }} {{ property.priceType }}
            </dd>
          </div>
          <div class="sm:col-span-2">
            <!-- <dt class="text-sm font-medium leading-5 text-gray-500">About</dt> -->
            <dd class="mt-1 text-sm leading-5 text-gray-900 lg:mt-4">
              {{ property.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup="props">
import { computed, watch, ref, unref, toRaw } from "vue"
import { useRoute } from "vue-router"
// import { useFetch } from "vue-composable"
// https://gracemiller.landmax.pro/api/lettings
// `http://www.gracemiller.co.uk/data/all-proposals.json`
// async function fetchData(url) {
//   return fetch(url).then(d => d.json())
// }
// export default {
//   props: {
//     id: { type: String, default: "" },
//   },
// }
import properties from "/.data/properties.json"

const xdata = {
  agencyName: "Grace Miller Rustamli",
  intro:
    "Grace Miller & Co. are specialists in block management and estate\
          management in South West London, Surrey and beyond. We work with\
          Residents Management Companies and Freeholders who are responsible for\
          the management of their development.",
}
const route = useRoute()
// let properties = await fetchData("/.data/properties.json")

console.log(properties, props.id, route.params.id)

// console.log(unref(property), unref(id))

// export const property = {}
export const property = computed(() =>
  properties.find(x => x.reference === route.params.id)
)
export const agencyName = xdata.agencyName
</script>
