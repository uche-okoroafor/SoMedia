<template>
    <div class="photos-container">

        <div class="display-Image-backdrop" ref="displayBackDrop" @click="CloseDisplayedImage"></div>
        <div class="displayed-Image" ref="displayedImage">
            <div class="close-displayed-image" @click="CloseDisplayedImage">
                <font-awesome-icon :icon="['fas', 'times-circle']" />
            </div>

            <span @click="handleChangeImage('previous')" class="chevron-left-span" :style="chevronLeft">
                <font-awesome-icon :icon="['fas', 'chevron-left']" />
            </span>
            <div class="displayedImageContainer">
                <img :src="handleDisplayingImage()" alt="">
            </div>

            <span @click="handleChangeImage('next')" class="chevron-right-span" :style="chevronRight">
                <font-awesome-icon :icon="['fas', 'chevron-right']" />
            </span>

        </div>
 <!-- <video width="140" max-height="300" controls v-if="photo.imageId.includes('video')">
            <source :src="photo.imageUrl" type="video/mp4">
            <source :src="photo.imageUrl" type="video/ogg">
            Your browser does not support HTML video.
          </video> -->



        <div class="userPhotos-main-container">


            <div class="userPhotos-container">
                <div class="user-photos-header">

                    <h5 v-if="this.userData.userName !== this.$store.state.userData.userName">{{handleUserNames}}'s
                        Photos
                    </h5>
                    <h5 v-else>Your Photos</h5>
                    <!-- if="this.userData.userName === this.$store.state.userData.userName" -->
                </div>

                <div class="photo-empty comment" v-if="!userData.photos.length">
                    Add Your Photos
                </div>
                <div class="userPhotos" v-if="userData.photos.length">
                    <div v-for="photo in userData.photos" :key="photo.imageId" class="image-photos"
                        @click="displayImage(photo)">
                        <img :src="photo.imageUrl" alt="">


                    </div>
                </div>

            </div>
        </div>








        photos
    </div>
</template>
<script>
    export default {
        name: "Photos",
        props: ["userName"],
        data() {
            return {
                userData: {
                    photos: [],

                },
                renderImage: '',
                displayedImageArray: { index: 0, arrayLength: 0 },
                chevronRight: "visibility:visible",
                chevronLeft: "visibility:visible",
                displayClickedImage: undefined,
                showit: true,
            }
        },

        mounted() {
            this.loadData("on");

        },
        beforeUnmount() {
            this.loadData("off");

        },




        methods: {

            loadData(params) {
if(params === "on"){

 this.$store.dispatch("handleDisplayFunctions", {
        photosCompOnScreen: true,
          params: "photosCompOnScreen"
        })

}else {

 this.$store.dispatch("handleDisplayFunctions", {
        photosCompOnScreen: false,
          params: "photosCompOnScreen"
        })



}




                this.userData = this.$store.state.users[this.userName];

                if (this.userData.photos.length) {

                    this.renderImage = this.userData.photos[0]

                }



            },

            CloseDisplayedImage() {
                this.$refs.displayBackDrop.style = "display:none"
                this.$refs.displayedImage.style = "display:none"

            },
            displayImage(photo) {
                this.$refs.displayBackDrop.style = "display:block"
                this.$refs.displayedImage.style = "display:flex"
                this.renderImage = photo


            },


            handleEmptyPhotos(photo) {
                if (!photo === "") {
                    this.showit = true
                    return true
                }
                this.showit = false
                return false

            },

            handleDisplayingImage() {
                if (this.renderImage.imageUrl === undefined) {

                    return ""
                }
                return this.renderImage.imageUrl

            },




            handleChangeImage(params) {
                this.chevronLeft = "visibility:visible";
                this.chevronRight = "visibility:visible";

                if (params === "next") {

                    for (let index = 0; index < this.userData.photos.length; index++) {

                        if (this.renderImage.imageUrl === this.userData.photos[index].imageUrl) {
                            this.displayedImageArray.index = index;
                            this.displayedImageArray.arrayLength = this.userData.photos.length - 1;
                            if (index < this.userData.photos.length - 1) {

                                return this.renderImage = this.userData.photos[index + 1]

                            }
                            else {

                                // if (this.displayedImageArray.index === this.displayedImageArray.arrayLength) {

                                this.chevronRight = "visibility:hidden";

                                // }
                                return this.renderImage = this.userData.photos[index]


                            }

                        }

                    }

                }
                else {

                    for (let index = 0; index < this.userData.photos.length; index++) {

                        if (this.renderImage.imageUrl === this.userData.photos[index].imageUrl) {
                            this.displayedImageArray.index = index;
                            this.displayedImageArray.arrayLength = this.userData.photos.length - 1;
                            if (index > 0) {

                                return this.renderImage = this.userData.photos[index - 1]

                            }
                            else {

                                // if (this.displayedImageArray.index < 1) {
                                this.chevronLeft = "visibility:hidden";

                                // }
                                return this.renderImage = this.userData.photos[index]


                            }

                        }

                    }

                }

            },







        },
        computed: {

            handleUserNames() {


                const userName = this.userName

                this.loadData(this.userName)

                return userName

            }




        }


    }
</script>