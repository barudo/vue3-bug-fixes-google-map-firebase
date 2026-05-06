<template>
  <div class="max-w-screen-md mx-auto bg-white sm:bg-gray-50 px-0 sm:px-0 md:px-4 pt-4 pb-4 bg-rounded">
    <div>
        <h1 class="text-zaggray font-bold text-3xl text-center mt-8 mb-2.5 underline">Create a New Review</h1>
        <p class="italic text-center text-sm mb-14 text-zaggray">Be honest & kind</p>
      </div>


    <form @submit.prevent="handleSubmit" class="bg-white sm:bg-gray-50 zzzbg-red-100 zzzsm:bg-yellow-100 zzzmd:bg-blue-100 zzzlg:bg-green-100 zzzxl:bg-purple-100 zzz2xl:bg-pink-100 px-1 sm:px-4 py-4">

      <h3 class="question">What property?<span class="required">(required)</span></h3>
      <div>
        <input type="text" id="autocomplete" ref="autocomplete" class="border-gray-300 focus:border-zagblue focus:ring-zagblue rounded-lg w-full md:w-full" required placeholder="Enter an address" v-model="address">
      </div>

      <div class="mt-4">
        <label for="address2" class="block text-base mb-1">Apartment, unit, suite, or floor #<span class="optional">(optional)</span></label>
        <input type="text" id="address2" class="border-gray-300 focus:border-zagblue focus:ring-zagblue rounded-lg w-full md:w-full" placeholder="Apt, suite, unit, building, floor, etc." v-model="address2">
      </div>

      <hr class="mt-8 mb-8">

      
      <h3 class="question mb-4">What kind of property is it?<span class="required">(required)</span></h3>

      <!-- BEGIN "What kind of property" as a selection -->
      <div class="space-y-0">
        <select required name="property_type" id="property_type" v-model="property_type" class="rounded bg-white hover:placeholder-gray-600 hover:border-gray-400 focus:bg-white focus:placeholder-gray-400 text-zaggray border-gray-300">
          <option value="">Please select</option>
          <option value="1_family">Single family house</option>
          <option value="Condo">Condominium</option>
          <option value="townhouse">Townhouse</option>
          <option value="coop">Cooperative</option>
          <option value="mobilehome_yurt_etc">Mobile home, yurt, etc.</option>
          <option value="multi_family">Multi-family house</option>
          <option value="commercial">Commercial</option>
          <option value="raw_land">Raw land</option>

        </select>

          
      </div>
      <!-- END "What kind of property" as a selection -->


      <hr class="mt-8 mb-8">

      <div class="space-y-2"> 
        <h3 class="question">Pros<span class="optional">(optional)</span></h3>
        <p class="text-base">In just a few words, what are 3 <span class="text-indigo-900">positive</span> things about the house, property or neighborhood?</p>
        <label for="propPros" class="block text-zagblue text-sm ml-0.5 italic">separate , with , commas</label>
        <TagInput class="block peer placeholder-transparent focus:placeholder-transparent hover:placeholder-transparent border-gray-300 focus:border-zagblue focus:ring-zagblue rounded-lg w-full md:w-full" placeholder="separate , with , commas" alt="add short tags describing positives, separating each with a comma" id="propPros" v-model="propPros" />
        <!-- <label for="propPros" class="pt-6 sm:pt-0 absolute transition-all duration-500 ease-in-out pl-1 sm:pl-0
          
        peer-placeholder-shown:text-gray-600 peer-placeholder-shown:left-4 peer-placeholder-shown:top-[5.7rem] peer-placeholder-shown:opacity-80 peer-placeholder-shown:text-base 
        peer-focus:text-zagblue peer-focus:top-[3.8rem] peer-focus:left-2 peer-focus:text-sm
        text-zagblue sm:left-0 top-[3.8rem] left-2 text-sm  bg-green-200 peer-focus:bg-yellow-300 peer-placeholder-shown:bg-red-300 peer-placeholder:bg-blue-300  

      ">separate , with , commas</label> -->
      </div>

      <!-- <hr class="mt-8 mb-12 invisible"> -->
      <hr class="mt-10 mb-10">
    

      <div class="space-y-2"> 
        <h3 class="question">Cons<span class="optional">(optional)</span></h3>
        <p class="text-base">List up to 3 <span class="text-indigo-900">negatives</span>, or things you don’t like:</p>
        <label for="propCons" class="block text-zagblue text-sm ml-0.5 italic">separate , with , commas</label>
        <TagInput class="block peer placeholder-transparent focus:placeholder-transparent hover:placeholder-transparent border-gray-300 focus:border-zagblue focus:ring-zagblue rounded-lg w-full md:w-full" placeholder="separate , with , commas" alt="add short tags describing negatives, separating each with a comma" id="propCons" v-model="propCons" />
        <!-- <label for="propCons" class="pt-6 sm:pt-0 absolute transition-all duration-500 ease-in-out pl-1 sm:pl-0
          
        peer-placeholder-shown:text-gray-600 peer-placeholder-shown:left-4 peer-placeholder-shown:top-[4.2rem] peer-placeholder-shown:opacity-80 peer-placeholder-shown:text-base
        peer-focus:text-zagblue peer-focus:top-[2.2rem] peer-focus:left-2 peer-focus:text-sm
        text-zagblue sm:left-0 top-[2.2rem] left-2 text-sm

        ">separate , with , commas</label> -->
      </div>
      
      <!-- <hr class="mt-10 mb-12 invisible"> -->
      <hr class="mt-10 mb-10 border-12">

      <h3 class="question">When were you physically at the property?<span class="required">(required)</span></h3>

      <div class="space-y-0">

          <div>
            <input type="radio" id="0" value="0" name="whenReviewerVisitedProp" required v-model="whenReviewerVisitedProp">
            <label class="text-base inline-flex ml-4" for="0">Never</label>
          </div>
          

          <div>
            <input type="radio" id="30" value="30" name="whenReviewerVisitedProp" required v-model="whenReviewerVisitedProp">
            <label class="text-base inline-flex ml-4" for="30">Within the last month</label>
          </div>
          

          <div>
            <input type="radio" id="180" value="180" name="whenReviewerVisitedProp" required v-model="whenReviewerVisitedProp">
            <label class="text-base inline-flex ml-4" for="180">Within the last 6 months</label>
          </div>
          

          <div>
            <input type="radio" id="181" value="181" name="whenReviewerVisitedProp" required v-model="whenReviewerVisitedProp">
            <label class="text-base inline-flex ml-4" for="181">More than 6 months ago</label>
          </div>

      </div>
      

      <hr class="mt-8 mb-8">

      <h3 class="question">What, if anything, is misleading or untrue in the listing or photos?<span class="optional">(optional)</span></h3>
      
      <textarea class="border-gray-300 focus:border-zagblue focus:ring-zagblue rounded-lg w-full md:w-full" v-model="whatInListingIsUntrue" placeholder="If nothing, leave blank" rows="3"></textarea>


      <hr class="mt-8 mb-8">

      <h3 class="question">$7,000<span class="optional">(optional)</span></h3>
      <label for="whatToRepairUpgradeAdd" class="text-base pb-3.5 mt-3.5">If you were going to live here and received a $7,000 gift card, good for any product or service, <span class="font-semibold text-base">what would you repair, upgrade or add?</span> Why?</label>
      
      <textarea class="border-gray-300 focus:border-zagblue focus:ring-zagblue rounded-lg w-full md:w-full" v-model="whatToRepairUpgradeAdd" placeholder="If nothing, leave blank" rows="3"></textarea>


      <hr class="mt-8 mb-8">


        <!-- BEGIN Star Ratings v2 -->

      <h3 class="question">On a 1 - 5 scale, with 5 being the best, how would you rate these:<span class="optional">(optional)</span></h3>

      <div class="row-span-1">
      <div class="inline-flex items-end">
        <p class="pb-1 text-sm sm:text-base ml-0 sm:ml-6 mr-2">Smell & odor free:</p>
        <!-- smell_rating -->
        <div>
          <fieldset class="rating float-left justify-end text-base sm:text-lg" alt="five empty rating stars in a horizontal line. Select the star that matches your rating. Example, select 3rd star if rating is 3 out of 5">   
              <input type="radio" id="smell_rating_star5" v-model.number="smell_rating" value="5">
              <label for="smell_rating_star5">5 stars</label>
              <input type="radio" id="smell_rating_star4" v-model.number="smell_rating" value="4" />
              <label for="smell_rating_star4">4 stars</label>
              <input type="radio" id="smell_rating_star3" v-model.number="smell_rating" value="3" />
              <label for="smell_rating_star3">3 stars</label>
              <input type="radio" id="smell_rating_star2" v-model.number="smell_rating" value="2" />
              <label for="smell_rating_star2">2 stars</label>
              <input type="radio" id="smell_rating_star1" v-model.number="smell_rating" value="1" />
              <label for="smell_rating_star1">1 star</label>
          </fieldset>
        </div>
      </div>
      </div>


    <div class="row-span-1">
    <div class="inline-flex items-end">
        <p class="pb-1 text-sm sm:text-base ml-12 sm:ml-24 md:ml-6 mr-2 pl-5 sm:pl-1.5 md:pl-20">Kitchen:</p>
        <!-- kitchen_rating -->
        <div>
          <fieldset class="rating float-left justify-end text-base sm:text-lg" alt="five empty rating stars in a horizontal line. Select the star that matches your rating. Example, select 3rd star if rating is 3 out of 5">   
            <input type="radio" id="kitchen_rating5" v-model.number="kitchen_rating" value="5" />
            <label for="kitchen_rating5">5 stars</label>
            <input type="radio" id="kitchen_rating4" v-model.number="kitchen_rating" value="4" />
            <label for="kitchen_rating4">4 stars</label>
            <input type="radio" id="kitchen_rating3" v-model.number="kitchen_rating" value="3" />
            <label for="kitchen_rating3">3 stars</label>
            <input type="radio" id="kitchen_rating2" v-model.number="kitchen_rating" value="2" />
            <label for="kitchen_rating2">2 stars</label>
            <input type="radio" id="kitchen_rating1" v-model.number="kitchen_rating" value="1" />
            <label for="kitchen_rating1">1 star</label>
          </fieldset>
        </div>
      </div>
    </div>

    
    <div class="row-span-1">
      <div class="inline-flex items-end">
        <p class="pb-1 text-sm sm:text-base ml-2.5 sm:ml-3 md:ml-5 mr-2 pl-5 sm:pl-12 md:pl-10">Bathroom(s):</p>
        <!-- bathrooms_rating -->
        <div>
          <fieldset class="rating float-left justify-end text-base sm:text-lg" alt="five empty rating stars in a horizontal line. Select the star that matches your rating. Example, select 3rd star if rating is 3 out of 5">  
            <input type="radio" id="bathrooms_rating5" v-model.number="bathrooms_rating" value="5" />
            <label for="bathrooms_rating5">5 stars</label>
            <input type="radio" id="bathrooms_rating4" v-model.number="bathrooms_rating" value="4" />
            <label for="bathrooms_rating4">4 stars</label>
            <input type="radio" id="bathrooms_rating3" v-model.number="bathrooms_rating" value="3" />
            <label for="bathrooms_rating3">3 stars</label>
            <input type="radio" id="bathrooms_rating2" v-model.number="bathrooms_rating" value="2" />
            <label for="bathrooms_rating2">2 stars</label>
            <input type="radio" id="bathrooms_rating1" v-model.number="bathrooms_rating" value="1" />
            <label for="bathrooms_rating1">1 star</label>
          </fieldset>
        </div>
      </div>
    </div>


    <div class="row-span-1">
      <div class="inline-flex items-end">
        <p class="pb-1 text-sm sm:text-base ml-6 sm:ml-2.5 mr-2 pl-8 sm:pl-20 md:pl-20">Windows:</p>
        <!-- windows_rating -->
        <div>
          <fieldset class="rating float-left justify-end text-base sm:text-lg" alt="five empty rating stars in a horizontal line. Select the star that matches your rating. Example, select 3rd star if rating is 3 out of 5">   
            <input type="radio" id="windows_rating_star5" v-model.number="windows_rating" value="5" />
            <label for="windows_rating_star5">5 stars</label>
            <input type="radio" id="windows_rating_star4" v-model.number="windows_rating" value="4" />
            <label for="windows_rating_star4">4 stars</label>
            <input type="radio" id="windows_rating_star3" v-model.number="windows_rating" value="3" />
            <label for="windows_rating_star3">3 stars</label>
            <input type="radio" id="windows_rating_star2" v-model.number="windows_rating" value="2" />
            <label for="windows_rating_star2">2 stars</label>
            <input type="radio" id="windows_rating_star1" v-model.number="windows_rating" value="1" />
            <label for="windows_rating_star1">1 star</label>
          </fieldset>
        </div>
      </div>
    </div>

    <!-- END Star Ratings v2 -->

      <hr class="mt-8 mb-8"> 
      

      <h3 class="question">Photos <span class="optional">(optional)</span></h3>
      <div class="text-sm text-gray-500 ml-0.5 mb-1">Any photos of the house or neighborhood&thinsp;?</div>
      <div class="border-dashed border-2 border-gray-300 bg-white rounded-md pt-4 pb-6 space-y-4">
        <div class="text-gray-500 text-center font-normal text-base mb-10"><!-- mb-10 on left is is new for vue3-file-selector test --><fa icon="cloud-upload-alt" size="4x" alt="cloud icon" class="text-gray-500 text-opacity-70 -mb-2"/></div>

        <!-- BEGIN new file input button -->

        <div class="text-gray-500 text-center font-normal text-sm">
          <label for="image_uploads" class=""><span class="border border-gray-500 hover:border-indigo-900 hover:ring-indigo-200 hover:ring-2 hover:bg-indigo-50 px-2.5 mr-1.5 py-0.5 rounded-md bg-gray-50 hover:bg-100 text-sm">Upload <fa icon="camera-retro" size="lg" alt="camera icon" class="mx-1"/> files</span><span class="text-gray-600 text-base ml-1 hidden"> or drag &#8210;n&#8210; drop</span></label> 
          <input type="file" id="image_uploads" name="image_uploads" accept=".png,.jpg,.jpeg,image/png,image/jpeg" @change="handleChange" multiple class="invisible text-pink-400"/>  <!-- class="invisible" hides default "browse..." + file name -->
          <div class="error">{{ fileError }}</div>
          
          <div class="text-gray-500 opacity-90 text-center text-sm font-light">PNG, JPG, JPEG &thinsp;up to 10&thinsp;MB</div>

          <div v-if="selectedImages.length" class="mt-4 px-6 text-left">
              <p class="text-sm text-zagblue text-center mb-2">Selected image files:</p>
              <ul class="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-600">
                <li v-for="image in selectedImages" :key="image.previewUrl" class="list-none">
                  <img :src="image.previewUrl" :alt="image.name" class="w-full aspect-square object-cover rounded border border-gray-200 bg-gray-50">
                  <span class="block mt-1 truncate" :title="image.name">{{ image.name }}</span>
                </li>
              </ul>
          </div>

        </div>
        
        <!-- END new file input button --> <!-- was accept=".jpg, .jpeg, .png" -->
        


        <!-- BEGIN vue3-file-selector -->

        <!-- <div class="text-gray-500 text-center font-normal text-sm">
          <file-selector v-model="files" v-slot="{ openDialog }">
            <span @click="openDialog" class="border border-gray-500 hover:border-indigo-900 hover:ring-indigo-200 hover:ring-2 hover:bg-indigo-50 px-2.5 mr-1.5 py-0.5 rounded-md bg-gray-50 hover:bg-100 text-sm">Upload <fa icon="camera-retro" size="lg" alt="camera icon" class="mx-1"/> files</span>
          </file-selector>
          <p class="text-gray-500 opacity-90 text-center text-sm font-light mt-6">PNG, JPG, JPEG &thinsp;up to 10&thinsp;MB</p>
        </div> -->


        <!-- END vue3-file-selector -->


      </div>

      <hr class="mt-8 mb-8">
      <!-- END test of new upload design-->

      <h3 class="question">Anything else?<span class="optional">(optional)</span></h3>
      <textarea class="border-gray-300 focus:border-zagblue focus:ring-zagblue rounded-lg w-full md:w-full" v-model="reviewerTextReview" placeholder="Short snippet? &nbsp;Detailed review?" rows="8"></textarea>
      
      <hr class="mt-8 mb-8">

      <h3 class="question">Do you have any relationship with the seller or real estate agent?<sup><fa :icon="['far', 'question-circle']" size="sm" class="ml-0.5 text-zaggray"/></sup><span class="required">(required)</span></h3>

      <div class="space-y-0">
          <div>
            <input type="radio" id="none" value="none" name="reviewerAnyRelWithSellerOrAgent" required v-model="reviewerAnyRelWithSellerOrAgent">
            <label class="text-base inline-flex ml-4 align-bottom" for="none"><fa :icon="['far', 'meh-blank']" class="text-zaggray text-xl"/>&nbsp;&nbsp;None</label>
          </div>
          

          <div>
            <input type="radio" id="acquainted" value="acquainted" name="reviewerAnyRelWithSellerOrAgent" required v-model="reviewerAnyRelWithSellerOrAgent">
            <label class="text-base inline-flex ml-4 align-bottom" for="acquainted"><fa :icon="['far', 'meh']" class="text-zaggray text-xl"/>&nbsp;&nbsp;Acquainted</label>
          </div>
          

          <div>
            <input type="radio" id="solid" value="solid" name="reviewerAnyRelWithSellerOrAgent" required v-model="reviewerAnyRelWithSellerOrAgent">
            <label class="text-base inline-flex ml-4 align-bottom" for="solid"><fa :icon="['far', 'grin']" class="text-zaggray text-xl"/>&nbsp;&nbsp;Solid</label>
          </div>
      </div>
      

      <hr class="mt-8 mb-8">

      <h3 class="question">Privacy<sup><fa :icon="['far', 'question-circle']" size="sm" class="ml-0.5 text-zaggray"/></sup><span class="font-normal text-sm text-zaggray pl-1 pr-0.5">for this review</span><span class="required">(required)</span></h3>
      
      <div class="space-y-0 mb-16">
          <div>
            <input type="radio" id="postFullPublic" value="postFullPublic" name="reviewPrivacy" required v-model="reviewPrivacy">
            <label class="text-base inline-flex ml-4 align-bottom" for="postFullPublic"><fa icon="user" class="text-zaggray text-xl"/>&nbsp;&nbsp;Public</label>
          </div>
          

          <div>
            <input type="radio" id="postAnonPublic" value="postAnonPublic" name="reviewPrivacy" required v-model="reviewPrivacy">
            <label class="text-base inline-flex ml-4 align-bottom" for="postAnonPublic"><fa icon="user-secret" class="text-zaggray text-xl"/>&nbsp;&nbsp;Incognito</label>
          </div>
          

          <div>
            <input type="radio" id="keepFullyPrivate" value="keepFullyPrivate" name="reviewPrivacy" required v-model="reviewPrivacy">
            <label class="text-base inline-flex ml-4 align-bottom" for="keepFullyPrivate"><fa icon="ghost" class="text-zaggray text-xl"/>&nbsp;&nbsp;Private</label>
          </div>
      </div>
      


      <button v-if="!isPending" class="border-indigo-900 border rounded-md py-1.5 px-5 text-lg hover:bg-indigo-900 hover:text-white hover:ring-pink-500 text-zaggray">Submit review&nbsp;&nbsp;<fa icon="pencil-alt" /></button>
      <button v-else disabled>Saving...</button>
    </form>
  </div>
