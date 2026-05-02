# Troubleshoot Vue 3 Form Using Google Maps Autocomplete, Submitting to Firebase

## Job Description

Hello. I'm a novice developer working on a Vue 3 project and I've followed tutorials to get this far. The form works and submits to Google Firebase Firestore and Storage, BUT, I'm stuck on a form and looking for help resolving the following:

1. Google Maps Autocomplete is working, but the auto-completed text disappears and does not submit with the form. This Stack Overflow question is the exact problem: https://stackoverflow.com/q/69710635/1459653

2. I want to submit the address info from autocomplete to Firebase, including the Apartment, unit, suite, or floor #, similar to what's shown here as `address2`: https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform#maps_places_autocomplete_addressform-html. The user may have to specify this and it may be a new added field.

3. I can't get an input field to properly upload multiple images and display those images or file names to the user.

4. The above image upload is not supposed to be required, but the form will not submit unless an image is attached. This should be fixed by removing `if (file.value)` and a few other lines of code from the `handleSubmit` function, but I must be making a mistake when I do this.

This is a quick request for a Vue 3 developer with more experience, but I will be grateful for someone's help and there will probably be more work down the road.

Note: I would like keep things as simple as possible and avoid additional layers of software and frameworks, such as Vuetify or Axios. Every additional service makes it harder for me to learn.

I'm using Tailwind CSS, which may look a little weird, with CSS right in the code.

Thank you.

## Acceptance Criteria

| ID | Type | Description |
| --- | --- | --- |
| 1 | Critical | Form submission successfully saves the full, auto-completed address from the Google Maps Places Autocomplete field to Firebase Firestore without the text disappearing. |
| 2 | Critical | Address submission includes structured components: street, city, state, ZIP, and an optional second field for apartment/unit/suite/floor number, as per the linked Google example. |
| 3 | Critical | Image upload field accepts multiple image files: PNG, JPG, JPEG, and displays selected file names or thumbnails to the user before upload. |
| 4 | Critical | Form submission works with or without attached images; the image upload field is truly optional and does not block submission. |
| 5 | Critical | Solution does not introduce additional major frameworks, such as Vuetify or Axios, and works within the existing Vue 3, Firebase, and Tailwind CSS stack. |
| 6 | Important | Updated code is cleanly integrated into the provided `CreateReview.vue` component with clear comments explaining the fixes. |

## Implementation Notes

- Keep the fix scoped to the existing Vue 3, Firebase, Google Maps Places Autocomplete, and Tailwind CSS setup.
- Preserve simple, tutorial-friendly code where possible.
- Prioritize fixing `CreateReview.vue` without introducing new architectural layers.

## Local Vue App

This repository now includes a minimal Vue 3 app at the project root.

1. Copy `.env.example` to `.env`.
2. Add the Firebase and Google Maps API values.
3. Install dependencies with `npm install`.
4. Start the app with `npm run dev`.

The app route at `/` renders `src/views/CreateReview.vue`.
