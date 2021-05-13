<template>
    <div class="photos-container">

        <div class="display-Image-backdrop" ref="displayBackDrop" @click="CloseDisplayedImage"></div>
        <div class="displayed-Image" ref="displayedImage">
            <div class="close-displayed-image" @click="CloseDisplayedImage">
                <font-awesome-icon :icon="['fas', 'times-circle']" />
            </div>

            <span @click="handleChangeImage('previous')" :style="chevronLeft" >
                <font-awesome-icon :icon="['fas', 'chevron-left']" />
            </span>
            <div class="displayedImageContainer">
                <img :src="handleDisplayingImage()" alt="">
            </div>

            <span @click="handleChangeImage('next')" :style="chevronRight">
                <font-awesome-icon :icon="['fas', 'chevron-right']"  />
            </span>
        </div>




        <div class="userPhotos-main-container">


            <div class="userPhotos-container">
                <div class="user-photos-header">

                    <h5 v-if="this.userData.userName !== this.$store.state.userData.userName">{{handleUserNames}}'s
                        Photos
                    </h5>
                    <h5 v-else>Your Photos</h5>
                    <!-- if="this.userData.userName === this.$store.state.userData.userName" -->
                </div>


                <div class="userPhotos">
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
                displayedImageIndex: 0,
chevronRight:"visibility:visible",
chevronLeft:"visibility:visible",
            }
        },

        mounted() {
            this.loadData();

        },
        beforeUnmount() {
            this.loadData();

        },




        methods: {

            loadData(messageOnScreen) {
                this.userData = this.$store.state.users[this.userName];
                this.renderImage = this.userData.photos[0]

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

            handleDisplayingImage() {
                return this.renderImage.imageUrl

            },




            handleChangeImage(params) {

                if (params === "next") {

                    for (let index = 0; index < this.userData.photos.length; index++) {
                        if (this.renderImage.imageUrl === this.userData.photos[index].imageUrl) {
                            ;
                            if (index < this.userData.photos.length - 1) {
                                // this.chevronRight="visibility:hidden;"
                                return this.renderImage = this.userData.photos[index + 1]

                            }
                            else {
                                this.chevronRight ="visibility:visible;"
 this.chevronLeft = "visibility:visible;"
                                return this.renderImage = this.userData.photos[index]


                            }

                        }

                    }

                }
                else {

                    for (let index = 0; index < this.userData.photos.length; index++) {
                        if (this.renderImage.imageUrl === this.userData.photos[index].imageUrl) {
                            ;
                            if (index > 0) {
                                // this.chevronLeft = "visibility:hidden;"
                                return this.renderImage = this.userData.photos[index - 1]

                            }
                            else {
 this.chevronRight ="visibility:visible;"
                                this.chevronLeft = "visibility:visible;"
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