</template>

<script>
import { onBeforeUnmount, ref } from 'vue'
import useStorage from '@/composables/useStorage'
import useCollection from '@/composables/useCollection'
import getUser from '@/composables/getUser'
import { timestamp } from '@/firebase/config'
import { useRouter } from 'vue-router'
// import { FileSelector, Dropzone, DialogButton } from 'vue3-file-selector'
import TagInput from "@/components/TagInput.vue";

export default {
  /* BEGIN from vue3-file-selector */
  //   components: {  
  //   FileSelector,  
  //   Dropzone,  
  //   DialogButton  
  // },
  /* END from vue3-file-selector */  
  components: {
    TagInput: TagInput,
  },
  data() {
    return {
      tags: ["Hello", "World"],
      tags2: ["Hello"],
    };
  },

  mounted() {
    this.initPlacesAutocomplete();
    },

  methods: {
    initPlacesAutocomplete() {
      // The Google Maps SDK loads asynchronously, so it may not be ready when mounted() runs.
      // Retry until the Places library is available before creating the autocomplete widget.
      if (!window.google || !window.google.maps || !window.google.maps.places) {
        window.setTimeout(() => this.initPlacesAutocomplete(), 300);
        return;
      }

      // State of NJ = LatLngBounds(39.833851, -74.871826)
      const autocomplete = new window.google.maps.places.Autocomplete(
        this.$refs["autocomplete"],
        {
          bounds: new window.google.maps.LatLngBounds(
            new window.google.maps.LatLng(39.833851, -74.871826)
          ),
          fields: ["address_components", "geometry", "formatted_address", "name"],
          componentRestrictions: { country: ["us", "ca"] },
          types: ["address"],
        }
      );

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();

        if (!place.geometry || !place.geometry.location) {
          // User typed an address without choosing a suggestion, or the
          // Place Details request failed.
          window.alert("No details available for input: '" + place.name + "'");
          return;
        }

        // Google Autocomplete changes the DOM input directly, so copy the
        // selected place back into Vue state before the form is submitted.
        this.address = place.formatted_address || this.$refs["autocomplete"].value || "";
        this.addressComponents = this.parsePlaceAddress(place.address_components || []);
      });
    },
    parsePlaceAddress(components) {
      const getComponent = (type, property = "long_name") => {
        const component = components.find((item) => item.types.includes(type));
        return component ? component[property] : "";
      };

      const streetNumber = getComponent("street_number");
      const route = getComponent("route");
      const subpremise = getComponent("subpremise");
      const city =
        getComponent("locality") ||
        getComponent("postal_town") ||
        getComponent("sublocality") ||
        getComponent("administrative_area_level_3");
      const state = getComponent("administrative_area_level_1", "short_name");
      const zip = getComponent("postal_code");

      return {
        street: [streetNumber, route].filter(Boolean).join(" "),
        city,
        state,
        zip,
        subpremise
      };
    }
  },
  setup() {
    /* BEGIN from vue3-file-selector */
    // const files = ref([]) 
    /* END from vue3-file-selector */
    const { filePath, url, uploadImage } = useStorage()
    const { error, addDoc } = useCollection('reviews')
    const { user } = getUser()
    const router = useRouter()

    const address = ref('')
    const address2 = ref('')
    const addressComponents = ref({
      street: '',
      city: '',
      state: '',
      zip: '',
      subpremise: ''
    })
    const property_type = ref('')
    // const propPros = ref('')
    // const propCons = ref('')
    const propPros = ref([])
    const propCons = ref([])
    const whenReviewerVisitedProp = ref('')
    const whatInListingIsUntrue = ref('')
    const whatToRepairUpgradeAdd = ref('')
    const reviewerTextReview = ref('')
    const reviewerAnyRelWithSellerOrAgent = ref('')
    const reviewPrivacy = ref('')
    const smell_rating = ref('')
    const kitchen_rating = ref('')
    const bathrooms_rating = ref('')
    const windows_rating = ref('')
    const zzz14 = ref('')

    const file = ref([]) // selected image files
    const selectedImages = ref([])
    const fileError = ref(null)
    const isPending = ref(false)

    const clearSelectedImagePreviews = () => {
      selectedImages.value.forEach((image) => URL.revokeObjectURL(image.previewUrl))
      selectedImages.value = []
    }

    const handleSubmit = async () => {
      isPending.value = true

      try {
        const uploadedImages = []
        const currentUser = user.value || {}

        for (const image of file.value) {
          await uploadImage(image)
          uploadedImages.push({
            name: image.name,
            url: url.value,
            filePath: filePath.value
          })
        }

        const res = await addDoc({
          address: address.value,
          address2: address2.value,
          addressComponents: {
            ...addressComponents.value,
            subpremise: addressComponents.value.subpremise || address2.value
          },
          property_type: property_type.value,
          propPros: propPros.value,
          propCons: propCons.value,
          whenReviewerVisitedProp: whenReviewerVisitedProp.value,
          whatInListingIsUntrue: whatInListingIsUntrue.value,
          whatToRepairUpgradeAdd: whatToRepairUpgradeAdd.value,
          reviewerTextReview: reviewerTextReview.value,
          reviewerAnyRelWithSellerOrAgent: reviewerAnyRelWithSellerOrAgent.value,
          reviewPrivacy: reviewPrivacy.value,
          smell_rating: smell_rating.value,
          kitchen_rating: kitchen_rating.value,
          bathrooms_rating: bathrooms_rating.value,
          windows_rating: windows_rating.value,
          zzz14: zzz14.value,

          userId: currentUser.uid || null,
          userName: currentUser.displayName || null,
          images: uploadedImages,
          coverUrl: uploadedImages[0] ? uploadedImages[0].url : null,
          filePath: uploadedImages[0] ? uploadedImages[0].filePath : null, // kept for existing delete logic
          songs: [],
          createdAt: timestamp()
        })
        if (!error.value) {
          router.push({ name: 'ReviewDetails', params: { id: res.id }})
        }
      } finally {
        isPending.value = false
      }
    }

    // allowed file types
    const types = ['image/png', 'image/jpeg']

    const handleChange = (e) => {
      const images = Array.from(e.target.files || [])
      clearSelectedImagePreviews()

      if (!images.length) {
        file.value = []
        fileError.value = null
        return
      }

      const invalidImage = images.find((image) => !types.includes(image.type))

      if (!invalidImage) {
        file.value = images
        selectedImages.value = images.map((image) => ({
          name: image.name,
          previewUrl: URL.createObjectURL(image)
        }))
        fileError.value = null
      } else {
        file.value = []
        fileError.value = 'Please select only png, jpg or jpeg image files'
      }
    }

    onBeforeUnmount(clearSelectedImagePreviews)
    
    return { address, address2, addressComponents, property_type, propPros, propCons, whenReviewerVisitedProp, whatInListingIsUntrue, whatToRepairUpgradeAdd, reviewerTextReview, reviewerAnyRelWithSellerOrAgent, reviewPrivacy, smell_rating, kitchen_rating, bathrooms_rating, windows_rating, zzz14, handleSubmit, fileError, handleChange, selectedImages, isPending,   }  /* from vue3-file-selector:  , files  */
  }
}
</script>

