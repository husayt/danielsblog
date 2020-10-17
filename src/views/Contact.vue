<template>
  <section class="relative block py-24 bg-gray-900 lg:pt-0">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap justify-center">
        <div class="w-full px-4 lg:w-6/12">
          <div
            class="relative flex flex-col w-full min-w-0 my-6 break-words bg-gray-300 rounded-lg shadow-lg"
          >
            <div class="flex-auto p-5 lg:p-10">
              <h4 class="text-2xl font-semibold">Want to work with us?</h4>
              <p
                class="mt-1 mb-4 leading-relaxed text-gray-600"
              >Complete this form and we will get back to you in 24 hours.</p>
              <div class="relative w-full mt-8 mb-3">
                <label
                  class="block mb-2 text-xs font-bold text-gray-700 uppercase"
                  for="full-name"
                >Full Name</label>
                <input
                  type="text"
                  class="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white rounded shadow focus:outline-none focus:shadow-outline"
                  placeholder="Full Name"
                  style="transition: all 0.15s ease 0s;"
                >
              </div>
              <div class="relative w-full mb-3">
                <label
                  class="block mb-2 text-xs font-bold text-gray-700 uppercase"
                  for="email"
                >Email</label>
                <input
                  type="email"
                  class="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white rounded shadow focus:outline-none focus:shadow-outline"
                  placeholder="Email"
                  style="transition: all 0.15s ease 0s;"
                >
              </div>
              <div class="relative w-full mb-3">
                <label
                  class="block mb-2 text-xs font-bold text-gray-700 uppercase"
                  for="message"
                >Message</label>
                <textarea
                  rows="4"
                  cols="80"
                  class="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white rounded shadow focus:outline-none focus:shadow-outline"
                  placeholder="Type a message..."
                ></textarea>
              </div>
              <div class="mt-6 text-center">
                <button
                  class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-gray-900 rounded shadow outline-none active:bg-gray-700 hover:shadow-lg focus:outline-none"
                  type="button"
                  style="transition: all 0.15s ease 0s;"
                >Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>