<style scoped>

/* BEGIN star rating from https://jsfiddle.net/swfour/fnU5V/4/ */
.rating {
    /* float:left; */
    border:none;
}
.rating:not(:checked) > input {
    position:absolute;
    top: auto; /* was -9999px; */
    clip:rect(0, 0, 0, 0);
}
.rating:not(:checked) > label {
    float:right;
    width:1.05em; /* was width:.90em; */
    padding:0 .1em;
    overflow:hidden;
    white-space:nowrap;
    cursor:pointer;
    font-size:200%;
    line-height:1.2;
    color:rgba(28, 117, 188, 0.43);  /* was #868e96; */
}
.rating:not(:checked) > label:before {
    content:'★ '; /* was content:'★ '; */
}
.rating > input:checked ~ label {
    color: #ffc107;
}
.rating:not(:checked) > label:hover, .rating:not(:checked) > label:hover ~ label {
    color:rgba(28, 117, 188, 0.8);
}
.rating > input:checked + label:hover, .rating > input:checked + label:hover ~ label, .rating > input:checked ~ label:hover, .rating > input:checked ~ label:hover ~ label, .rating > label:hover ~ input:checked ~ label {
    color: #ffc107;
}
.rating > label:active {
    position:relative;
}
/* END star rating from https://jsfiddle.net/swfour/fnU5V/4/ */

.pac-item {
  cursor: pointer;
  /* color: zagblue; */
}

.pac-item:hover {
  background-color: #dedaee;
}

.pac-item-query {
  font-size: 16px;
}

</style>
